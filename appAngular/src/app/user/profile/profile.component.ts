import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UsersService]
})
export class ProfileComponent implements OnInit {
  user;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.setUser
  }
  setUser(): void{
    this.userService.getUsers().subscribe(data => {
      this.user = data
    })
  }

}
