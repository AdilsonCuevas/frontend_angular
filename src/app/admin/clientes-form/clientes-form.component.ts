import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export enum CategoriasEnum {
  ADMIN = 'Nuevo',
  RECURRENTE = 'recurrente',
  POTENCIAL = 'Potencial',
  INACTIVO = 'Inactivo',
  VIP = 'VIP',
  CORPORATIVO = 'Corporativo',
  PARTICULAR = 'Corporativo'
}

@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit {
  form: FormGroup;
  clienteId: string | null = '';
  usuarios: any = [];
  Categorias = Object.values(CategoriasEnum);

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clienteId = this.route.snapshot.paramMap.get('id');
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nit: ['', Validators.required],
      direccion: ['', Validators.required],
      categoria: ['', Validators.required],
      telefono: [''],
      usuario: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.auth.getUseres().subscribe(data => {
      this.usuarios = data;
    });

    if (this.clienteId) {
      this.auth.getCliente(this.clienteId).subscribe(cliente => {
        this.form.patchValue(cliente);
      });
    }
  }

  save() {
    if (this.form.invalid) return;

    if (this.clienteId) {
      // Editar usuario
      this.auth.updateCliente(this.clienteId, this.form.value).subscribe(() => {
        this.router.navigate(['/profile/clientes']);
      });
    } else {
      // Crear usuario
      this.auth.createCliente(this.form.value).subscribe(() => {
        this.router.navigate(['/profile/clientes']);
      });
    }
  }
}
