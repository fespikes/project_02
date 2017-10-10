import { Component } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoadingDirective } from './loading.directive';

@Component({
  template: '<div [tccLoading]="loading" [tccLoadingHeight]="height">loading example</div>',
})
class LoadingComponent {
  loading = false;
  height;
}

describe('LoadingDirective', () => {
  let component: LoadingComponent;
  let fixure: ComponentFixture<LoadingComponent>;
  let loadingContainer: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent, LoadingDirective ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixure = TestBed.createComponent(LoadingComponent);
    component = fixure.componentInstance;
  });

  it('should not render loading if loading is false initially', () => {
    loadingContainer = fixure.debugElement.nativeElement.querySelector('.tcc-loading-container');
    expect(loadingContainer).toBeFalsy();
  });

  it('should render loading if loading is set to true', () => {
    component.loading = true;
    fixure.detectChanges();
    loadingContainer = fixure.debugElement.nativeElement.querySelector('.tcc-loading-container');
    expect(loadingContainer).toBeTruthy();
  });

  it('should render loading height of tccLoadingHeight if tccLoadingHeight is set', () => {
    component.height = '100px';
    component.loading = true;
    fixure.detectChanges();
    loadingContainer = fixure.debugElement.nativeElement.querySelector('.tcc-loading-container');
    expect(loadingContainer).toBeTruthy();
    expect(loadingContainer.style.height).toBe('100px');
  });

  it('should leave loading if loading is set to false', () => {
    component.loading = true;
    fixure.detectChanges();
    loadingContainer = fixure.debugElement.nativeElement.querySelector('.tcc-loading-container');
    expect(loadingContainer).toBeTruthy();

    component.loading = false;
    fixure.detectChanges();
    loadingContainer = fixure.debugElement.nativeElement.querySelector('.tcc-loading-container');
    expect(loadingContainer).toBeFalsy();
  });
});
