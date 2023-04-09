import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css']
})
export class DetalleNoticiaComponent {
  titleDetalleNoticia = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt non hic dolor rem neque asperiores odio, id libero distinctio!"
  cambiarUrl(paramentro:string){
    console.log(location.href);
    location.href = location.href + paramentro
   }
}
