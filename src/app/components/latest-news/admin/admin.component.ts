import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { LatestNewsService } from '../latest-news.service';
import { MessageService } from '../../../tui';

@Component({
  selector: 'tdc-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor: ElementRef;
  @ViewChild('html') content: ElementRef;

  base64Subject = new Subject();

  config = {
    // sanitize: true,
    config: [
      // ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      // [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      // [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                         // remove formatting button
      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  data: any = {
    'author': '',
    'content': '',
    // 'html': '',
    'icon': '',
    'mail': '',
    'mailTo': '',
    'routerLink': '',
    'routerLinkActive': '',
    'summary': '',
    'tag': '',
    'title': '',
    'publish': true
  };

  constructor(
    private el: ElementRef,
    private api: LatestNewsService,
    private message: MessageService,
  ) { }

  ngOnInit() {
    console.log(this.editor);
  }

  ngAfterViewInit() {
  }

  iconChanged($event) {
    this.data.icon = $event;
  }

  editorCreated(argu) {
    console.log('onEditorCreated:', argu);
  }

  contentChanged(argu) {
    console.log('onContentChanged:', argu);
    // this.content.nativeElement.innerHTML = argu.html;
  }

  selectionChanged(argu) {
    console.log('onSelectionChanged:', argu);
  }

  submit() {
    if (this.data.publish === 'true') {
      this.data.publish = true;
    }
    this.api.addNews(this.data)
      .subscribe(res => {
        this.message.success(res.message);
      });
  }


}
