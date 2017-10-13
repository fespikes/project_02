import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tcc-ga-table-operation',
  templateUrl: './ga-table-operation.component.html',
})
export class GaTableOperationComponent implements OnInit {
  @Input() record: any;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.record);
  }
}
