import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actualite } from 'src/app/model/actualite';
import { ActualiteService } from 'src/app/service/actualite.service';


@Component({
  selector: 'app-add-actualite',
  templateUrl: './add-actualite.component.html',
  styleUrls: ['./add-actualite.component.css']
})
export class AddActualiteComponent implements OnInit {

  selectedFile !: File;
  actualite : Actualite  = new Actualite() ; 
  submitted = false ; 
  constructor(private actualiteService : ActualiteService , private router :Router) { }
  ngOnInit(): void {
  }

  save()
  { this.actualite.dateAjout = new Date();
    this.actualiteService.createActualite(this.actualite ).subscribe(data =>{
    console.log(data) 
    this.actualite=new Actualite();
    console.log(this.actualite);
    this.goToList() ; 
  },error=>console.error(error)) ;
  }

    goToList() {
    this.router.navigate(['/list-actualites']);
   }
 
   onSubmit()
   {
     this.submitted=true  ; 
     this.save();
   }
}
