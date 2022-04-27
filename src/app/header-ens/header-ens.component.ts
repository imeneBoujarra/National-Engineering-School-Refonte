import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header-ens',
  templateUrl: './header-ens.component.html',
  styleUrls: ['./header-ens.component.css']
})
export class HeaderEnsComponent implements OnInit {

  constructor(private router:Router, public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem("username");
    localStorage.clear();
    this.toastr.warning("Vous êtes déconnecté");
    this.router.navigate(['/']);

  }

}
