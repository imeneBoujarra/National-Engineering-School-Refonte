import { Component, OnInit } from '@angular/core';
import { BourseService } from '../service/bourse.service';
import {ToastrService} from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bourse } from '../model/bourse';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
//import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gestion-bourse',
  templateUrl: './gestion-bourse.component.html',
  styleUrls: ['./gestion-bourse.component.css']
})
export class GestionBourseComponent implements OnInit {

  listData! : Bourse[];
  userFile: any;
  public imagePath: any;
  imageURL:any;
  public message!: string;
    control: FormControl = new FormControl('');
    bourse!: Bourse;
  constructor(public crudApi: BourseService, public fb: FormBuilder, public toastr: ToastrService, private router : Router) { }

  ngOnInit() {
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()};

      this.getData();
      this.infoForm();
    }

    getData() {
      this.crudApi.getAll().subscribe(
        response =>{this.listData = response;}
       );
     
    }
infoForm(){
    this.crudApi.dataForm = this.fb.group({
    id: null,
    descrip: ['', [Validators.required]],
    filename: [],
    titre: ['', [Validators.required]]
    
  })
}

editForm(){
  this.crudApi.dataForm = this.fb.group({
    id: null,
    descrip: ['', [Validators.required]],
    filename: [],
    titre: ['', [Validators.required]]
    
  })
}


ResetForm(){
  this.crudApi.dataForm.reset();
}
onSubmit(){
 if (this.crudApi.choixmenu == "A")
    {
      this.addData();
    }
    else
    {
    this.updateData()
    }
}




addData(){
  const formData = new FormData();
  const bourse = this.crudApi.dataForm.value;
  formData.append('bourse', JSON.stringify(bourse));
  formData.append('file', this.userFile);
  this.crudApi.createData(formData).subscribe( data =>{
    this.toastr.success('validation faite avec succées');
    this.ResetForm();
  })
  this.getData();
}

updateData(){
this.crudApi.updateData(this.crudApi.dataForm.value.id, this.crudApi.dataForm.value).
subscribe( data =>{
  this.toastr.success( 'Modification faite avec succées');
  this.ResetForm();
});
this.getData();
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
  }
}

removeData(id: number){
  if (window.confirm('êtes-vous sûr de vouloir supprimer ceci ?')){
    this.crudApi.deleteData(id).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Supprimer avec succée! ');
        this.getData();
      },
      error => console.log(error));
  }
}

selectData(item : Bourse) {
this.crudApi.choixmenu = "M";
this.crudApi.dataForm = this.fb.group(Object.assign({},item));
} 
}
