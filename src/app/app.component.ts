import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ParteunoComponent } from './parteuno/parteuno.component';
import { PartedosComponent } from './partedos/partedos.component';
import { PartetresComponent } from './partetres/partetres.component';
import { PartecuatroComponent } from './partecuatro/partecuatro.component';
import { PartesincoComponent } from './partesinco/partesinco.component';
import { ParteseisComponent } from './parteseis/parteseis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ParteunoComponent, PartedosComponent, PartetresComponent,PartecuatroComponent, PartesincoComponent,ParteseisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LuisT';
}
