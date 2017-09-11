import { Input, Component, SimpleChanges, SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TableSelectDirective } from './table-select.directive';

@Component({
  template: `
    <div [tccTableSelect]="selectable">
      <div class="tcc-table-select-column"></div>
    </div>
  `,
})
class TestComponent {
  selectable = true;
}

describe('TableSelectDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let selectNode: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TableSelectDirective,
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    selectNode = fixture.debugElement.query(By.css('.tcc-table-select-column')).nativeElement;
    fixture.detectChanges();
  }));

  it('should show selectNode', () => {
    expect(selectNode.style.display).toBe('block');
  });

  it('should hide selectNode when tccTalbeSelect input is false', () => {
    component.selectable = false;
    fixture.detectChanges();
    expect(selectNode.style.display).toBe('none');
  });
});
