import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bugs } from '../../../interfaces/bugs';
import { Location } from '@angular/common';
import { BugsService } from '../../../services/bugs.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  Bugs: Bugs;
  constructor(
    private route: ActivatedRoute,
    private BugsService: BugsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBug();
  }
  getBug(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BugsService.getBug(id)
    .subscribe(t => this.Bugs = t);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.BugsService.updateBugs(this.Bugs)
    .subscribe(() => this.goBack());
  }
}
