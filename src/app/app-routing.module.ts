import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'splash', loadChildren: './screens/auth/splash/splash.module#SplashPageModule' },
  { path: 'signin', loadChildren: './screens/auth/signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './screens/auth/signup/signup.module#SignupPageModule' },
  { path: 'start', loadChildren: './screens/start/start.module#StartPageModule' },
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/index/tabs.module').then(m => m.TabsPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
