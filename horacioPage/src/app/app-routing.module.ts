import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleNoticiaComponent } from './components/noticia/detalle-noticia/detalle-noticia.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { PeriodicoComponent } from './components/periodico/periodico.component';
const routes: Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"periodico",
    component:PeriodicoComponent
  },
  {
    path:"noticia",
    component:NoticiaComponent
  },
  {
    path:"noticia/detalle",
    component:DetalleNoticiaComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
