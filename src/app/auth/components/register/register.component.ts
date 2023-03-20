import { Component } from '@angular/core';
import { RegisterViewModel } from '../../modules/register-view-model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm : any;

  constructor(private _formBuilder:FormBuilder){}

  ngOnInit(): void{
    this.registerForm=this._formBuilder.group({
      Email:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.email]],
      UserName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      
      });
  }

}


