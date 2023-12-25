import { Component, OnDestroy, OnInit } from '@angular/core'
import { AuthService } from '../../../auth/services/auth.service'
import { Router, RouterLink } from '@angular/router'
import { filter, Subscription } from 'rxjs'

@Component({
  selector: 'ac-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  private sub?: Subscription

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.authService.currentUser$.pipe(
      filter(Boolean),
    ).subscribe(user => this.router.navigateByUrl('/board'))
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
