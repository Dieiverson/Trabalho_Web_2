import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario;senha:string;
  user:Usuario = new Usuario();
  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  logar():void{
    this.user.senha = this.senha;
    this.user.usuario = this.usuario;    
    this.service.logar(this.user).subscribe((retorno)=>{
      if(Object.keys(retorno).length === 0)              
        this.service.showMessage("Usuário/Senha Inválidos! Tente Novamente. ");      
      else      
        this.router.navigate(['estabelecimento/listar']);      
    });  
  }
}
