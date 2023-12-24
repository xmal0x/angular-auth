import { Component } from '@angular/core'
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
    selector: 'ac-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
    ],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  onSubmit() {
    this.authService.register(this.form.getRawValue()).subscribe({
      next: (user) => {
        console.log('request', user)
        this.authService.setCurrentUser(user)
      },
      error: (err) => {
        console.log('error', err)
      }
    })
  }
}
