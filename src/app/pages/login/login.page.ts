import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  data: any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private api: ApiService
  ){
    this.loginForm = this.formBuilder.group({
      email: [''],
      password:['']
    });

  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.loginForm.value)
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.api.logInUser(this.loginForm.value)
        .subscribe((response) => {
          localStorage.setItem('wallet_user', JSON.stringify(response))
          this.zone.run(() => {
            this.loginForm.reset();
            this.router.navigate(['/']);
          })
        });
    }
  }

}
