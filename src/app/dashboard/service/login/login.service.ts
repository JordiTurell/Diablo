import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeadersService } from '../headers/headers.service';
import { Observable } from 'rxjs';
import { Login } from '../../models/login/login';
import { Token } from '../../models/token/token';
import { environment } from '../../enviorement/enviorement';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private headers:HeadersService) { 

  }

  authenticate(loginvm: Login): Observable<Token> {
    let header: HttpHeaders = this.headers.getheaderLogin();
    return this.http.post<Token>(
      `${api}/login`,
      loginvm,
      { headers: header }
    );
  }
}
