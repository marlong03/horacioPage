import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { app } from '../fb';

@Injectable({
  providedIn: 'root'
})
export class InicioComunicationService {
  async obtenerDocs(collectionName:string){
    let listaImgsBanner:any = []
    const listDocus = await app.firestore().collection(collectionName).get()

    listDocus.docs.map(doc => {
      listaImgsBanner.push(doc.data())
    })
    return listaImgsBanner[listaImgsBanner.length - 1].url;
  }
  async obtenerDocsImgsGalery(collectionName:string){
    let listaImgsGalery:any = []
    const listDocus2 = await app.firestore().collection(collectionName).get()
     listDocus2.docs.map(doc => {
      listaImgsGalery.push(doc.data())
    })
    console.log(listaImgsGalery);
    return listaImgsGalery;

  }
  constructor() { }
}
