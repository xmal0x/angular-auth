import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './shared/components/header/header.component'
import { AuthService } from './auth/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, HeaderComponent],
})
export class AppComponent {
  title = 'advent-cal'

  constructor(private authService: AuthService) {
    this.authService.getCurrentUser().subscribe({
      next: (user) => {
        console.log('User', user)
        this.authService.setCurrentUser(user)
      },
      error: err => {
        console.warn('not loggin', err)
        this.authService.setCurrentUser(null)
      },
    })
  }
}
