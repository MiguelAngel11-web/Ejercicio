import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
/* Validcion de formulario */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public posts : any = [];
  public allUsers:any = [];
  forma: FormGroup;
  mostrarInfo:boolean;

  public path: any = [];

  constructor(private api : ApiService,private builder: FormBuilder,public activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      if(params['estado'] != null){
        this.mostrarInfo = params['estado'];
      }else{
        this.mostrarInfo = false;
      }
    })

    this.forma = this.builder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ] /* , Validator.validateEmail(this.api) */,
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.api.getUsers(`https://jsonplaceholder.typicode.com/users`)
    .then(user => {
        this.allUsers = user;
    });
    this.api.posts(`https://jsonplaceholder.typicode.com/posts`)
    .then(p => {
      this.posts = p;
    })

    this.activatedRoute.url.subscribe(data => {
      console.log(data)
      this.path = data[0].path;
  });
  this.getImage();
  }

  onSubmit() {
    if (this.forma.valid) {
      this.entrar();
    } else {
      this.forma.markAllAsTouched();
    }
  }

  /*----------------------------*/
  entrar() {
    const { email, password } = this.forma.value;

    if(email == "Lucio_Hettinger@annie.ca" && password == "1234567"){
      this.mostrarInfo = true;
    }
  }


getImage() {
  switch (this.path) {
    case 'posts':
      return 'https://i.pinimg.com/originals/29/80/8e/29808e5801fcd4070611f6e170d8d070.jpg';
    case 'users':
      return 'http://4.bp.blogspot.com/-hqSplfhJWHk/TverLVB4H6I/AAAAAAAAAV0/R2hPv5RFHXs/s1600/1317808168962.jpg';
    case 'singlepost':
      return './assets/images/zzz.png';
  }
}



  get password() {
    return this.forma.get('password');
  }
  get email() {
    return this.forma.get('email');
  }
  get PassIsValid() {
    return this.password.touched && this.password.valid;
  }

  get PassIsInvalid() {
    return this.password.touched && this.password.invalid;
  }

  get EmailIsValid() {
    return this.email.touched && this.email.valid;
  }

  get EmailIsInvalid() {
    return this.email.touched && this.email.invalid;
  }

  ngOnInit(): void {
  }

}
