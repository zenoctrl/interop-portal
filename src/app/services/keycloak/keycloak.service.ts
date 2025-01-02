import { Injectable } from '@angular/core';
import { KEYCLOAK_CLIENT_ID, KEYCLOAK_REALM, KEYCLOAK_URL, REDIRECT_URI } from 'environments/environment';
import Keycloak from "keycloak-js";


export interface UserProfile {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
}

@Injectable({
  providedIn: "root",
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined;
  public isLoggedIn: boolean = false;

  get keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: KEYCLOAK_URL,
        realm: KEYCLOAK_REALM,
        clientId: KEYCLOAK_CLIENT_ID,
      });
    }
    return this._keycloak;
  }

  private _profile: UserProfile | undefined;

  get profile(): UserProfile | undefined {
    return this._profile;
  }

  async init() {
    const authenticated = await this.keycloak.init({
      onLoad: "login-required",
      // silentCheckSsoRedirectUri: 'assets/silent-check-sso.html',
      enableLogging: true
    });

    if (authenticated) {
      this._profile = (await this.keycloak.loadUserProfile()) as UserProfile;
      this._profile.token = this.keycloak.token || "";
      console.log(this._profile.token);
      this.isLoggedIn = true;
    } 
  }

  login() {
    return this.keycloak.login();
  }

  logout() {
    return this.keycloak.logout({ redirectUri: REDIRECT_URI });
  }

  isTokenExpired(): boolean {
    return this.keycloak.isTokenExpired(15);
  }
}
