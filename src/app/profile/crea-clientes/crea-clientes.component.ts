import { Component } from '@angular/core';
import { LayoutComponent } from '../../admin/layout/layout.component';
import { ClientesFormComponent } from '../../admin/clientes-form/clientes-form.component';

@Component({
  selector: 'app-crea-clientes',
  standalone: true,
  imports: [LayoutComponent, ClientesFormComponent],
  templateUrl: './crea-clientes.component.html',
  styleUrl: './crea-clientes.component.css'
})
export class CreaClientesComponent {

}
