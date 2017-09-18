import { Injectable } from '@angular/core';

@Injectable()
export class DataMartService {

  constructor() { }

  getProductDetails() {
  	return {
  		banner: {
  			h3: '数据仓库',
        h4: '',
  			description: '数据仓库是数据中心库，集中整合最新以及历史数据，按照不同主题组织信息，是打造商业智能的核心。TDH-DW可用于构建一站式数据仓库服务，提供包括分析数据库、数据整合、模型加工等重要功能，同时提供对于查询速度、并发度、扩展性的保障，是高效的数据掘金利器。',
  			advImage: ''
  		},
  		tabs: {
  			title: '',
  			label: ''
  		}
  	}
  }

}
