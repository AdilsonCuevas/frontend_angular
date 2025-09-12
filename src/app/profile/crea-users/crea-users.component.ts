import { Component } from '@angular/core';
import { LayoutComponent } from '../../admin/layout/layout.component';
import { UserFormComponent } from '../../admin/user-form/user-form.component';

@Component({
  selector: 'app-crea-users',
  standalone: true,
  imports: [LayoutComponent, UserFormComponent],
  templateUrl: './crea-users.component.html',
  styleUrl: './crea-users.component.css'
})
export class CreaUsersComponent {

}
