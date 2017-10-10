export class ProductPerm {
  // 查看产品的定义,组成等
  READ = false;
  // 可以点击云产品并创建一个云产品的实例（TDH集群）
  CREATE = false;
  // 停止和删除一个运行中的云产品实例的权限
  DELETE = false;
  // 可以对一个云产品实例进行扩容或者缩容（增加TCU）
  EDIT_CAPACITY = false;
  // 启动、停止实例的子服务
  EXEC_INSTANCE = false;
  // 对一个运行中的云产品,可以管理和配置其子服务（如HDFS,Inceptor等）的权限
  EDIT_INSTANCE = false;
  // 可以创建系统内置的云产品以外的新的产品的权限
  CUSTOMIZE = false;
  // 可以修改自定义的产品的配置的权限,但是不包含对TDC内置产品的配置修改
  MODIFY = false;
  // 可以添加新的配置模板的权限 （系统提供高、中、低配）
  ADD_TEMPLATE = false;
  // 可以删除自定义的配置模板的权限,但是不包含系统模板（高、中、低配）
  DELETE_TEMPLATE = false;
  // 可以作为用户来使用云产品服务,一般只限定用户所属的项目下面的云产品实例
  USE = false;
}

export class ProjectPerm {
  // 修改项目配置的权限,包括用户删减、组变化等,此处没有做细分
  MODIFY = false;
  // 修改项目配置的权限,包括用户删减、组变化等,此处没有做细分
  DELETE = false;
  // 查看一个项目的权限,普通用户的基本权限
  READ = false;
  // 创建一个项目的权限
  CREATE = false;
}

export class UserPerm {
  // 可以编辑用户信息（不能修改用户名）
  EDIT_USER = false;
  // 可以查看用户列表
  READ_USER = false;
  // 可以邀请用户
  INVITE_USER = false;
  // 可以编辑组信息（不可以修改组名）
  EDIT_GROUP = false;
  // 可以新建组
  CREATE_GROUP = false;
  // 可以查看组列表
  READ_GROUP = false;
  // 可以删除用户
  DELETE_USER = false;
  // 可以查看权限类表
  READ_PERM = false;
  // 可以删除角色
  DELETE_ROLE = false;
  // 可以编辑角色信息（不能修改角色名）
  EDIT_ROLE = false;
  // 可以新建角色
  CREATE_ROLE = false;
  // 可以查看角色列表
  READ_ROLE = false;
  // 可以删除组
  DELETE_GROUP = false;
  // 可以为角色添加删除权限
  EDIT_ROLEPERM = false;
  // 可以为组添加删除权限,可关联取关角色
  EDIT_GROUPPERM = false;
  // 可以为用户添加删除权限,可关联取关角色
  EDIT_USERPERM = false;
}

export class DataAssetPerm {
  // 可以查看公共的数据资产的权限
  READ = false;
  // 可以发布数据资产的权限
  PUBLISH = false;
  // 可以审查数据资产的权限
  REVIEW = false;
  // 可以删除某个数据资产的权限
  DELETE = false;
  // 可以申请读取或者修改数据资产（归属于其他人）的权限
  APPLY = false;
  // 可以修改数据资产的具体属性的权限
  MODIFY = false;
  // 可以提交数据资产到数据目录的权限
  SUBMIT = false;
}

export class FinancePerm {
  // 修改付费的配置的权限
  SET_PAY = false;
  // 能够看到当前费用的具体情况的权限
  READ = false;
  // 可以支付费用的权限
  PAY = false;
}

export class SystemPerm {
  // 该权限可以管理租户，拥有租户管理的全部权限
  TENANT_ADMIN = false;
  // 该权限负责租户内的全部财务管理相关事宜
  FINANCE_ADMIN = false;
  // 该权限可以使用租户
  TENANT_USER = false;
  // 该权限负责租户内的运维管理相关事宜
  OPS_ADMIN = false;
  // 该权限负责租户内的全部数据目录管理相关事宜
  DATA_ADMIN = false;
}

export class AuthPerms {
  ProductPerm = new ProductPerm();
  ProjectPerm = new ProjectPerm();
  UserPerm = new UserPerm();
  DataAssetPerm = new DataAssetPerm();
  FinancePerm = new FinancePerm();
  SystemPerm = new SystemPerm();
}
