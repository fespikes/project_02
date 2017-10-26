import { Injectable } from '@angular/core';
import { Scenario } from './scenario/scenario';

const base = '/assets/images/scenarios/'
const scenarios = [{
  id: 1,
  type: 'relational-database',
  screenshot: base+ 'relational-database'+ '.jpg',
  short: '关系数据库'
},
{
  id: 2,
  type: 'realtime-computation',
  screenshot: base+ 'realtime-computation'+ '.jpg',
  short: '实时计算'
},
{
  id: 3,
  type: 'info-retrieval',
  screenshot: base+ 'info-retrieval'+ '.jpg',
  short: '信息检索'
},
{
  id: 4,
  type: 'deep-learning',
  screenshot: base+ 'deep-learning'+ '.jpg',
  short: '深度学习'
},
{
  id: 5,
  type: 'data-warehouse',
  screenshot: base+ 'data-warehouse'+ '.jpg',
  short: '数据仓库'
},
{
  id: 6,
  type: 'analysis-mining',
  screenshot: base+ 'analysis-mining'+ '.jpg',
  short: '数据分析与挖掘'
},
{
  id: 7,
  type: 'data-mart',
  screenshot: base+ 'data-mart'+ '.jpg',
  short: '数据集市'
},
{
  id: 8,
  type: 'others',
  screenshot: base+ 'others'+ '.jpg',
  short: '其他案例'
}];

@Injectable()
export class BusinessScenarioService {

  private scenarios: Scenario[];

  constructor() {
    this.scenarios = scenarios
  }


  getScenarios() {
  	return this.scenarios;
  }

  getScenarioByType(type: string ): Scenario {
    let scenario: Scenario = null;

    this.scenarios.forEach( _ =>{
      if (_.type===type) {
        return scenario=_;
      }
    });

    return scenario;
  }

  getScenarioById(id: number) {
    return this.scenarios.forEach( _ => _.id===id && _ );
  }
}
