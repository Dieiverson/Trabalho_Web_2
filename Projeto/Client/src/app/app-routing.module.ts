import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './views/estabelecimento/cadastro/cadastro.component';
import { ListagemComponent } from './views/estabelecimento/listagem/listagem.component';
import { GerarComponent } from './views/senha/gerar/gerar.component';
import { CadastrarComponent } from './views/usuario/cadastrar/cadastrar.component';
import { ListarComponent } from './views/usuario/listar/listar.component';
import { LoginComponent } from './views/usuario/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'usuario/listar',
    component:ListarComponent
  },
  {
    path:'usuario/cadastro',
    component:CadastrarComponent
  },
  {
    path:'estabelecimento/cadastrar',
    component: CadastroComponent
  },
  {
    path:'estabelecimento/listar',
    component: ListagemComponent
  },
  {
    path:'senha/gerar/:id',
    component: GerarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
