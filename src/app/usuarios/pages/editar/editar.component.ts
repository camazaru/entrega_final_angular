import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {
  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private api: UserService
  ) {}

  datosUsuario: any;

  editarForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
    token: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    let usuarioid = this.activerouter.snapshot.paramMap.get('id');

    this.api.getSingleUser(usuarioid).subscribe((data) => {
      this.datosUsuario = data[0];

      this.editarForm.setValue({
        username: this.datosUsuario.username,
        email: this.datosUsuario.email,
        password: this.datosUsuario.password,
        role: this.datosUsuario.role,
        avatar: this.datosUsuario.avatar,
        token: this.datosUsuario.token,
      });
    });
  }

  postForm(form: any) {
    let usuarioid = this.activerouter.snapshot.paramMap.get('id');
    this.api
      .putUser(form, usuarioid)
      .subscribe((data) => this.router.navigate(['usuarios/listar']));
  }

  eliminar() {
    let usuarioid = this.activerouter.snapshot.paramMap.get('id');
    this.api
      .deleteUser(usuarioid)
      .subscribe((data) => this.router.navigate(['usuarios/listar']));
  }

  salir() {
    this.router.navigate(['usuarios/listar']);
  }
}
