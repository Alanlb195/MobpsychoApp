import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    if (authService.userData) {
      router.navigate(['home'])
    }
  }
  loginUser: FormGroup;

  ngOnInit(): void {
  }


  login() {

    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;

    this.authService.login(email, password).subscribe((response: any) => {

      if (response.success == true) {
        this.router.navigate(['home']);
      }

    })
  }

}
