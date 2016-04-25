import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import  "firebase"


@Injectable()
export class FirebaseService {


    baseRef = new Firebase('https://clearlyinnovative-firebasestarterapp.firebaseio.com/');
    
    constructor() {
        // check for changes in auth status
        this.baseRef.onAuth((authData) => {
            if (authData) {
                console.log("User " + authData.uid + " is logged in with " + authData.provider);
            } else {
                console.log("User is logged out");
            }
        })
    }
    
    public isAuthenticated() {
        return (this.baseRef.getAuth() !== null)
    }

    public logout() {
        this.baseRef.unauth()
    }

    public login(_credentials) {
        var that = this

        return new Observable(observer => {
            that.baseRef.authWithPassword({
                "email": _credentials.email,
                "password":  _credentials.password
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                    observer.error(error)
                } else {
                    console.log("Authenticated successfully with payload-", authData);
                    observer.next(authData)
                }
            });
        });
    }
}
