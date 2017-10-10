import {
  Component,
  OnChanges,
  Input,
  ViewChild,
  ElementRef,
  SimpleChanges,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'tcc-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass'],
})
export class AvatarComponent implements OnChanges {
  @ViewChild('textEl') textEl: ElementRef;
  textStyles: {};
  hasText = false;
  isSrcExist = true;
  hasIcon = false;

  @Input() text: string;
  @Input() src: string;
  @Input() icon: string;
  @Input() set size(size: string) {
    const classList = this.el.nativeElement.classList;
    ['sm', 'md', 'lg'].forEach((_size) => {
      if (classList.contains(`tcc-avatar-${_size}`)) {
        classList.remove(`tcc-avatar-${_size}`);
      }
    });
    this.el.nativeElement.classList.add(`tcc-avatar-${size}`);
  }
  @HostBinding('class.tcc-avatar') true;

  constructor(
    private el: ElementRef,
  ) {
    this.el.nativeElement.classList.add('tcc-avatar-md');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.hasText = !this.src && !!this.text;
    this.hasIcon = !this.src && !!this.icon;

    setTimeout(() => {
      this.calcStringSize();
    });
  }

  calcStringSize() {
    if (!this.hasText) {
      return;
    }

    const el = this.textEl && this.textEl.nativeElement;
    if (!el) {
      return;
    }

    const childrenWidth = el.offsetWidth;
    const avatarWidth = this.el.nativeElement.getBoundingClientRect().width;
    const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
    if (scale === 1) {
      this.textStyles = {};
    } else {
      this.textStyles = {
        transform: `scale(${scale})`,
        display: 'inline-block',
      };
    }
  }

  imgError() {
    this.isSrcExist = false;

    this.hasIcon = false;
    this.hasText = false;
    if (this.icon) {
      this.hasIcon = true;
    } else if (this.text) {
      this.hasText = true;

      setTimeout(() => {
        this.calcStringSize();
      });
    }
  }
}
