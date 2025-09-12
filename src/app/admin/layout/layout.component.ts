import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  nombre: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.nombre = this.auth.getName();
  }

  logout() {
    this.auth.logout();
  }
}
