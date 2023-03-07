import { Component } from '@angular/core';
import { app } from 'src/app/fb';
import { InicioComunicationService } from 'src/app/services/inicio.comunication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css','./inicio.responsive.component.css']
})
export class InicioComponent {

  constructor(private inicioCS:InicioComunicationService){

  }
  urlImgBanner:any
  listaImgsGalery:any = []
  loader = false;
  async getBanner(){
     this.inicioCS.obtenerDocs('imgBanner').then(res => {
        this.urlImgBanner = res
    })
  }
  async getGalery(){
    this.inicioCS.obtenerDocsImgsGalery('imgsGalery').then(res => {
       this.listaImgsGalery = res

   })
 }

ngOnInit(): void {
  this.getBanner()
  this.getGalery()

}
}
