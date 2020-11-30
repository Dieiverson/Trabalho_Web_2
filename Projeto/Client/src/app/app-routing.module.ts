import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './views/usuario/cadastrar/cadastrar.component';
import { ListarComponent } from './views/usuario/listar/listar.component';

const routes: Routes = [
  {
    path:'',
    component:CadastrarComponent
  },
  {
    path:'usuario/listar',
    component:ListarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
