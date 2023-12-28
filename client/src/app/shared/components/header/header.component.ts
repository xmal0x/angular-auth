import { Component } from '@angular/core'
import { AuthService } from '../../../auth/services/auth.service'
import { filter, map, tap } from 'rxjs'
import { CommonModule } from '@angular/common'
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'ac-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class HeaderComponent {
  currentUserName$ = this.authService.currentUser$.pipe(
    filter((res) => res !== undefined),
    map(user => user?.username),
  )

  menuVisible: boolean = false

  constructor(private authService: AuthService, private router: Router) {
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible
  }

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('/')
    this.menuVisible = false
  }
}
