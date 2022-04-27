import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfComponent } from './inf/inf.component';
import { CompteEnsComponent } from './compte-ens/compte-ens.component';
import { HeaderEnsComponent } from './header-ens/header-ens.component';
import { CourComponent } from './cour/cour.component';
import { EmploiStageComponent } from './Admin/emploi-stage/emploi-stage.component';
import { QuatCComponent } from './quat-c/quat-c.component';
import { BourceComponent } from './bource/bource.component';
import { GestionEmploiComponent } from './gestion-emploi/gestion-emploi.component';
import { GestionBourseComponent } from './gestion-bourse/gestion-bourse.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AddEnseignantComponent } from './Admin/add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './Admin/update-enseignant/update-enseignant.component';
import { PublicationComponent } from './publication/publication.component';
import { ListEnseignantsComponent } from './Admin/list-enseignant/list-enseignant.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AddActualiteComponent } from './Admin/add-actualite/add-actualite.component';
import { UpdateActualiteComponent } from './Admin/update-actualite/update-actualite.component';
import { ListActualiteComponent } from './Admin/list-actualite/list-actualite.component';
import { DetailActualiteComponent } from './Admin/detail-actualite/detail-actualite.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    EnseignantComponent,
    HomeComponent,
    InfComponent,
    CompteEnsComponent,
    HeaderEnsComponent,
    CourComponent,
    EmploiStageComponent,
    QuatCComponent,
    BourceComponent,
    GestionEmploiComponent,
    GestionBourseComponent,
    LoginComponent,
    ListEnseignantsComponent,
    AddEnseignantComponent,
    UpdateEnseignantComponent,
   
    PublicationComponent,
    AdminPageComponent,
    AdminHeaderComponent,
    AddActualiteComponent,
    UpdateActualiteComponent,
    ListActualiteComponent,
    DetailActualiteComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MdbCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()  ,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
