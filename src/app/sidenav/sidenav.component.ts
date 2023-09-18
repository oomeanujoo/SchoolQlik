import { Component, Input } from '@angular/core';
import { navbarData } from './nav-data';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() sideNavStatus: boolean = false;
  navData = navbarData;
  subMenuStatus: boolean = false;
}
