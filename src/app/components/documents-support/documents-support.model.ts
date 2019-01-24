export class DocModule {
  id = '';
  name = '';
  tag = '';
  children = [];
  currentVersion = new DocVersion();
  docsCollection = new Object();
  versionList = new Array<DocVersion>();
}

export class DocVersion {
  id = 0;
  name = '';
  alias = '';
  children ? = [];
}

export class TreeNode {
  id: string;
  name: string;
  level: number;
  tag: string;
  parent: number;
  selected?: boolean;
  expanded?: boolean;
  checkbox?: boolean;
  searchParam?: string;
  children: TreeNode[];
}

export const PRODUCT_CATEGORIES = {
  TDH: 'TDH',
  TDH_PLATFORM: 'TDH-PLATFORM',
  TDH_DEV_SUITE: 'TDH-DEV_SUITE',
  TDH_OPS: 'TDH-OPS',
  TDC: 'TDC',
  TDC_INTRO: 'TDC-INTRO',
  FAQ: 'FAQ',
  SOPHON: 'SOPHON',
  SOPHON_PLATFORM: 'SOPHON-PLATFORM',
  SOPHON_DEV_SUITE: 'SOPHON-DEV_SUITE',
  SOPHON_OPS: 'SOPHON-OPS',
  ARGODB: 'ARGODB',
  ARGODB_PLATFORM: 'ARGODB-PLATFORM',
  ARGODB_DEV_SUITE: 'ARGODB-DEV_SUITE',
  ARGODB_OPS: 'ARGODB-OPS',
  STELLARDB: 'STELLARDB',
  STELLARDB_PLATFORM: 'STELLARDB-PLATFORM',
  STELLARDB_DEV_SUITE: 'STELLARDB-DEV_SUITE',
  STELLARDB_OPS: 'STELLARDB-OPS',
};

export const HEADER_HEIGHT = 52;
export const CRUMBS_HEIGHT = 46;
export const FOOTER_HEIGHT = 246;
