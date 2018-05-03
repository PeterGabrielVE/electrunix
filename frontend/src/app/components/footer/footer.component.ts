import { Component} from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent  {

anio:number = new Date().getFullYear();

constructor( public _is:InformacionService ) { }


}


