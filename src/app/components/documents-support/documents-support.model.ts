export class DocsListModuel {
  id = 0;
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
  TDC: 'TDC',
  SOPHON: 'SOPHON',
  ARGODB: 'ARGODB',
};

export const HEADER_HEIGHT = 52;
export const CRUMBS_HEIGHT = 46;
export const FOOTER_HEIGHT = 246;
