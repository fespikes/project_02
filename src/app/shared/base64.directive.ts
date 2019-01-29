import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[tdcBase64]'
})
export class Base64Directive {

  @Output() fileChanged = new EventEmitter<any>();

  constructor() {}

  @HostListener('click')
  clickOn() {
    const reader = new FileReader();
    const AllowImgFileSize = 2100000;

    const input: HTMLInputElement = document.createElement('input');
    // input.setAttribute('multiple', 'multiple');
    input.type = 'file';
    input.click();

    // emitted when selectd files
    input.addEventListener('change', (event: any) => {
      const {files} = event.target;
      let file: File;

      for (let i = files.length - 1; i >= 0; i--) {
        file = files[i];
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          if (AllowImgFileSize as number !== 0 &&
            AllowImgFileSize < (reader.result as any).length ) {
            alert( '上传失败，请上传不大于2M的图片！');
            return;
          } else {
            this.fileChanged.emit(reader.result);
          }
        };
      }
    });
  }

}
