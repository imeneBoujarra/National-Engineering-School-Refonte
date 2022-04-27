import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantsService } from 'src/app/service/enseignants.service';

@Component({
  selector: 'app-list-enseignants',
  templateUrl: './list-enseignant.component.html',

  styleUrls: ['./list-enseignant.component.css']
})
export class ListEnseignantsComponent implements OnInit {

  enseignants : any ; 


  constructor(private enseignantService : EnseignantsService , private router :Router) 
  {
    

 }

  ngOnInit(): void 
  {
    this.reloaddata();
  }
    



  employeeDetails(id: number)
  {

    this.enseignants = this.enseignantService.getEnseignant(id).subscribe(data =>{
      console.log(data) 
      this.goToEnseignantDetails(id) ;
    },error=>console.error(error)) ;
  }


  deleteEnseignant(id : any)
{ 
this.enseignantService.deleteEnseignant(id).subscribe(data =>{
 console.log(data);
  this.reloaddata();
},error=>console.error(error)) ;

}

  reloaddata()
  {
    this.enseignants = this.enseignantService.getEnseignantList();

  }
  
  goToList() {
    this.router.navigate(['/list-enseignants']);
   }

   goToEnseignantDetails(id :number)
   {
    this.router.navigate(['/details-enseignant',id]);
   }

   updateEnseignant(id : number)
   {
     this.router.navigate(['update-enseignant', id]);
 
   }

   goToAdd()
   {
    this.router.navigate(['/add-enseignant']);
   }
 


}
