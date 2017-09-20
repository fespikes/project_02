import { Component, OnInit } from '@angular/core';

import { ProductIntroduceComponent } from '../../product-introduce/product-introduce.component';
import { ProductAdvantageComponent } from '../../product-advantage/product-advantage.component';
import { ProductScenariosComponent } from '../../product-scenarios/product-scenarios.component';

@Component({
  templateUrl: './inceptor.component.html',
  styleUrls: ['./inceptor.component.sass'],
})
export class InceptorComponent implements OnInit {

  introduceItems = [
    'Rubik是一款用于设计OLAP Cube的可视化工具，所建Cube可以实例化于HDFS或Holodesk。',
    'Rubik支持雪花模型和星形模型两种Cube 设计模型，并支持多种格式的数据源(包括HDFS和远程RDBMS)。',
    'Rubik通过可视化方式提供服务，使数据分析师得到更友好的交互体验。'
  ];

  advantageItems = [
    '支持多种格式的数据源；',
    '图形化的Cube设计工具；',
    '数据立方体将分析查询的速率提高了10倍。'
  ];

  scenariosItems = [
    '构建数据集市时，设计并创建多维数据模型；',
    '执行OLAP业务时，通过设计并创建数据立方体，优化执行计划，加快语句执行速度；',
    '按照指定周期对Cube进行实例化。'
  ];

  constructor() {

  }
  ngOnInit() {

  }
}
