import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  user : User=new User();

  ngOnInit(){
  }

  onSubmit()
  {
    this.saveUser()
  }

  saveUser(){

    this.userService.createUser(this.user).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log(error);
      }
    );
    this.user=new User();
    this.goToUserList();

  }
  goToUserList()
  {
    this.router.navigate(['/users']);
  }

}
