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
  pessoas : number; 
  constructor(private service : SenhaService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idEstabelecimento = this.route.snapshot.paramMap.get("id");
    this.pessoas =  Math.floor((Math.random()*10) +1); 
    this.atualizarSenha();   
   
  }
  GerarSenha():void{
    console.log("Chegou aqui");
    this.senha.idEstabelecimento = this.idEstabelecimento;
    this.senha.idPessoa = "5f7f95ccbcb5dd2704c7471b";
    this.service.gerarSenha(this.senha).subscribe((senha)=>{
      this.senhaGerada = "Sua senha é: " +  senha.senha.toUpperCase();
    });  
  }
 
  atualizarSenha():void
 {
   if(this.pessoas > 0)
   {
      this.pessoas -= 1
      this.pessoasNaFila = "Você é a " + this.pessoas + "ª pessoa na fila.";
      setTimeout(() => 
      {
        this.atualizarSenha();
      },5000)
     
   }
   else
   {
      this.pessoasNaFila = "É a sua vez seu fela da puta!";
   }
 }
}
