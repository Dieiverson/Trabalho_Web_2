import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient ) { }
  BASEURL = "http://localhost:1234/";

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.BASEURL+"Cadastrar",user);
  }

  atualizar(user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.BASEURL+"Update",user);
  }
  listar():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.BASEURL+"Listar");
  }
}
