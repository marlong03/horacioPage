import { Component } from '@angular/core';
import { app } from '../../../../fb'
@Component({
  selector: 'app-periodico-modify',
  templateUrl: './periodico-modify.component.html',
  styleUrls: ['./periodico-modify.component.css']
})
export class PeriodicoModifyComponent {
  //Añadir periodico
  fecha = new  Date()
  enlaceGlobal:any
  nombreArchivoDate = this.fecha.getTime()
  fechaHoy  = this.fecha.toLocaleDateString('en-US')
//Mostrar periodico
  listaPeriodicos:any = []
  documentosGlobal:any

  async obtenerDocsPeriodicos(collectionName:string){
    let listaMentira:any = []
    const listDocus2 = await app.firestore().collection(collectionName).get()
    this.documentosGlobal = listDocus2.docs.map(doc => {
      listaMentira.push(doc.data())
    })
    this.listaPeriodicos= listaMentira;
    console.log(this.listaPeriodicos);

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
      const docu = await coleccionRef.doc(String(nombreArchivo)).set(dataSend)
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
    this.obtenerDocsPeriodicos('periodicosDocs')
  }
}
