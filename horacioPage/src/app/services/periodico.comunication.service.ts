import { Injectable } from '@angular/core';
import { app } from '../fb';
@Injectable({
  providedIn: 'root'
})
export class PeriodicoComunicationService {
  async obtenerDocsPeriodicos(collectionName:string){
    let listaPeriodicos:any = []
    const listDocus3 = await app.firestore().collection(collectionName).get()
     listDocus3.docs.map(doc => {
      listaPeriodicos.push(doc.data())
    })
    console.log(listaPeriodicos);
    return listaPeriodicos;

  }
  constructor() { }
}
