import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Estabelecimento } from 'src/app/models/Estabelecimento';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  estabelecimentoColumns: string[] = ["nome", "cnpj", "dataCadastro", "gerar"];
  estabelecimentos:Estabelecimento[] = [];
  estabelecimentosTabela: MatTableDataSource<Estabelecimento> = new MatTableDataSource(this.estabelecimentos);

  constructor(private service: EstabelecimentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe((estabs)=>{
      this.estabelecimentos = estabs;
      this.estabelecimentosTabela = new MatTableDataSource(this.estabelecimentos);
    });
  }
  gerarSenha(senha):void
  {
    console.log("chegou");
    this.router.navigate(['/senha/'+senha]);   
  }
}
