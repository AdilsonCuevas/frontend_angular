import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CreaUsersComponent } from './crea-users/crea-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { CreaClientesComponent } from './crea-clientes/crea-clientes.component';
import { EditClientesComponent } from './edit-clientes/edit-clientes.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: CreaUsersComponent },
  { path: 'users/edit/:id', component: EditUsersComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/new', component: CreaClientesComponent },
  { path: 'clientes/edit/:id', component: EditClientesComponent },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
