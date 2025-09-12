import { Component } from '@angular/core';
import { LayoutComponent } from '../../admin/layout/layout.component';
import { ClientesFormComponent } from '../../admin/clientes-form/clientes-form.component';

@Component({
  selector: 'app-edit-clientes',
  standalone: true,
  imports: [LayoutComponent, ClientesFormComponent],
  templateUrl: './edit-clientes.component.html',
  styleUrl: './edit-clientes.component.css'
})
export class EditClientesComponent {

}
