import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any={};

  errorMessage!:string;  
  name !: string;  
  Wdate: any;
  annee !: 0;
  loginForm!:  FormGroup; 
  
  constructor(private router:Router,private userService : UserService,
    public toastr: ToastrService,public fb: FormBuilder) { }    
  ngOnInit() {    
     this.userService.islogin = false;
     this.userService.admin = false;
     this.userService.suser = false;
     
     this.loginForm = this.fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }    
  login() {
    const val = this.loginForm.value;
    this.userService.login(val.username, val.password).subscribe(
      Response =>{
      this.user = Response;
        localStorage.setItem("username", this.user.username);
        localStorage.setItem("email", this.user.email);
        localStorage.setItem("nom", this.user.nom);
        localStorage.setItem("prenom", this.user.prenom);
        localStorage.setItem("tel", this.user.tel);
        localStorage.setItem("filename", this.user.filename);
        localStorage.setItem("specialite", this.user.specialite);
        localStorage.setItem("email", this.user.email);
        localStorage.setItem("resume", this.user.resume);
        localStorage.setItem("id", this.user.id);
        localStorage.setItem("jwt", this.user.jwt);
        localStorage.setItem("form", JSON.stringify(this.user.form));
        localStorage.setItem("exp", JSON.stringify(this.user.exp));
        localStorage.setItem("pub", JSON.stringify(this.user.pub));
        localStorage.setItem("cour", JSON.stringify(this.user.cour));

        let jwt = "Bearer " + this.user.jwt;
          localStorage.setItem("token", jwt)
          this.toastr.info("Bienvenu dans l'espace " + this.user.role);
         this.userService.islogin = true;
        if (this.user.role  == "Admin")
         {
         this.userService.admin = true;
          this.router.navigate(['/gBourse']);
      }
      else
      {
        this.userService.suser = true;
        
        this.router.navigate(['/Compte']);
      }
          },
      (          error: any) => 
          
            this.toastr.warning( 'Login Incorrecte ')
         
          
          );

        }
     
        
        
        logOut() {
          localStorage.removeItem("username");
        }
 


  /*  onFormSubmit(form: NgForm) {
      this.authService.login(form)
        .subscribe(res => {
          console.log(res);
          if (res.token) {
            localStorage.setItem('token', res.token);
            this.router.navigate(['products']);
          }
        }, (err) => {
          console.log(err);
        });
    }
*/


    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('name');
      
  }

}
