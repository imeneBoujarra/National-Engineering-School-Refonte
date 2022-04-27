import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bourse } from '../model/bourse';
import { BourseService } from '../service/bourse.service';

@Component({
  selector: 'app-bource',
  templateUrl: './bource.component.html',
  styleUrls: ['./bource.component.css']
})
export class BourceComponent implements OnInit {

  listData! : Bourse[];
  userFile: any;
  public imagePath: any;
  imageURL:any;
  public message!: string;
    control: FormControl = new FormControl('');
    bourse!: Bourse;
  constructor(public crudApi: BourseService, public fb: FormBuilder, public toastr: ToastrService, private router : Router) { }

  ngOnInit() {
    this.infoForm();
      this.getData();
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


selectData(item : Bourse) {
this.crudApi.dataForm = this.fb.group(Object.assign({},item));
}
}


