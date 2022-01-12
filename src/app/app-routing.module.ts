import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProfileComponent } from './componentes/profile/profile.component';

const routes: Routes = [
  {path:'home-component', component: HomeComponent},
  {path:'profile-component', component: ProfileComponent},
  {path:'about-component', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
