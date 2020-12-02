import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Senha } from '../models/Senha';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {


  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }
  BASEURL = "http://localhost:1234/";

  gerarSenha(senha: Senha): Observable<Senha>{
    return this.http.post<Senha>(this.BASEURL+"senha/gerar",senha);
  }


}
