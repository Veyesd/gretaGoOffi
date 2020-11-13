import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { BugsService } from '../../../services/bugs.service';
import { Bugs } from '../../../interfaces/bugs';
import { User } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  users: User[];
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private BugsService: BugsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(t => {
        this.users = t['data'];
      });
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
