import { Component, OnInit, Input } from '@angular/core';
import { Functionalities } from '../../../interfaces/functionalities';

@Component({
  selector: 'tdc-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.sass']
})
export class FunctionalitiesComponent implements Functionalities {

	@Input()
	data: any;

}
