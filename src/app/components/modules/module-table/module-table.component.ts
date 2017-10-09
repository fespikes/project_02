import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'module-table',
  templateUrl: './module-table.component.html',
  styleUrls: ['./module-table.component.sass'],
})

export class ModuleTableComponent implements OnInit {
  @Input() columns: any[];
  @Input() rows: any[];
  constructor() { }
  ngOnInit() {
  }

  getKeys(item) {
    return Object.keys(item);
  }
}
