import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  filterTerm!: string;
  transactions: any = [];
  user : any;
  constructor(private api:ApiService, private router: Router) {}
  
  logOut(){
    localStorage.removeItem('wallet_user')
    this.router.navigate(['login']);
  }
  ionViewDidEnter() {
    this.user = JSON.parse(localStorage.getItem('wallet_user')).user
    this.api.getTransactions(this.user.id).subscribe((response) => {
      this.transactions = response;
    })
  }

}
