import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,private snackBar: MatSnackBar ) { }
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
  logar(user:Usuario):Observable<Usuario>{
    console.log(user);
    return this.http.post<Usuario>(this.BASEURL+"Login",user);
  }
  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
