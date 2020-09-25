import { from, Observable } from 'rxjs';
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
    providedIn:'root'
})

export class UserService{


    user:User[]=[];

    private baseUrl='http://localhost:8081/api/jpa'

    constructor(private http:HttpClient){

    }

    getUser(id:number):Observable<any>{
        return this.http.get(this.baseUrl+'/users/'+id);
    }

    getUserList():Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl+'/users/');
    }

    createUser(user:Object):Observable<Object>{

        return this.http.post(this.baseUrl+'/users/',user);

    }

    deleteUser(id:number):Observable<any>{
        return this.http.delete(this.baseUrl+'/users/'+id);
    }

}