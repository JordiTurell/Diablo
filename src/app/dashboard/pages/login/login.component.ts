import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { AuthService } from '../../service/auth/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class DashLoginComponent {
  
  loginForm: FormGroup;
  
  error: boolean = false;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private router:Router, private fb: FormBuilder, private loginService: LoginService, private authservice:AuthService){
    this.loginForm = this.fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required], 
    });
  }

  onSubmit() {
    console.log(this.loginForm.value); 
    if (this.loginForm.valid) {
      this.isLoading = true
      this.error = false;
      this.loginService.authenticate(this.loginForm.value).subscribe({
        next: (response) => {
          if(response.status){
            this.authservice.setToken(response.token)
          }else{
            this.errorMessage = 'Acceso incorrecto'
            this.isLoading = false
            this.error = true
          }
        },
        error: (e) => {
          this.errorMessage = 'Acceso incorrecto'
          this.isLoading = false
          this.error = true
        },
        complete: () => {
          if(this.authservice.getToken() != null){
            this.router.navigate(['/dashboard/home'])
          }else{
            this.errorMessage = 'Acceso incorrecto'
          }
        }
      })
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos.';
      this.error = true;
      this.isLoading = false
    }
  }

  closeModal() {
    this.error = false;
  }
}
