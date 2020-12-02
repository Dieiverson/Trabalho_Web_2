import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarioColumns: string[] = ["usuario", "nome", "cpf", "dataCadastro"];
  usuarios: Usuario[] = [];
  usuariosTabela: MatTableDataSource<Usuario> = new MatTableDataSource(this.usuarios);

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((users)=>{
    this.usuarios = users;
     this.usuariosTabela = new MatTableDataSource(this.usuarios);
    });
  }




  

}
