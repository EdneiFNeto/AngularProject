import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { LoginComponent } from './login/login.component';
import{ FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';//ADD
import { routing } from './app.routing';//ADD


@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    routing,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
