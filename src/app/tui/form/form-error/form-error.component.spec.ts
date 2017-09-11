import { Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePipeStub } from '../../../mock';
import { FormErrorComponent } from './form-error.component';

@Pipe({
  name: 'tccFormError',
})
export class FormErrorPipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}

describe('FormErrorComponent', () => {
  let component: FormErrorComponent;
  let fixture: ComponentFixture<FormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormErrorComponent,
        TranslatePipeStub,
        FormErrorPipe,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
