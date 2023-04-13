import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { PeriodicoComponent } from './components/periodico/periodico.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { FundacionComponent } from './components/fundacion/fundacion.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { DetalleNoticiaComponent } from './components/noticia/detalle-noticia/detalle-noticia.component';
import { BannerDefaultComponent } from './components/sections/banner-default/banner-default.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioModifiyComponent } from './components/dashboard/sectionsPage/inicio-modifiy/inicio-modifiy.component';

import { PeriodicoModifyComponent } from './components/dashboard/sectionsPage/periodico-modify/periodico-modify.component';
import { NoticiaModifyComponent } from './components/dashboard/sectionsPage/noticia-modify/noticia-modify.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    PoliticasComponent,
    PeriodicoComponent,
    HistoriaComponent,
    FundacionComponent,
    NoticiaComponent,
    AgendaComponent,
    DetalleNoticiaComponent,
    BannerDefaultComponent,
    DashboardComponent,
    InicioModifiyComponent,
    PeriodicoModifyComponent,
    NoticiaModifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
