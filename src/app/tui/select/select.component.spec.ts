import { Component, DebugElement, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TranslatePipeStub } from '../../mock';
import { SelectComponent } from './select.component';
import { SelectOptionComponent } from './select-option.component';

@Component({
  template: '<tcc-select [key]="key"></tcc-select>',
})
class SelectWithKeyComponent {
  key: string;
}

@Component({
  template: '<tcc-select [key]="key" [placeholder]="placeholder"></tcc-select>',
})
class SelectWithPlaceholderComponent {
  key: string;
  placeholder: string;
}

@Component({
  template: `
    <tcc-select>
      <tcc-select-option *ngFor="let option of options"></tcc-select-option>
    </tcc-select>
  `,
})
class SelectWithOptionsComponent {
  options = [];
}

describe('SelectComponent', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        TranslatePipeStub,
        SelectComponent,
        SelectOptionComponent,
        SelectWithKeyComponent,
        SelectWithPlaceholderComponent,
        SelectWithOptionsComponent,
      ],
    })
    .compileComponents();
  }));

  describe('basic behaviors', () => {
    let component: SelectComponent;
    let element: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SelectComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement.nativeElement;
      fixture.detectChanges();
    });

    it('should add tcc-select class to host element', () => {
      expect(element.classList).toContain('tcc-select');
    });

    it('should add tabindex = 0 to attributes of host element', () => {
      expect(element.getAttribute('tabindex')).toBe('0');
    });

    it('should close options', () => {
      expect(component.optionsOpen).toBeFalsy();
      component.optionsOpen = true;
      component.close();
      fixture.detectChanges();

      expect(component.optionsOpen).toBeFalsy();
    });

    it('should select value and then close options', () => {
      component.optionsOpen = true;
      const value = Symbol('value');
      spyOn(component, 'close').and.callThrough();

      component.select(value);
      fixture.detectChanges();

      expect(component.value).toBe(value);
      expect(component.close).toHaveBeenCalled();
    });

    it('should toggle optionsOpen and add or remove document click listener', () => {
      spyOn(component, 'addDocumentClickListener');
      spyOn(component, 'removeDocumentClickListener');

      component.onHeadClick();
      fixture.detectChanges();

      expect(component.optionsOpen).toBeTruthy();
      expect(component.addDocumentClickListener).toHaveBeenCalledTimes(1);

      component.onHeadClick();
      fixture.detectChanges();

      expect(component.optionsOpen).toBeFalsy();
      expect(component.addDocumentClickListener).toHaveBeenCalledTimes(1);
      expect(component.removeDocumentClickListener).toHaveBeenCalledTimes(1);
    });

    describe('documentClickHandler', () => {
      beforeEach(() => {
        spyOn(component, 'close');
        spyOn(component, 'removeDocumentClickListener');
        component.addDocumentClickListener();
      });

      afterEach(() => {
        component.removeDocumentClickListener();
      });

      it('should ignore when event.target is contained by component.ef.nativeElement', () => {
        const matchElement = element.querySelector('.tcc-select-head');
        matchElement.dispatchEvent(new Event('click'));
        expect(component.close).not.toHaveBeenCalled();
        expect(component.removeDocumentClickListener).not.toHaveBeenCalled();
      });

      it('should close options and remove document click listener when event.target is beyond component.ef.nativeElement', () => {
        document.dispatchEvent(new Event('click'));
        expect(component.close).toHaveBeenCalled();
        expect(component.removeDocumentClickListener).toHaveBeenCalled();
      });

      it('should remove document click handler when component is destroyed', () => {
        component.ngOnDestroy();
        expect(component.removeDocumentClickListener).toHaveBeenCalled();
      });
    });
  });

  describe('match content', () => {
    let testComponent: SelectWithKeyComponent;
    let component: SelectComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(SelectWithKeyComponent);
      testComponent = fixture.componentInstance;
      component = fixture.debugElement.query(By.directive(SelectComponent)).componentInstance;
      fixture.detectChanges();
    });

    it('should show empty string when component.value is undefined', () => {
      expect(component.label).toBe('');
    });

    it('should show component.value if component.key is undefined', () => {
      component.value = 'hello';
      fixture.detectChanges();

      expect(component.label).toBe('hello');
    });

    it('should show component.value[component.key] when both value and key are defined', () => {
      component.value = {a: '1'};
      component.key = 'a';
      fixture.detectChanges();

      expect(component.label).toBe('1');
    });
  });

  describe('placeholder', () => {
    let testComponent: SelectWithPlaceholderComponent;
    let component: SelectComponent;
    let element: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SelectWithPlaceholderComponent);
      testComponent = fixture.componentInstance;
      component = fixture.debugElement.query(By.directive(SelectComponent)).componentInstance;
      element = fixture.debugElement.nativeElement;
      fixture.detectChanges();
    });

    it('should show placeholder when label is empty', () => {
      component.placeholder = 'hello';
      fixture.detectChanges();
      expect(element.querySelector('.tcc-select-placeholder').textContent).toBe('hello');
    });

    it('should remove placeholder when label is defined', () => {
      component.placeholder = 'hello';
      component.select({name: 'hello'});
      component.key = 'name';
      fixture.detectChanges();
      expect(element.querySelector('.tcc-select-placeholder')).toBeNull();
    });
  });

  describe('with multiple options', () => {
    let testComponent: SelectWithOptionsComponent;
    let component: SelectComponent;
    let options: SelectOptionComponent[];
    let element: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SelectWithOptionsComponent);
      testComponent = fixture.componentInstance;
      component = fixture.debugElement.query(By.directive(SelectComponent)).componentInstance;
      element = fixture.debugElement.nativeElement;
      options = fixture.debugElement.queryAll(By.directive(SelectOptionComponent))
      .map((selectOptionComponent: DebugElement) => selectOptionComponent.componentInstance);
      fixture.detectChanges();
    });

    it('should display no options message when options are empty', () => {
      component.optionsOpen = true;
      fixture.detectChanges();
      let noOptionsElement = fixture.debugElement.query(By.css('.tcc-select-no-options'));
      expect(noOptionsElement).toBeTruthy();

      testComponent.options = ['hello'];
      fixture.detectChanges();
      noOptionsElement = fixture.debugElement.query(By.css('.tcc-select-no-options'));
      expect(noOptionsElement).toBeFalsy();
    });

    it('should set selectComponent to option', () => {
      testComponent.options = [1, 2];
      fixture.detectChanges();
      options.forEach((option) => {
        expect(option.selectComponent).toBe(component);
      });
    });
  });
});
