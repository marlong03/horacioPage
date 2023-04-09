import { Component } from '@angular/core';
import { Route } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(){

  }
  cambiarUrl(paramentro:string){
    location.href = location.origin +"/"+ paramentro
  }

  ngOnInit(): void {
    console.log(location);
    console.log(location.href);
    const toggleButton:any = document.getElementById('button-menu')
    const navWrapper:any = document.getElementById('nav')
    toggleButton.addEventListener('click',() => {
      toggleButton.classList.toggle('close')
      navWrapper.classList.toggle('show')
    })
    navWrapper.addEventListener('click',(e:any) => {
      if(e.target.id === 'nav'){
        navWrapper.classList.remove('show')
        toggleButton.classList.remove('close')
      }
    })
  }
}
