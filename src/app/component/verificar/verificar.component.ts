import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule ,FormGroup,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verificar',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ],
  templateUrl: './verificar.component.html',
  styleUrl: './verificar.component.css'
})
export class VerificarComponent implements OnInit {
  myFormGroup!: FormGroup;

  constructor( private authService: AuthService, private http: HttpClient, private router:Router) {}

  verificar: any = {
    token:'',
    codigo: 0
  };

  ngOnInit(): void {

    this.verificar.token = this.authService.getToken();

    this.myFormGroup = new FormGroup({
      codigo: new FormControl(''),
    });


  }

  verificarCodigo(){
    this.authService.verificar(this.verificar).subscribe(
      (data) => {
       this.verificar.verified = data.verified
       alert(data.message);
       this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
      },
      (error) => {
        console.error('Error al obtener el estado del codigo', error);
      }
    );
  }


}
