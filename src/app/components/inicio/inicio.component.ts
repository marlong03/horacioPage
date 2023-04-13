import { Component } from '@angular/core';
import { app } from 'src/app/fb';
import { InicioComunicationService } from 'src/app/services/inicio.comunication.service';
import { PeriodicoComunicationService } from 'src/app/services/periodico.comunication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css','./inicio.responsive.component.css']
})
export class InicioComponent {

  constructor(private inicioCS:InicioComunicationService,
              private PeriodicoS:PeriodicoComunicationService){

  }
  ultimoPeriodico:any = ""
  async getUltimoPeriodico(){
    await this.PeriodicoS.obtenerDocsPeriodicos('periodicosDocs').then(res =>{
      console.log(res[res.length - 1]);
      this.ultimoPeriodico = res[res.length - 1]
    })
  }

  urlImgBanner:any
  listaImgsGalery:any = []
  loader = false;
  async getBanner(){
      await this.inicioCS.obtenerDocs('imgBanner').then(res => {
        this.urlImgBanner = res
      })
  }
  async getGalery(){
    await this.inicioCS.obtenerDocsImgsGalery('imgsGalery').then(res => {
       this.listaImgsGalery = res

    })
 }
/*  cambiarUrl(paramentro:string){
  console.log(location.href);
  location.href = location.href + paramentro
 } */
 cambiarUrl(paramentro:string){
  let locationGithub = "https://marlong03.github.io/horacioPage/"
  console.log(location.href);
  /* location.href = location.href +  paramentro */
  location.href = locationGithub +  paramentro
}
ejecutarcarrusel(){

};


ngOnInit(): void {
 /*  document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
      duration: 100,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 3,
      indicators: true,
      noWrap: false
    });
  }); */

  this.getUltimoPeriodico()


this.ejecutarcarrusel()


  this.getBanner()
  this.getGalery()

}
}
