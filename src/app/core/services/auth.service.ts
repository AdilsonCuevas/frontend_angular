import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:3000/api/auth'; // cambia con tu backend

    constructor(private http: HttpClient, private router: Router) { }

    register(data: any) {
        return this.http.post(`${this.apiUrl}/register`, data);
    }

    login(data: any) {
        return this.http.post<{ token: string }>(`${this.apiUrl}/login`, data).pipe(
            tap(res => {
                if (res.token) {
                    localStorage.setItem('token', res.token);
                    this.router.navigate(['/profile']);
                }
            })
        );
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
