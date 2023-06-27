import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { componentePrincipal } from './compenentePrincipal/componentePrincipal.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [componentePrincipal, EmpleadosComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [componentePrincipal, EmpleadosComponent],
})
export class ModuloPrincipal {}
