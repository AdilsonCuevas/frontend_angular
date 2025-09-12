import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage = '';
  form: FormGroup;

  constructor(private formulario: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.formulario.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.backendTokens) {
            localStorage.setItem('token', res.backendTokens);
            console.log('Login exitoso');
            setTimeout(() => this.router.navigate(['/profile/users']), 1500);
          }
        },
        error: () => (this.errorMessage = 'Credenciales incorrectas'),
      });
    }
  }
}




