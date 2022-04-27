import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { User } from 'src/app/model/user';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { EnseignantsService } from 'src/app/service/enseignants.service';


@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {

  id : any ; 
  enseignant : any ; 
  submitted = false ; 

  constructor(private route : ActivatedRoute , private router : Router , private enseignantService : EnseignantsService) { }

  ngOnInit(): void {
    this.enseignant = new User();
    this.id = this.route.snapshot.params['id'];
    this.enseignant = this.enseignantService.getEnseignant(this.id).subscribe(data=>{
      this.enseignant =data ;
    },error=>console.log(error));
    }

list()
{}
 updateEnseignant()
 { this.submitted=true ;
   this.enseignant.dateAjout = new Date();
    this.enseignantService.updateEnseignant(this.id,this.enseignant).subscribe(data=>
      {this.enseignant = new Enseignant();
       this.goToList(); 

      },error=>console.log(error) );
 }

 goToList()
 {
   this.router.navigate(['list-enseignants']);
 } 

}
