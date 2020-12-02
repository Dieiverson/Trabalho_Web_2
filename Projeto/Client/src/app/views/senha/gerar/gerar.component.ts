import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Senha } from 'src/app/models/Senha';
import { SenhaService } from 'src/app/services/senha.service';

@Component({
  selector: 'app-gerar',
  templateUrl: './gerar.component.html',
  styleUrls: ['./gerar.component.css']
})
export class GerarComponent implements OnInit {

  idEstabelecimento;senhaGerada;pessoasNaFila : string;
  senha: Senha = new Senha(); 
  constructor(private service : SenhaService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idEstabelecimento = this.route.snapshot.paramMap.get("id");    
   
  }
  GerarSenha():void{
    console.log("Chegou aqui");
    this.senha.idEstabelecimento = this.idEstabelecimento;
    this.senha.idPessoa = "5f7f95ccbcb5dd2704c7471b";
    this.service.gerarSenha(this.senha).subscribe((senha)=>{
      this.senhaGerada = "Sua senha é: " +  senha.senha.toUpperCase();
    });
    let pessoas = (Math.random()*10) +1;
    this.pessoasNaFila = "Você é a " + Math.floor(pessoas) + "ª pessoa na fila."
  }
}
