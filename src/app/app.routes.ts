import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CitasComponent } from './component/citas/citas.component';
import { RutinasComponent } from './component/rutinas/rutinas.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { MembresiasComponent } from './component/membresias/membresias.component';
import { PagoComponent } from './component/pago/pago.component';
import { PasswordComponent } from './component/password/password.component';
import { authguardGuard } from './guards/authguard.guard';
import { VerificarComponent } from './component/verificar/verificar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,canActivate: [authguardGuard] },
  { path: 'home', component: HomeComponent, canActivate: [authguardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'citas', component: CitasComponent,canActivate: [authguardGuard] },
  { path: 'rutinas', component: RutinasComponent,canActivate: [authguardGuard] },
  { path: 'carrito', component: CarritoComponent,canActivate: [authguardGuard] },
  { path: 'membresias', component: MembresiasComponent,canActivate: [authguardGuard] },
  { path: 'pago', component: PagoComponent,canActivate: [authguardGuard] },
  { path: 'password', component: PasswordComponent },
  { path: 'verificar', component: VerificarComponent,canActivate: [authguardGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent ,canActivate: [authguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
