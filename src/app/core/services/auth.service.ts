import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:4000'; // cambia con tu backend

    constructor(
        private http: HttpClient,
        private router: Router) { }

    register(data: any) {
        return this.http.post(`${this.apiUrl}/auth/register`, data);
    }

    login(data: any) {
        return this.http.post<{ backendTokens: any; }>(`${this.apiUrl}/auth/login`, data);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
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
        return this.http.put(`${this.apiUrl}/users${id}`, data, { headers });
    }

    getUseres() {
        const token = localStorage.getItem('token') || '';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.apiUrl}/users`, { headers });
    }
}
