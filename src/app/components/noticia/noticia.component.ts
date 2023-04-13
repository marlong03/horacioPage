import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {
  titleNoticia = "Noticias"
  cambiarUrl(paramentro:string){
    let locationGithub = "https://marlong03.github.io/horacioPage/"
    console.log(location.href);
    /* location.href = location.href +  paramentro */
    location.href = locationGithub +  paramentro
  }
}
