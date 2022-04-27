import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActualiteService } from 'src/app/service/actualite.service';

@Component({
  selector: 'app-list-actualite',
  templateUrl: './list-actualite.component.html',
  styleUrls: ['./list-actualite.component.css']
})
export class ListActualiteComponent implements OnInit {

  actualites : any ; 


  constructor(private actualiteService : ActualiteService , private router :Router) 
  {
    

   }

  ngOnInit(): void 
  {
    this.reloaddata();
  }
    

  actualiteDetails(id: number)
  {

      this.actualites = this.actualiteService.getActualite(id).subscribe(data =>{
      console.log(data) 
      this.goToDetail(id) ;
    },error=>console.error(error)) ;
  }


deleteActualite(id : any)
{ 
this.actualiteService.deleteActualite(id).subscribe(data =>{
 console.log(data);
  this.reloaddata();
},error=>console.error(error)) ;

}

  reloaddata()
  {
    this.actualites = this.actualiteService.getActualiteList();

  }
  
  goToList() {
    this.router.navigate(['/list-actualite']);
   }

 
   updateActualite(id : number)
   {
     this.router.navigate(['update-actualite', id]);
 
   }

   goToAdd()
   {
    this.router.navigate(['/add-actualite']);
   }

   goToDetail(id :number)
   {
    this.router.navigate(['/detail-actualite', id]);

   }

}
