import { Component } from '@angular/core';
import { COUNTRIES, INFO } from './core/constantes';
import { Country } from './core/interfaces/country.interface';
import { Info } from './core/interfaces/info.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  countries: Array<Country> = COUNTRIES;
  infos: Array<Info> = INFO;
}
