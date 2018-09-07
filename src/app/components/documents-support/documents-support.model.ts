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
  children? = [];
}
