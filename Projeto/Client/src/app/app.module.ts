import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { CadastrarComponent } from './views/usuario/cadastrar/cadastrar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule }  from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from'@angular/common/http';
import { ListarComponent } from './views/usuario/listar/listar.component';
import { LoginComponent } from './views/usuario/login/login.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CadastroComponent } from './views/estabelecimento/cadastro/cadastro.component';
import { ListagemComponent } from './views/estabelecimento/listagem/listagem.component';
import { LogarComponent } from './views/estabelecimento/logar/logar.component';
import { GerarComponent } from './views/senha/gerar/gerar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    CadastrarComponent,
    ListarComponent,
    LoginComponent,
    CadastroComponent,
    ListagemComponent,
    LogarComponent,
    GerarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
