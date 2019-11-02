import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from 'app/services/login.service';
import { NotificationService } from 'app/services/notification.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public navigateTo: string;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      pass: this.fb.control('', [Validators.required])
    });
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.pass)
      .subscribe(
        (user) => {
          this.notificationService.notify(`Bem vindo(a), ${user.name}`);
        },
        (err) => {
          this.notificationService.notify(err.error.message);
        },
        () => {
          this.router.navigate([atob(this.navigateTo)]);
        }
      );
  }

}
