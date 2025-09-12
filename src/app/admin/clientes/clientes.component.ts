import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';

export enum Categotia {
  ADMIN = 'Nuevo',
  RECURRENTE = 'recurrente',
  POTENCIAL = 'Potencial',
  INACTIVO = 'Inactivo',
  VIP = 'VIP',
  CORPORATIVO = 'Corporativo',
  PARTICULAR = 'Corporativo'
}

@Component({
  selector: 'app-clientesCom',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesCOmComponent implements OnInit {
  clientes: any = [];
  role: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.role = this.auth.getRolUsuario();
    this.auth.getClientes().subscribe(user => {
      this.clientes = user;
    });
  }

  deleteCliente(id: string) {
    if (!confirm('¿Estás seguro que deseas eliminar este cliente?')) return;

    this.auth.getDeleteCliente(id).subscribe(user => {
      alert("cliente eliminado");
      this.router.navigate(['/profile/clientes']);
    });
  }

}
