import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Enseignant } from '../model/enseignant';
import { Formation } from '../model/formation';
import { User } from '../model/user';
import { EnseignantService } from '../service/enseignant.service';
import { FormationService } from '../service/formation.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-compte-ens',
  templateUrl: './compte-ens.component.html',
  styleUrls: ['./compte-ens.component.css']
})
export class CompteEnsComponent implements OnInit {
  user: User={
    id: 0,
    username: '',
    role: '',
    email: '',
    password: '',
    jwt: '',
    nom: '',
    prenom: '',
    tel: 0,
    filename: '',
    specialite: '',
    resume: '',
    form: [],
    exp: [],
    pub: [],
    cour: [],
  };
  val!: any;
  userFile: any;
  public imagePath: any;
  imageURL:any;
  public message!: string;
  listData! : User[];
   control: FormControl = new FormControl('');
    usr!: User;
  constructor(public crudApi: UserService, public crudApi1: FormationService, public fb: FormBuilder, public toastr: ToastrService, private router : Router) { }

  ngOnInit() {
    this.user.email =localStorage.getItem("email") || '';
    this.user.username =localStorage.getItem("username") || '';
    this.user.nom =localStorage.getItem("nom") || '';
    this.user.prenom =localStorage.getItem("prenom") || '';
    this.user.tel =localStorage.getItem("tel") || this.val;
    this.user.filename =localStorage.getItem("filename") || '';
    this.user.specialite =localStorage.getItem("specialite") || '';
    this.user.resume =localStorage.getItem("resume") || '';
    this.user.form = JSON.parse(localStorage.getItem("form") || '');
    this.user.exp = JSON.parse(localStorage.getItem("exp") || '');
    this.user.pub = JSON.parse(localStorage.getItem("pub") || '');
    this.user.cour = JSON.parse(localStorage.getItem("cour") || '');

    this.crudApi.dataForm = this.fb.group(Object.assign({},this.user));
    this.infoForm();
    }


infoForm(){
    this.crudApi.dataForm = this.fb.group({
    id: null,
    username: '',
    role: '',
    email: '',
    password: '',
    jwt: '',
    nom: '',
    prenom: '',
    tel: null,
    filename: '',
    specialite: '',
    resume: '',
    form: [],
    exp: [],
    pub: [],
    cour: [],
  })
}



  onSelectFile(event: any){
    if(event.target.files.length >0){
      const file = event.target.files[0];
      this.userFile= file;
      //this.f['img'].setValue(file);
      var mimeType = event.target.files[0].type;
      if(mimeType.match(/image\/*/) == null){
        this.message = "Only images are supported";
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload= (_event) =>{
        this.imageURL = reader.result;
      }
    }}}
