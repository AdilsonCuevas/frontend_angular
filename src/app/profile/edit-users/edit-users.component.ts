import { Component } from '@angular/core';
import { LayoutComponent } from '../../admin/layout/layout.component';
import { UserFormComponent } from '../../admin/user-form/user-form.component';

@Component({
  selector: 'app-edit-users',
  standalone: true,
  imports: [LayoutComponent, UserFormComponent],
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.css'
})
export class EditUsersComponent {

}
