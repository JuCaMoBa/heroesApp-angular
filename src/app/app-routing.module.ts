import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { canActivatePublicGuard, canMatchPublicGuard } from './auth/guards/public.guard';
import { canActivateGuard, canMatchGuard } from './auth/guards/auth.guard';



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m=> m.AuthModule),
    canActivate: [canActivatePublicGuard], //Anclamos la función del canActive
    canMatch: [canMatchPublicGuard], //Anclamos la función del canMatch
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m=> m.HeroesModule),
    canActivate: [canActivateGuard], //Anclamos la función del canActive
    canMatch: [canMatchGuard], //Anclamos la función del canMatch
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
