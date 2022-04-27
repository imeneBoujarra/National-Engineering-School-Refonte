import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actualite } from 'src/app/model/actualite';
import { ActualiteService } from 'src/app/service/actualite.service';

@Component({
  selector: 'app-detail-actualite',
  templateUrl: './detail-actualite.component.html',
  styleUrls: ['./detail-actualite.component.css']
})
export class DetailActualiteComponent implements OnInit {

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
      goToList()
      {
        this.router.navigate(['list-actualites']);
      
  

}

}
