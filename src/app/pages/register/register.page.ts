import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  data: any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private api: ApiService
  ){
    this.registerForm = this.formBuilder.group({
      email: [''],
      first_name: [''],
      last_name: [''],
      phone_number: [''],
      password:['']
    });

  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      return false;
    } else {
      this.api.logInUser(this.registerForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.registerForm.reset();
            this.router.navigate(['/login']);
          })
        });
    }
  }

}
