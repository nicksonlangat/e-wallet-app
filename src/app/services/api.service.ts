import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint = 'https://07b8-41-80-98-232.in.ngrok.io/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  getTransactions(id) {
    return this.http.get(this.endpoint + `transactions/?user=${id}`)
  }

  createTransaction(data) {
    return this.http.post(this.endpoint + 'transactions/', data);
  }

  logInUser(data) {
    return this.http.post(this.endpoint + 'accounts/login', data);
  }

  getUserWallet(id){
    return this.http.get(this.endpoint + `wallets/?user__id=${id}`)
  }
}
