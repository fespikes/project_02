import { Injectable } from '@angular/core';

@Injectable()
export class DataMartService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '数据集市',
        h4: '',
  			description: '数据集市是面向部门级业务，特定的应用主题，用星型或者雪花模型组织构建数据。TDH-DM可以用于构建企业的数据集市，对接数据分析业务，提供包括交互式分析、Cube、报表、调度工具，实现自动化的报表应用构建。',
  			advImage: ''
  		},
  		tabs: {
  			title: '',
  			label: ''
  		}
  	}
  }

}
