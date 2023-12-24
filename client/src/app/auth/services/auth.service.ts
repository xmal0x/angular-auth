import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { RegisterRequestInterface } from '../types/registerRequest.interface'
import { BehaviorSubject, Observable } from 'rxjs'
import { CurrentUserInterface } from '../types/currentUser.interface'
import { LoginRequestInterface } from '../types/loginRequest.interface'
import { StorageService } from '../../shared/services/storage.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubj$ = new BehaviorSubject<CurrentUserInterface | null | undefined>(undefined)
  currentUser$ = this.currentUserSubj$.asObservable()

  tokenKey = 'token'

  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  register(request: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = 'http://localhost:5001/api/users/'
    return this.http.post<CurrentUserInterface>(url, request)
  }

  login(request: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = 'http://localhost:5001/api/users/login'
    return this.http.post<CurrentUserInterface>(url, request)
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = 'http://localhost:5001/api/users/user'
    return this.http.get<CurrentUserInterface>(url)
  }

  setCurrentUser(user: CurrentUserInterface | null): void {
    this.currentUserSubj$.next(user)
  }

  setToken(token: string): void {
    this.storageService.set(this.tokenKey, token)
  }

  getToken(): string {
    const token = this.storageService.get(this.tokenKey)
    return typeof token === 'string' ? token : ''
  }
}
