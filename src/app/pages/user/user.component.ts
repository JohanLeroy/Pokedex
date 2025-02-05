import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    NgForOf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users: any = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (response: any) => {
        this.users = response.data;
        console.log(this.users);
      }
    })
  }

}
