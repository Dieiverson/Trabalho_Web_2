import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/models/Endereco';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome;usuario;cpf;senha;senhaConfirmacao:string;
  pais;estado;cidade;bairro;rua:string;
  numero:number;

  enderecoColumns: string[] = ["pais", "estado","cidade","bairro","rua","numero"];
  enderecos : Endereco[] = [];
  endereco : Endereco;
  enderecosTabela: MatTableDataSource<Endereco> = new MatTableDataSource(this.enderecos);
  user : Usuario = new Usuario();

  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  addEndereco():void{
    this.endereco = new Endereco();
    this.endereco.pais = this.pais;
    this.endereco.estado = this.estado;
    this.endereco.cidade = this.cidade;
    this.endereco.bairro = this.bairro;
    this.endereco.rua = this.rua;
    this.endereco.numero = this.numero;
    
    this.enderecos.push(this.endereco);
    //console.log(this.enderecos);
    this.enderecosTabela._updateChangeSubscription();
    this.pais = "";
    this.estado = "";
    this.cidade = "";
    this.bairro = "";
    this.rua = "";
    this.numero = null;
  }

  cadastrar():void
  {
    this.user.cpf          = this.cpf;
    this.user.dataCadastro = new Date();
    this.user.nome         = this.nome;
    this.user.senha        = this.senha;
    this.user.usuario      = this.usuario;
    this.user.enderecos    = this.enderecos;  
    
    if(this.user._id == null)
    {
      this.service.cadastrar(this.user).subscribe((usuario)=>{
        console.log(usuario);
      });  
    }
    else
    {
      this.service.atualizar(this.user).subscribe((usuario)=>{
        console.log(usuario);
      });  
    }
  }

}
