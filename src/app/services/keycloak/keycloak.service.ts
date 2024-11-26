import { Injectable } from '@angular/core';
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
        url: "http://localhost:8080",
        realm: "interop-portal",
        clientId: "angular-web-client",
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
      enableLogging: true
    });

    if (authenticated) {
      this._profile = (await this.keycloak.loadUserProfile()) as UserProfile;
      this._profile.token = this.keycloak.token || "";
      this.isLoggedIn = true;
    } 
  }

  login() {
    return this.keycloak.login();
  }

  logout() {
    return this.keycloak.logout({ redirectUri: "http://localhost:4040" });
  }

  isTokenExpired(): boolean {
    return this.keycloak.isTokenExpired(15);
  }
}
