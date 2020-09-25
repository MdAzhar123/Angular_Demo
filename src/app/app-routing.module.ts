import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReadUserComponent } from './read-user/read-user.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [

  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:ShowUserComponent},
  {path:'add',component:CreateUserComponent},
  {path:'details/:id',component:ReadUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
