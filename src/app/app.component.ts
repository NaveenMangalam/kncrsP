import { Component } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kncrsP';
  active:string = "active"
}
