import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { StorageService } from './storage.service'
import { AuthService } from '../../auth/services/auth.service'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storageService = inject(StorageService)
  const authService = inject(AuthService)

  const token = storageService.get(authService.tokenKey)

  req = req.clone({
    setHeaders: {
      Authorization: token ? `${token}` : '',
    },
  })

  return next(req)
}
