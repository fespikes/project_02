export class Application {
  'adminCellphone'?: string; // 手机
  'adminId'?: string; // 用户名
  'adminName'?: string; // 姓名
  'haOn'?: boolean;  // 组件高可用
  'instanceDescription'?: string;  // 实例描述
  'instanceName'?: string;  // 实例名称
  'networkType'?: string;  // 网络类型 ['PRIVATE', 'SHARED'],
  'nodeNum'?: number = 0;  // 计算执行单元数量 
  'product'?: TBProduct;  // 应用版本
  'projectDescription'?: string;  // 项目描述
  'projectName'?: string;  // 项目名称
  'templateId'?: string;  // 模板id 
  'tenantName'?: string;  // 租户名称
  'visibility'?: string;  // 可见性 = ['TENANT', 'PROJECT']
}

export class TBProduct {
  edition: string; // 产本版本
  uuid: string; // 产品uid
}
