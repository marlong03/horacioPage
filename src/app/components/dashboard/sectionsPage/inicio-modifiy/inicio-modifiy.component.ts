import { Component } from '@angular/core';
import { InicioComunicationService } from 'src/app/services/inicio.comunication.service';
import { app } from '../../../../fb'
@Component({
  selector: 'app-inicio-modifiy',
  templateUrl: './inicio-modifiy.component.html',
  styleUrls: ['./inicio-modifiy.component.css']
})
export class InicioModifiyComponent {
  constructor(private inicioCS:InicioComunicationService){

  }
    //Variables globales
    enlaceGlobal:any = ""
    documentosGlobal:any
    documentosGlobalGalery:any
    //Añadir Img
    fecha = new  Date()

    nombreArchivoDate = String(this.fecha.getTime())
    fechaHoy  = this.fecha.toLocaleDateString('en-US')
    //Img Banner
    ListaImgsBanner:any = []
    urlImgBanner:any  ;
    //Lista Galeria Imgs
    listaGaleriaImgs:any = []
    //Firebase
    async obtenerDocsImgBanner(collectionName:string){
      const listDocus = await app.firestore().collection(collectionName).get()
      this.documentosGlobal = listDocus.docs.map(doc => {
        this.ListaImgsBanner.push(doc.data())
      })
      this.urlImgBanner = this.ListaImgsBanner[this.ListaImgsBanner.length - 1].url;
    }
    async obtenerDocsImgsGalery(collectionName:string){
      let listaMentira:any = []
      const listDocus2 = await app.firestore().collection(collectionName).get()
      this.documentosGlobal = listDocus2.docs.map(doc => {
        listaMentira.push(doc.data())
      })
      this.listaGaleriaImgs = listaMentira;
    }

    async enviarForm(e:any, nombreCollection:string){
      e.preventDefault()
      const nombreArchivo = this.nombreArchivoDate
      if(!nombreArchivo){
        return
      }
      let dataSend = {
        nombre: nombreArchivo,
        fecha:this.fechaHoy,
        url: this.enlaceGlobal
      }
      const coleccionRef = app.firestore().collection(nombreCollection);
      if(this.enlaceGlobal != ""){
        const docu = await coleccionRef.doc(nombreArchivo).set(dataSend)
      }else{
        alert("espera un poco mas por favor, luego vuelve a enviar la foto")
      }
      console.log(nombreArchivo + " | " + this.enlaceGlobal);
    }

    async seleccionarArchivo(e:any){
      const archivo = e.target.files[0]
      const storageRef = app.storage().ref()
      const archivoPath = storageRef.child(archivo.name)

      await archivoPath.put(archivo)
      let enlaceUrl = await archivoPath.getDownloadURL();
      this.enlaceGlobal = enlaceUrl
    }


    ngOnInit(): void {
      /* console.log(this.obtenerDocsImgBanner('imgBanner')); */
      this.obtenerDocsImgBanner('imgBanner')
      this.obtenerDocsImgsGalery('imgsGalery')

    }
}
