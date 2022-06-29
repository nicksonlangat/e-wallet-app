import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  transactionForm: FormGroup;
  data: any;
  is_deposit = false

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private api: ApiService,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams
      .subscribe(params => {
        this.data = params.type;
        ; 
      });
    this.transactionForm = this.formBuilder.group({
      sender: [''],
      recipient_account:[''],
      transaction_type: [''],
      amount: ['']
    });
  }

  logOut(){
    localStorage.removeItem('wallet_user')
    this.router.navigate(['login']);
  }

  ngOnInit() {
    if(this.data=='Deposit'){
      this.is_deposit = true
    }
    }

  onSubmit() {
    this.transactionForm.get('transaction_type').setValue(this.data)
    this.transactionForm.get('sender').setValue(JSON.parse(localStorage.getItem('wallet_user')).user.id)
    if (!this.transactionForm.valid) {
      return false;
    } else {
      this.api.createTransaction(this.transactionForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.transactionForm.reset();
            this.router.navigate(['/']);
          })
        });
    }
  }

}
