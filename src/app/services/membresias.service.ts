import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembresiasService {

  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly GETSMEMBRESIAS = `${this.BASE_URL}/productos/getsProductos`;
  private readonly GETMEMBRESIA = `${this.BASE_URL}/orders/obtenerEstadoMembresia`;
  private readonly CREARMEMBRESIA = `${this.BASE_URL}/orders/crearOrdenConMembresias`;
  private readonly ESTADOORDEN = `${this.BASE_URL}/orders/obtenerEstadoOrden`;
  private readonly FINALIZARPAGO = `${this.BASE_URL}/orders/procesarPagoYActualizarMembresia`;


  constructor(private http: HttpClient, private router: Router) {}

 getsMembresias(): Observable<any> {
  return this.http.get(this.GETSMEMBRESIAS)
 }

 obtenerEstadoMembresia(token: any): Observable<any> {
  return this.http.post(this.GETMEMBRESIA, { token:token });
}

obtenerEstadoOrden(token: any): Observable<any> {
  return this.http.post(this.ESTADOORDEN, { token:token });
}

crearOrder(data: any): Observable<any> {
  return this.http.post(this.CREARMEMBRESIA,data);
}

procesarPago(orderId: any): Observable<any> {
  return this.http.post(this.FINALIZARPAGO, { orderId });
}


}
