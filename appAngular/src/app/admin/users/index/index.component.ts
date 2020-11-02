import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  users: User[]
  constructor( private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();  
  }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users["data"]);
    console.log(this.users)
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
  }

}
