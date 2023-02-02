import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usersList: any[] | undefined;

  constructor(private api:UserService, private router:Router){

  }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe( data => {

      this.usersList=data
    })
}

nuevoEstudiante(){
  this.router.navigate(['/usuarios/agregar'])
}

editarEstudiante(id:any){
  this.router.navigate(['/usuarios/editar',id])
}
}
