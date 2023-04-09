import { Component } from '@angular/core';
import { PeriodicoComunicationService } from 'src/app/services/periodico.comunication.service';

@Component({
  selector: 'app-periodico',
  templateUrl: './periodico.component.html',
  styleUrls: ['./periodico.component.css']
})
export class PeriodicoComponent {
  titlePeriodico = "Periodico"
  constructor( private PeriodicoS:PeriodicoComunicationService){}
  listaPeriodicos:any
  getPeriodicos(){
  this.PeriodicoS.obtenerDocsPeriodicos('periodicosDocs').then(res =>{
        this.listaPeriodicos = res
        console.log(this.listaPeriodicos[this.listaPeriodicos.length - 1]);
        console.log();



    })
  }

  ngOnInit(): void {
    this.getPeriodicos()
  }
}
