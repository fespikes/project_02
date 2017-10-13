import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { TranslatePipeStub } from '../../../mock';

import { LogListService } from './log-list.service';
import { LogListComponent } from './log-list.component';

class LogListServiceStub {
  getLogs() {
    return Observable.of();
  }
}

describe('LogListComponent', () => {
  let component: LogListComponent;
  let fixture: ComponentFixture<LogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        LogListComponent,
        TranslatePipeStub,
      ],
      providers: [
        {
          provide: LogListService,
          useClass: LogListServiceStub,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
