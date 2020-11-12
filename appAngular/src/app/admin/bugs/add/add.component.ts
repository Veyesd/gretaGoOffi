import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { BugsService } from '../../../services/bugs.service';
import { Bugs } from '../../../interfaces/bugs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private BugsService: BugsService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
  add(user_id: number, description: string): void {
    description = description.trim();


    if (!user_id && !description){ return; }
    this.BugsService.addBugs({ user_id, description} as Bugs)
    .subscribe(() => this.goBack());
  }

}
