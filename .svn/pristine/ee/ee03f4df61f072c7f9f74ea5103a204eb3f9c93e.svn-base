import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment.development';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  constructor(private http: HttpClient, private hs: HeroService) {}


  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }),
  };

  tokenn: any;
  ngOnInit(): void {
    this.hs.getURL();
    this.tokenn = 'Bearer ${localStorage.getItem(token)';
    // console.log('URL', this.hs.getURL());
    // console.log('Token', 'Bearer' +({localStorage.getItem('token')}));
    this.studentList();
  }


  studentList() {
    this.http
      .post(environment.apiUrl + 'student/list', {},this.httpOptions)
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
}
