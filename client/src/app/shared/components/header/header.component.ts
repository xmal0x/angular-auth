import { Component } from '@angular/core'
import { AuthService } from '../../../auth/services/auth.service'
import { filter, map } from 'rxjs'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ac-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  currentUserName$ = this.authService.currentUser$.pipe(
    filter(Boolean),
    map(user => user?.username)
  )
  constructor(private authService: AuthService) {
  }
}
