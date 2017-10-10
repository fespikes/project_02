import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { By } from '@angular/platform-browser';

import { PermControlDirective } from './perm-control.directive';

import { TccAuthService } from '../../services/auth.service';

@Component({
  template: `
    <div tccPermControl="CatPerm.MIAO">
      control content
    </div>
    <div tccPermControl="CatPerm.KILL">
      control content
    </div>
    <div tccPermControl="CatPerm.MIAO" tccPermControlDenied>
      control content
    </div>
    <div [tccPermControl]="perms">
      control content
    </div>
  `,
})
export class TestComponent {
  perms = ['CatPerm.MIAO', 'CatPerm.KILL'];
}

const authService = {
  perms: {
    'CatPerm.MIAO': true,
    'CatPerm.KILL': false,
  },
  checkPerm(perm) {
    return Observable.of(this.perms[perm]);
  },
};

describe('PermControlDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elements: HTMLElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        TestComponent,
        PermControlDirective,
      ],
      providers: [
        {
          provide: TccAuthService,
          useValue: authService,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elements = fixture.debugElement.queryAll(By.directive(PermControlDirective)).map(debugElement => debugElement.nativeElement);
    fixture.detectChanges();
  });

  it('should display/hide control content if checkPerm passed/denied', () => {
    expectPassed(elements[0]);
    expectDenied(elements[1]);
  });

  it('should hide control content if tccPermControlDenied is set', () => {
    expectDenied(elements[2]);
  });

  it('should display control content if any of perms passed', () => {
    expectPassed(elements[3]);
  });

  function expectPassed(element) {
    expect(element.dataset.tccPermControlHide).not.toBe('true');
  }

  function expectDenied(element) {
    expect(element.dataset.tccPermControlHide).toBe('true');
  }
});
