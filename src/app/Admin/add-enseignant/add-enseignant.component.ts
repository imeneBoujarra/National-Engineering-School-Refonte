import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { EnseignantsService } from 'src/app/service/enseignants.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {

  constructor(private userService: EnseignantsService , private router :Router) { }
  
  user : User = new User();
  submitted = false ; 
  
  
  ngOnInit(): void {
  }

  save()
  { this.user.username =this.user.nom+'_'+this.user.prenom
    this.user.role ='ENSEIGNANT'
  console.log (this.user)
    this.userService.createEnseignant(this.user).subscribe(data =>{
    console.log(data) 
    this.user=new User();
    
      this.goToList() ; 
  },error=>console.error(error)) ;

  }
  goToList() {
   this.router.navigate(['/list-enseignants']);
  }

  onSubmit()
  {
    this.submitted=true  ; 
    this.save();
  }

}
