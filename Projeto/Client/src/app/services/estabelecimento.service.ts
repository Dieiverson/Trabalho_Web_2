import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../models/Estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }

  BASEURL = "http://localhost:1234/";

  cadastrar(estabelecimento: Estabelecimento): Observable<Estabelecimento>{
    return this.http.post<Estabelecimento>(this.BASEURL+"CadastrarEstabelecimento",estabelecimento);
  }
  listar():Observable<Estabelecimento[]>{
    return this.http.get<Estabelecimento[]>(this.BASEURL+"ListarEstabelecimentos");
  }
}
