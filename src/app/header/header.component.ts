import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnseignantService } from '../service/enseignant.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
/*
  user: any={};
  email! : String;
  pwd! : String;
  errorMessage!:string;  
  name! : string;  
  Wdate: any;
  annee! : 0;
  IsmodelShow!: boolean;
  loginForm!:  FormGroup; */

  constructor() { } 

  ngOnInit() {    
  /* private router:Router, private userService : UserService, public toastr: ToastrService, public fb: FormBuilder 
   this.userService.islogin = false;
    this.userService.admin = false;
    this.userService.suser = false;
    this.loginForm = this.fb.group({
     'username' : [null, Validators.required],
     'password' : [null, Validators.required]
   });  */}    
 
     
 /* login() {   
    this.userService.login(this.email).subscribe(
      Response =>{
        this.user = Response;
        if (this.user.pwd == this.pwd){
          this.name = this.user.nom;
          localStorage.setItem('name', this.name);
          this.userService.islogin = true;
          this.IsmodelShow=false;
          this.router.navigate(['/Compte']);
        }
        else{
          this.toastr.warning('Mot de passe Incorrecte')
        }
      },
      error => this.toastr.warning('Login Incorrecte')
    );   
}


    inscrire()
    {
      this.router.navigate(['/Compte']);
    }
    


    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('name');      
  }*/

}
