import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WrapperComponent } from '../../atoms/wrapper/wrapper.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    WrapperComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
