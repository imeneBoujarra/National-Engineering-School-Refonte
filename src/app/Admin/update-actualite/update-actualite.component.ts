import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actualite } from 'src/app/model/actualite';
import { ActualiteService } from 'src/app/service/actualite.service';

@Component({
  selector: 'app-update-actualite',
  templateUrl: './update-actualite.component.html',
  styleUrls: ['./update-actualite.component.css']
})
export class UpdateActualiteComponent implements OnInit {
  id : any ; 
  actualite : any ; 
  submitted = false ; 

  constructor(private route : ActivatedRoute , private router : Router , private actualiteService : ActualiteService) { }

  ngOnInit(): void {
    this.actualite = new Actualite();
    this.id = this.route.snapshot.params['id'];
    this.actualite = this.actualiteService.getActualite(this.id).subscribe(data=>{
    this.actualite=data ;
    },error=>console.log(error));
    }

list()
{}
 updateActualite()
 { this.submitted=true ;
   this.actualite.dateAjout = new Date();
    this.actualiteService.updateActualite(this.id,this.actualite).subscribe(data=>
      {this.actualite = new Actualite();
       this.goToList(); 
       
      },error=>console.log(error) );
 }

 goToList()
 {
   this.router.navigate(['list-actualites']);
 } 
}
