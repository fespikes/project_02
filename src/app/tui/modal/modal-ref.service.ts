import {
  Injectable,
} from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class TccModalRef {
  // 关闭对话框的操作都需要通过`afterClose`进行
  afterClose = new Subject();

  close(data?: any) {
    this.afterClose.next(data);
    this.afterClose.complete();
  }

}
