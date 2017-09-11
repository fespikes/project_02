import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePipeStub, DefaultPipeStub } from '../../mock';
import { TabComponent } from './tab.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabComponent,
        TranslatePipeStub,
        DefaultPipeStub,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should add tcc-tab class to host element', () => {
    expect(element.classList).toContain('tcc-tab');
  });

  it('should set default selectedIndex to 0', () => {
    expect(component.selectedIndex).toBe(0);
  });
});
