import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Emlpoi } from '../model/emlpoi';
import { EmploiService } from '../service/emploi.service';

@Component({
  selector: 'app-gestion-emploi',
  templateUrl: './gestion-emploi.component.html',
  styleUrls: ['./gestion-emploi.component.css']
})
export class GestionEmploiComponent implements OnInit {

  listData! : Emlpoi[];
  userFile: any;
  public imagePath: any;
  imageURL:any;
  public message!: string;
    control: FormControl = new FormControl('');
    emploi!: Emlpoi;
  constructor(public crudApi: EmploiService, public fb: FormBuilder, public toastr: ToastrService, private router : Router) { }

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
  const emploi = this.crudApi.dataForm.value;
  formData.append('emploi', JSON.stringify(emploi));
  formData.append('file', this.userFile);
  this.crudApi.createData(formData).subscribe( data =>{
    this.toastr.success('validation faite avec succées');
    this.ResetForm();
    this.getData();
  })
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

selectData(item : Emlpoi) {
this.crudApi.choixmenu = "M";
this.crudApi.dataForm = this.fb.group(Object.assign({},item));
}

}
