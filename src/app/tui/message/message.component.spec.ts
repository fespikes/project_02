import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageContainerComponent } from './message-container/message-container.component';
import { MessageComponent } from './message.component';

@Component({
  selector: 'tcc-test-component',
  template: '<tcc-message [message]="message" [index]="index"></tcc-message>',
})
class MessageContainerStubComponent {
  message = {
    options: {},
  };
  index = 0;
}

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageContainerStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        MessageComponent,
        MessageContainerStubComponent,
      ],
      imports: [
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: MessageContainerComponent,
          useClass: MessageContainerStubComponent,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContainerStubComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
