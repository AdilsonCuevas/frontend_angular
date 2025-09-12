import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export enum Roles {
  ADMIN = 'admin',
  LECTOR = 'lector',
}

@Component({
  selector: 'app-usersCom',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersAComponent implements OnInit {
  users: any = [];

  constructor(private auth: AuthService,) { }

  ngOnInit() {
    this.auth.getUseres().subscribe(user => {
      this.users = user;
    });
  }

  /*deleteUser(id: string) {
    if (!confirm('¿Estás seguro que deseas eliminar este usuario?')) return;
  } */

}
