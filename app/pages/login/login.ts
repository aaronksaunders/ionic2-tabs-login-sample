import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import {Toast} from 'ionic-native';
import {TabsPage} from '../tabs/tabs';
import {FirebaseService} from '../../lib/auth';

@Page({
    template: `
        <ion-navbar *navbar>
            <ion-title>
                Angular Fire Test App
            </ion-title>
        </ion-navbar>
        <ion-content padding>
            <h1>User Login</h1>
            <form  #loginCreds="ngForm" (ngSubmit)="login(loginCreds.value)">
            <ion-item>
                <ion-label>Username</ion-label>
                <ion-input type="text" ngControl="email"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>Password</ion-label>
                <ion-input type="password" ngControl="password"></ion-input>
            </ion-item>

            <div padding>
                <button block type="submit">Login</button>        
            </div>
            <div padding>
                <p *ngIf="error" class="error">Error:&nbsp;{{ error.code }}</p>  
            </div>
            </form>
        </ion-content>
    `
})
export class ModalPage {

    error: any

    constructor(public fb: FirebaseService,
        public viewCtrl: ViewController,
        public nav: NavController) { }
    /** 
     * this will dismiss the modal page
     */
    dismiss() {
        this.viewCtrl.dismiss();
    }

    /**
     *  this logs in the user using the form credentials
     */
    login(credentials) {

        try {
            // login usig the email/password auth provider
            this.fb.login(credentials).subscribe(
                (data: any) => {
                    console.log(data)
                    this.nav.setRoot(TabsPage,{})
                },
                (error) => {
                    console.log(error)
                    let msg = "Error Logging In: " + error
                    Toast.show(msg, "3000", "center");
                }
            );

        } catch (EE) {
            console.log(EE)
        }

    }
}