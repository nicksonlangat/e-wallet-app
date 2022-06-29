import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private api: ApiService, private router:Router) {}

  logOut(){
    localStorage.removeItem('wallet_user')
    this.router.navigate(['login']);
  }

}
