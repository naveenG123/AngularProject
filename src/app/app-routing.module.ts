import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddairlineComponent } from './addairline/addairline.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './register/register/register.component';



const routes: Routes = [
  {
    
        path: 'login',
        component: LoginComponent
      
  },
  {

    path: 'addairline',
        component: AddairlineComponent
  },
  {

    path: 'inventory',
        component: InventoryComponent
  },
  {

    path: 'register',
        component: RegisterComponent
  },
  {

    path: 'home',
        component: HomeComponent
  }

  
];
  
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

//{
  //   path: '',
  //   component : HeaderComponent
  //   // redirectTo: 'home',
  //   // pathMatch: 'full'
  // },
  // {
  //   path: '/home',
  //   component: HeaderComponent
  // },
  // {
  //   path: '/home',
  //   component:FooterComponent
  // },
  
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'addairline',
  //   component: AddairlineComponent
  // }
  
// ];

// const routes: Routes = [{ path: '', component: LoginComponent },
// { path: 'home', component: HomeComponent,canActivate:[RouteGardService] }
// // { path: 'home/booking', component: BookingComponent,canActivate:[RouteGardService] },
// // { path: 'home/booking/history', component: HistoryComponent,canActivate:[RouteGardService] },
// // { path: 'home/booking/manage', component: ManageComponent,canActivate:[RouteGardService] },
// // { path: 'dashboard', component: DashboardComponent,canActivate:[RouteGardService] },
// // { path: 'dashboard/schedule', component: ScheduleComponent,canActivate:[RouteGardService] },
// // { path: 'dashboard/coupon', component: CouponsComponent,canActivate:[RouteGardService] }
// ]
