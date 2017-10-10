import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';

import { MessageContainerComponent } from './message-container.component';

class RouterStub {
  events = new Subject();
}

describe('MessageContainerComponent', () => {
  let component: MessageContainerComponent;
  let fixture: ComponentFixture<MessageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ MessageContainerComponent ],
      providers: [
        {
          provide: Router,
          useClass: RouterStub,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
