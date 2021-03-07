import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = 'http://168.138.141.237:33000/'
  token: string = 'lzMma3zQepNFsPwEmxrsM8hQDmyjNalNfDphTpk3'

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `${this.token}`
  })

  getUsers() {
    return this.httpClient.get<any>(this.baseUrl + `api/usuarios`, { headers: this.headers })
      .pipe(
        catchError(this.handleError))
  }

  getFilteredUsers(nome?, cpf?, email?, ativo?) {
    nome = nome !== "" ? `nome=${nome}&` : '';
    cpf = cpf !== "" ?  `cpf=${cpf}&` : '';
    email = email !== "" ? `email=${email}&` : '';
    ativo = ativo !== "" ?  `ativo=${ativo}` : '';
    return this.httpClient.get<any>(this.baseUrl + `api/usuarios?${nome}${cpf}${email}${ativo}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError))
  }

  editUser(payload, id) {
    return this.httpClient.put<any>(this.baseUrl + `api/usuarios/${id}`, payload, { headers: this.headers, observe: 'response' })
      .pipe(
        catchError(this.handleError))
  }

  createUser(payload) {
    return this.httpClient.post<any>(this.baseUrl + `api/usuarios`, payload, { headers: this.headers })
      .pipe(
        catchError(this.handleError))
  }

  deleteUser(id) {
    return this.httpClient.delete<any>(this.baseUrl + `api/usuarios/${id}`, { headers: this.headers, observe: 'response' })
      .pipe(
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
