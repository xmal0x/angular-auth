import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app/app.routes'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { authInterceptor } from './app/shared/services/auth.interceptor'

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes),
  ],
})
