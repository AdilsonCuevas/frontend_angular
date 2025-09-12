import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

export enum Roles {
  ADMIN = 'admin',
  LECTOR = 'lector',
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  roles = Object.values(Roles);
  errorMessage = '';
  successMessage = '';
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: [Roles.LECTOR, Validators.required],
      avatar: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.auth.register(this.form.value).subscribe({
        next: () => {
          this.successMessage = 'Registro exitoso, redirigiendo...';
          setTimeout(() => this.router.navigate(['/auth/login']), 1500);
        },
        error: () => {
          this.errorMessage = 'Error al registrar usuario';
        },
      });
    }
  }
}
