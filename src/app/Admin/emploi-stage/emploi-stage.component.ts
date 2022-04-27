import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Emlpoi } from '../../model/emlpoi';
import { EmploiService } from '../../service/emploi.service';

@Component({
  selector: 'app-emploi-stage',
  templateUrl: './emploi-stage.component.html',
  styleUrls: ['./emploi-stage.component.css']
})
export class EmploiStageComponent implements OnInit {

  listData! : Emlpoi[];
  userFile: any;
  public imagePath: any;
  imageURL:any;
  public message!: string;
    control: FormControl = new FormControl('');
    emploi!: Emlpoi;
  constructor(public crudApi: EmploiService, public fb: FormBuilder) { }

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

selectData(item : Emlpoi) {
this.crudApi.dataForm = this.fb.group(Object.assign({},item));
}


}
