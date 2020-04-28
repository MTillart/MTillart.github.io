import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsikudComponent } from './isikud/isikud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DokumendidComponent } from './dokumendid/dokumendid.component';
import { AjaarvestusComponent } from './ajaarvestus/ajaarvestus.component';
import { ToimikudComponent } from './toimikud/toimikud.component';
import { AuthGuard } from './_helpers/_auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'isikud', component: IsikudComponent },
      { path: 'dokumendid', component: DokumendidComponent },
      { path: 'toimikud', component: ToimikudComponent },
      { path: 'ajaarvestus', component: AjaarvestusComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '/', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
