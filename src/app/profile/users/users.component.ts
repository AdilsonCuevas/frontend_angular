import { Component } from '@angular/core';
import { LayoutComponent } from '../../admin/layout/layout.component';
import { UsersAComponent } from '../../admin/users/users.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [LayoutComponent, UsersAComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
