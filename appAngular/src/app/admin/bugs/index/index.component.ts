import { Component, OnInit } from '@angular/core';
import { Bugs } from '../../../interfaces/bugs';
import { BugsService } from '../../../services/bugs.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  datas: Bugs[];
  constructor( private BugsService : BugsService) { }

  ngOnInit(): void {

    this.getBugs();
  }
  getBugs(): void {
    this.BugsService.getBugs()
    .subscribe(datas => this.datas = datas["data"]
    
    );
  }

  delete(Bugs: Bugs): void {
    this.datas = this.datas.filter(p => p !== Bugs);
    this.BugsService.deleteBugs(Bugs).subscribe();
  }

}
