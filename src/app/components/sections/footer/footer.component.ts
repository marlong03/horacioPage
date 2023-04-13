import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  emailCorreo = ""
  enviarCorreo(){


    var url = "https://formsubmit.co/ajax/"+this.emailCorreo;
    var data= {
      horacio: "Bienvenido, ahora te encuentras subscrito a la pagina de horacio",
      mensaje: "Gracias por tu subscripcion, estaremos enviando contenido de valor"
  };

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {console.log('Success:', response)
    alert("correo enviado a el email:" + this.emailCorreo)
  });
  }
}
