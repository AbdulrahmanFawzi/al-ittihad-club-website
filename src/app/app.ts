

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNav } from './header-nav/header-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'itti-app';
}
