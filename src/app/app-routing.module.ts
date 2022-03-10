import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/get-started' },
  { path: 'get-started', loadChildren: () => import('./pages/home/home.component.module').then(m => m.HomeModule) },
  { path: 'documentation', loadChildren: () => import('./pages/api/api.module').then(m => m.ApiModule) },
  { path: 'examples', loadChildren: () => import('./pages/examples/examples.module').then(m => m.ExamplesModule) },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
