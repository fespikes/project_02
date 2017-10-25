import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidDeployControlComponent } from './raid-deploy-control.component';

describe('RaidDeployControlComponent', () => {
  let component: RaidDeployControlComponent;
  let fixture: ComponentFixture<RaidDeployControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidDeployControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidDeployControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
