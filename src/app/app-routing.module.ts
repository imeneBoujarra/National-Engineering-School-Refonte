import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { AddEnseignantComponent } from './Admin/add-enseignant/add-enseignant.component';
import { ListEnseignantsComponent } from './Admin/list-enseignant/list-enseignant.component';
import { UpdateEnseignantComponent } from './Admin/update-enseignant/update-enseignant.component';
import { BourceComponent } from './bource/bource.component';
import { CompteEnsComponent } from './compte-ens/compte-ens.component';
import { CourComponent } from './cour/cour.component';
import { EmploiStageComponent } from './Admin/emploi-stage/emploi-stage.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { GestionBourseComponent } from './gestion-bourse/gestion-bourse.component';
import { GestionEmploiComponent } from './gestion-emploi/gestion-emploi.component';
import { HomeComponent } from './home/home.component';
import { InfComponent } from './inf/inf.component';
import { LoginComponent } from './login/login.component';
import { QuatCComponent } from './quat-c/quat-c.component';
import { AuthGaurdServiceService } from './service/auth-gaurd-service.service';
import { AddActualiteComponent } from './Admin/add-actualite/add-actualite.component';
import { UpdateActualiteComponent } from './Admin/update-actualite/update-actualite.component';
import { ListActualiteComponent } from './Admin/list-actualite/list-actualite.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Enseignant', component: EnseignantComponent},
  {path: 'Information', component: InfComponent },
  {path: 'Compte', component: CompteEnsComponent,canActivate:[AuthGaurdServiceService] },
  {path: 'Cour', component: CourComponent},
  {path: 'EmploiStages', component: EmploiStageComponent},
  {path: 'Bourse', component: BourceComponent },
  {path: '4C', component: QuatCComponent },
  {path: 'gBourse', component: GestionBourseComponent,canActivate:[AuthGaurdServiceService] },
  {path: 'gEmploi', component: GestionEmploiComponent,canActivate:[AuthGaurdServiceService] },
  {path: 'login', component: LoginComponent},
  {path :'add-enseignant' , component :AddEnseignantComponent},
  {path : 'list-enseignants' , component :ListEnseignantsComponent},
  {path : 'update-enseignant/:id' ,component :UpdateEnseignantComponent},
  {path : 'admin-page' , component :AdminPageComponent},
  {path : 'add-actualite' ,component :AddActualiteComponent},
  {path : 'update-actualite/:id' , component : UpdateActualiteComponent},
  {path : 'list-actualites' , component :ListActualiteComponent},
  {path : 'detail-actualite/:id' ,component:ListActualiteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
