import { Component } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'ac-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  onSubmit() {
    this.authService.login(this.form.getRawValue()).subscribe({
      next: (user) => {
        this.authService.setCurrentUser(user)
        this.authService.setToken(user.token)
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        console.log('error login', err)
      }
    })
  }
}
