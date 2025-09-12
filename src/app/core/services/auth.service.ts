import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, tap, map } from 'rxjs';

export interface Usuario {
    id: number;
    name: string;
    role: 'admin' | 'lector';
    token?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private usuarioSubject: BehaviorSubject<Usuario | null> = new BehaviorSubject<Usuario | null>(null);
    public usuario$: Observable<Usuario | null> = this.usuarioSubject.asObservable();

    private apiUrl = 'http://localhost:4000'; // cambia con tu backend

    constructor(
        private http: HttpClient,
        private router: Router) {
        const usuarioStorage = localStorage.getItem('usuario');
        if (usuarioStorage) {
            this.usuarioSubject.next(JSON.parse(usuarioStorage));
        }
    }

    register(data: any) {
        return this.http.post(`${this.apiUrl}/auth/register`, data);
    }

    login(data: any) {
        return this.http.post<{ user: any; backendTokens: any }>(`${this.apiUrl}/auth/login`, data)
            .pipe(
                tap(response => {
                    const usuario = response.user._doc;
                    this.usuarioSubject.next(usuario);
                    localStorage.setItem('usuario', JSON.stringify(usuario));
                }),
                map(response => response)
            );
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    logout() {
        this.usuarioSubject.next(null);
        localStorage.removeItem('usuario');

        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
    }

    getRolUsuario(): any | null {
        return this.usuarioSubject.value?.role;
    }

    getName(): any | null {
        return this.usuarioSubject.value?.name;
    }

    getUser(id: string): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.apiUrl}/users/${id}`, { headers });
    }

    createUser(data: any): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.post(`${this.apiUrl}/users`, data, { headers });
    }

    updateUser(id: string, data: any): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.put(`${this.apiUrl}/users/${id}`, data, { headers });
    }

    getUseres() {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.apiUrl}/users`, { headers });
    }

    getCliente(id: string): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.apiUrl}/clientes/${id}`, { headers });
    }

    updateCliente(id: string, data: any): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.put(`${this.apiUrl}/clientes/${id}`, data, { headers });
    }

    createCliente(data: any): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.post(`${this.apiUrl}/clientes`, data, { headers });

    }

    getClientes() {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.apiUrl}/clientes`, { headers });
    }

    getDeleteCliente(id: string): Observable<any> {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.delete(`${this.apiUrl}/clientes/${id}`, { headers });
    }
}
