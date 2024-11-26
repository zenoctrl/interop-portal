import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeycloakService } from '../keycloak/keycloak.service';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: "root",
})
export class DataService {
  headers: any = {
    "Content-Type": "application/json",
  };

  constructor(private http: HttpClient, private keycloak: KeycloakService) {
    // this.headers.Authorization = this.keycloak.profile.token;
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(environment.baseUrl + url, { headers: this.headers });
  }

  post(url: string, payload: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + url, payload, { headers: this.headers });
  }

  put(url: string, payload: any): Observable<any> {
    return this.http.put<any>(environment.baseUrl + url, payload, { headers: this.headers });
  }

  delete(url: string, payload: any): Observable<any> {
    return this.http.delete<any>(environment.baseUrl + url, {headers: this.headers});
  }
}
