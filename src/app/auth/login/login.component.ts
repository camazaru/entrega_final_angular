import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;
  usersList: any
  
  constructor(
    private userService: UserService,
    private router: Router
    ) {
      this.formLogin= new FormGroup({
        email: new FormControl(),
        password: new FormControl()
     })
    }

  ngOnInit(): void {
  }

  onSubmit() {

  
    this.userService.getAllUser().subscribe(
data=> {
  this.usersList= data
  console.log(this.usersList)
}
      
    )
    
      
      
  }

 
}