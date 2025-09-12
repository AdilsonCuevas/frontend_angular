import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

export enum Roles {
  ADMIN = 'admin',
  LECTOR = 'lector',
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  userId: string | null = '';
  roles = Object.values(Roles);

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
      avatar: ['']
    });
  }

  ngOnInit() {
    if (this.userId) {
      this.auth.getUser(this.userId).subscribe(user => {
        this.form.patchValue(user);
        // Si es edición, no requerir password
        this.form.get('password')?.clearValidators();
        this.form.get('password')?.updateValueAndValidity();
      });
    }
  }

  save() {
    if (this.form.invalid) return;

    if (this.userId) {
      // Editar usuario
      this.auth.updateUser(this.userId, this.form.value).subscribe(() => {
        this.router.navigate(['/admin/users']);
      });
    } else {
      // Crear usuario
      this.auth.createUser(this.form.value).subscribe(() => {
        this.router.navigate(['/admin/users']);
      });
    }
  }
}
