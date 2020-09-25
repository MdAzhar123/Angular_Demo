import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

   users:Observable<[User]>;

  userr:User[];

  

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {

this.fetchUserList();

  }

  fetchUserList(){
   this.userService.getUserList().subscribe(

    response=>{
      this.userr=response;
      console.log(response);
    }

   );
  }

  deleteUser(id:number){
   this.userService.deleteUser(id).subscribe(
    
data=>{
  console.log(data);
  this.fetchUserList();
},
error=>console.log(error)


   );

  }




  userDetails(id:number){
this.router.navigate(["details",id]);

  }

}
