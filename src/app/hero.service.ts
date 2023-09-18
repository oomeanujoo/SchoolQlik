import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient, private router: Router) {}
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };
  login(data: any) {
    this.http
      .post(environment.apiUrl + 'users/LoginWithOtp', data, this.httpOptions)
      .subscribe((resp: any) => {
        console.log(resp);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          text: 'Logged in successfully',
          showConfirmButton: false,
          toast:true,
          timer: 2000,
        })
        localStorage.setItem("token",resp.token);
        this.router.navigateByUrl('/dashboard');
      }, (err:any) => { 
      console.error('API Error:', err)
       if (err.error && err.error.message) {
       console.log('Error Message:', err.error.message);
         Swal.fire({
        position: 'top-end',
       icon: 'error',
       text: err.error.message,
       showConfirmButton: false,
       toast:true,
       timer: 2000,
     })
      } 
       
     },);

  }

  getURL() {
    console.log('Environment', environment.apiUrl);
  }
}
