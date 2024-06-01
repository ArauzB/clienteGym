import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MembresiasService } from '../../services/membresias.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  tieneMembresia: boolean = false;

  constructor (private membresiasService: MembresiasService, private authService:AuthService, private router:Router){

  }

  ngOnInit() {
    const token = this.authService.getToken();

    if (token) {
      this.membresiasService.obtenerEstadoMembresia(token).subscribe(
        (data) => {
          this.tieneMembresia = data.tieneMembresia;
        },
        (error) => {
          console.error('Error al obtener el estado de la membresía', error);
        }
      );
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  logout (){
    this.authService.logout()
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
