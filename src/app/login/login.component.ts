import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private hs: HeroService) {}

  data: any = {
    email: '',
    pass: '',
  };

  ngOnInit(): void {
    this.hs.getURL();
    console.log('URL', this.hs.getURL());
  }

  login(data: any) {
    this.hs.login({
      emailid: data.email,
      ph_num: null,
      psd: data.pass,
    });
    console.log('1st', data.email)
  }
}
