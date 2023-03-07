import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  ngOnInit(): void {
    const toggleButton:any = document.getElementById('button-menu')
    const navWrapper:any = document.getElementById('nav')
    toggleButton.addEventListener('click',() => {
      toggleButton.classList.toggle('close')
      navWrapper.classList.toggle('show')
      btnCreate.classList.toggle('displayNone')
    })
    navWrapper.addEventListener('click',(e:any) => {
      if(e.target.id === 'nav'){
        navWrapper.classList.remove('show')
        toggleButton.classList.remove('close')
      }
    })

    const btnCreate:any = document.getElementById('btn__create')
    const divCreate:any = document.getElementById('div__create')
    btnCreate.addEventListener('click',() => {
      btnCreate.classList.toggle('rotate')
      btnCreate.classList.toggle('close')
      divCreate.classList.toggle('show')
    })
    divCreate.addEventListener('click',(e:any) => {


      if(e.target.id === 'div__create'){
        divCreate.classList.remove('show')
        btnCreate.classList.remove('close')
      }
    })
  }
  moduloDashboardMostrar = "inicio"
  displayInicio = "block"
  displayPeriodico = "none"
  displayNoticia = "none"
  modulo = "inicio"
  cambiarModuloDashboard(modulo:string){
    this.modulo = modulo
    this.moduloDashboardMostrar = modulo
    if(modulo == "inicio"){
       this.displayInicio = "block";
        this.displayPeriodico = "none"
        this.displayNoticia = "none"
    }

    else if(modulo === "noticia"){
      this.displayNoticia = "block";
      this.displayInicio = "none";
      this.displayPeriodico = "none"
    }
    else if(modulo === "periodico"){
      this.displayPeriodico = "block"
      this.displayInicio = "none";
      this.displayNoticia = "none"
    }


  }

}
