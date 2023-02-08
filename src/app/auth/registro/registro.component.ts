import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formAdd: FormGroup;

  AuthService: any;

  constructor(private api: AuthService, private router: Router) {
    this.formAdd = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {}

  postForm(form: any) {
    this.api.postUser(form).subscribe((data) => {
      this.router.navigate(['auth/login']);
    });
  }
}
