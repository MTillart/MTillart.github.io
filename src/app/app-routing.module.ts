import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsikudComponent } from './isikud/isikud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DokumendidComponent } from './dokumendid/dokumendid.component';
import { AjaarvestusComponent } from './ajaarvestus/ajaarvestus.component';
import { ToimikudComponent } from './toimikud/toimikud.component';


const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'isikud', component: IsikudComponent },
  {path: 'dokumendid', component: DokumendidComponent },
  {path: 'toimikud', component: ToimikudComponent },
  {path: 'ajaarvestus', component: AjaarvestusComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
