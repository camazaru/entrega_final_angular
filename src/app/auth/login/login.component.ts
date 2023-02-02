import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;
  usersList:any;
  email:any
  password:any

  userPostLogin: any
  usuarioApi: any

  token:any

  

 @Output() public userApi:any
  passwordApi:any

  datosUser: any
  
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:AuthService
    ) {
      this.formLogin= new FormGroup({
        email: new FormControl(),
        password: new FormControl()
     })
    }

   

  ngOnInit(): void {
  

}



  onSubmit() {

this.userPostLogin = this.formLogin.value
  
this.email= this.userPostLogin.email
this.password= this.userPostLogin.password



 this.usuarioApi = this.api.getSingleUser(this.email).subscribe(
  data => {
    
    this.datosUser = data[0];
    
    this.userApi= this.datosUser.email
    this.passwordApi= this.datosUser.password
    this.token= this.datosUser.token
    console.log("aqui este el token", this.token)
  
    if (this.email==this.userApi && this.password==this.passwordApi)
    {
      localStorage.setItem("token", this.token)
     return this.router.navigate(['/estudiantes/listar'])
    }else {
      
     return this.router.navigate(['/auth/register'])
    }

  })
 
     
  }

  

}
