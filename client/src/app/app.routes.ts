import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes),
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/auth.routes').then(m => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then(m => m.loginRoutes),
  },
  {
    path: 'board',
    loadChildren: () => import('./board/board.routes').then(m => m.boardRoutes),
  },
]
