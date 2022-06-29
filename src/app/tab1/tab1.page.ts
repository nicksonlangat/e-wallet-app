import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  transactions: any = [];
  user : any;
  wallet: any;

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

    this.api.getUserWallet(this.user.id).subscribe((response) => {
      this.wallet = response[0];
      
    })
  }

}
