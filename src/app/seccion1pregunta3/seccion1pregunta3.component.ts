import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';

@Component({
  selector: 'app-seccion1pregunta3',
  templateUrl: './seccion1pregunta3.component.html',
  styleUrls: ['./seccion1pregunta3.component.css']
})
export class Seccion1pregunta3Component implements OnInit {
  constructor(private router: Router, private AdminService:AdminService) {
    this.getPregunta()
   }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

  guardarRespuesta(respuesta){
    localStorage.setItem( 'respuesta4', respuesta);
    if(respuesta==1){
      this.router.navigate(['/prediccion1seccion1']);
    }
    else{
      this.router.navigate(['/seccion2pregunta1']);
    }
    }

  getPregunta():void{
     this.AdminService.getPreguntas(4).then(function(data){
       console.log(data)
       document.getElementById("prueba").firstChild.textContent = data.descripcion
       
     })
     
  }
}
