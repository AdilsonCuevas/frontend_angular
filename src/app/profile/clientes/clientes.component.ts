import { Component } from '@angular/core';
import { LayoutComponent } from '../../admin/layout/layout.component';
import { ClientesCOmComponent } from '../../admin/clientes/clientes.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [LayoutComponent, ClientesCOmComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

}
