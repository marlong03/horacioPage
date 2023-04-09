import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {
  titleNoticia = "Noticias"
  cambiarUrl(paramentro:string){
    location.href = location.origin +"/"+ paramentro
  }
}
