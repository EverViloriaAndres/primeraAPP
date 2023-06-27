import { Component } from '@angular/core';

@Component({
  selector: 'moduloPrincipal-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent {
  protected nomEmpleado = 'Empleado 1 nopomuceno';
  protected p_binding_disabledInput = false;

  protected e_binding_siOno = 'NO';

  protected binding_B_Futbolista = 'Nombre';

  checked() {
    if (this.p_binding_disabledInput == false) {
      this.p_binding_disabledInput = true;
    } else {
      this.p_binding_disabledInput = false;
    }
  }
  /*
  hare lo  mismo pero con una sola funcion , que capture el objeto evento del radio pulsado.
  Registrado() {
    this.e_binding_siOno = 'SI';
  }
  NoRegistrado() {
    this.e_binding_siOno = 'NO';
  }*/

  siOno(e: Event) {
    /*La linea en la condicion: hace un tipo de casting o parseo del Obj evento a una espicie de tipo de datos que seria HTMLinputElement,*/
    /*Porque el evento inicialmente es un mouseEvent, pero es como del subtipo HTMLInputElement porque fue este elemento quien llamo al evento mousEvent*/
    /*  Al hacer ese casting o parceo, entonces ya se puede acceder a las propiedades del Obj event */

    if ((<HTMLInputElement>e.target).value == 'SI') {
      this.e_binding_siOno = 'SI';
    } else {
      this.e_binding_siOno = 'NO';
    }
  }
}
