import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  
  formAdd: FormGroup;

  UserService: any;
  
  
  constructor(
    private api: UserService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
      this.formAdd= this.formBuilder.group({
        username: new FormControl('', [Validators.required, Validators.minLength(5)] ),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        role: new FormControl('', [Validators.required]),
        avatar: new FormControl('', [Validators.required]),
        token: new FormControl('', [Validators.required]),
        
     })
    }

  ngOnInit(): void {
  }

  postForm(form: any){
    this.api.postUser(form).subscribe(data => {
      this.router.navigate(['usuarios/listar'])
        })
  }
 

  salir(){
    this.router.navigate(['/usuarios/listar']);
  }


}