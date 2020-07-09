import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfigureComponent } from './configure/configure.component';
import { AlertTypeComponent } from './alert-type/alert-type.component';

@NgModule({
  declarations: [HomeComponent, ConfigureComponent, AlertTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MatCheckboxModule
  ],
})
export class HomeModule { }
