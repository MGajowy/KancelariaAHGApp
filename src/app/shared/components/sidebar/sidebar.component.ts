import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';

const TREE_DATA: ExampleFlatNode[] = [
  {
    name: 'Uchwały',
    expandable: true,
    level: 0,
  }, {
    name: 'Kategorie uchwał',
    expandable: false,
    level: 1,
  }, {
    name: 'Najnowsze uchwały',
    expandable: false,
    level: 1,
  }, {
    name: 'Rozporządzenia',
    expandable: true,
    level: 0,
  }, {
    name: 'Rozporządzenie1',
    expandable: true,
    level: 1,
  }, {
    name: 'tresc1',
    expandable: false,
    level: 2,
  }, {
    name: 'tresc2',
    expandable: false,
    level: 2,
  }, {
    name: 'Rozporządzenie2',
    expandable: true,
    level: 1,
  }, {
    name: '1',
    expandable: false,
    level: 2,
  }, {
    name: '2',
    expandable: false,
    level: 2,
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
  // command: Router;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  panelOpenState = false;
  public items: any = [];


  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  constructor(private router: Router) { }

  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: ExampleFlatNode) {
    const parent = this.getParentNode(node);
    return !parent || parent.isExpanded;
  }
  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {

    this.items = [
      {
        label: 'Biuro obsługi',
        id: 'eboi',
        command: () => this.nav('/eboi'),
        items:[
        {
          label: 'Usługi',
          id: 'uslugi',
          command: () => this.nav('/eboi/choice'),
        },
        {
        label: 'Dokumenty',
        id: 'dokumenty',
        command: () => this.nav('/eboi/eod-documents'),
      },
      {
        label: 'Sprawy',
        id: 'uslugi',
        command: () => this.nav('/eboi/issues'),
      }
     ] } ];
}
nav(url) {
  this.router.navigateByUrl(url);
}

}

