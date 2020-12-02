import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estabelecimento } from 'src/app/models/Estabelecimento';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  nome;cnpj;senha;senhaConfirmacao;telefone : string;
  estabelecimento : Estabelecimento = new Estabelecimento();

  constructor(private service: EstabelecimentoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  cadastrar():void
  {
    this.estabelecimento.nome = this.nome;
    this.estabelecimento.senha = this.senha;
    this.estabelecimento.telefone = this.telefone;
    this.estabelecimento.cnpj = this.cnpj;
    this.service.cadastrar(this.estabelecimento).subscribe((estab)=>{
      //redirect to login
      console.log(estab);
    }); 
  }

}
