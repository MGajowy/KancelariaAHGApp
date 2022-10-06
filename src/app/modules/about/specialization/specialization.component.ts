import { Component, OnInit } from '@angular/core';
import {AboutServiceService} from '../service/about-service.service';
import {TreeNode} from 'primeng/api';
@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent implements OnInit {

  files1: TreeNode[];

  constructor(private aboutService: AboutServiceService) { }

    ngOnInit() {
      this.aboutService.getFiles().then(files => this.files1 = files);
  }

}
