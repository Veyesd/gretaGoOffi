import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BugsService } from '../../../services/bugs.service';
import { Location } from '@angular/common';
import { Bugs } from 'src/app/interfaces/bugs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  Bugs: Bugs;
  status: string;

  constructor(
    private route: ActivatedRoute,
    private BugsService: BugsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBugs();
  }
  getBugs(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BugsService.getBug(id)
    .subscribe(t => {this.Bugs = t['data'];
    console.log(this.Bugs);
  
  })
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.BugsService.updateBugs(this.Bugs)
    .subscribe(() => this.goBack());
  }

}
