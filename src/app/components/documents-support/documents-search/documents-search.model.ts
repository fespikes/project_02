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
