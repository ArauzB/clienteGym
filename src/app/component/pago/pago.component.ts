import { Component, OnInit } from '@angular/core';
import { MembresiasService } from '../../services/membresias.service';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule,ReactiveFormsModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css',
})
export class PagoComponent implements OnInit {
  paymentType: string = 'card';

  estado!: any;

  constructor(

    private membresiasService: MembresiasService,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {


    const token = this.authService.getToken();

    if (token) {
      this.membresiasService.obtenerEstadoOrden(token).subscribe(
        (data) => {
          this.estado = data;
        },
        (error) => {
          console.error('Error al obtener el estado de la membresía', error);
        }
      );
    }
  }
  finalizarPago(orderId: any) {
    // Captura el formulario por su id
    const form = document.getElementById('pagoForm') as HTMLFormElement;

    // Verifica si alguno de los campos está vacío
    if (!form.checkValidity()) {
      // Si el formulario no es válido, muestra un mensaje de error o realiza alguna acción adicional
      window.alert("Por favor, complete todos los campos del formulario correctamente antes de proceder con el pago.");
      return; // Detiene la ejecución de la función si el formulario no es válido
    }

    // Si el formulario es válido, procede con el proceso de pago
    this.membresiasService.procesarPago(orderId).subscribe(
      (data: any) => {
        console.log('Pago procesado con éxito:', data);
        window.alert("Pago procesado con éxito");
        this.router.navigate(['/menu']).then(() => {
          window.location.reload();
        });
      },
      (error: any) => {
        console.error('Error al procesar el pago:', error);
        window.alert("Error al procesar el pago. Por favor, intente nuevamente.");
      }
    );
  }


}
