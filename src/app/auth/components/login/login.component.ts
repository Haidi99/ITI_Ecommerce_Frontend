import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginViewModel } from '../../modules/login-view-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm : any;
  
  constructor(private _formBuilder:FormBuilder){} 
  
  ngOnInit(): void{
    this.loginForm=this._formBuilder.group({
      UserName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      
      });
  }

}
