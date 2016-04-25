import { NavController, Page} from 'ionic-angular';
import {FirebaseService} from '../../lib/auth';
import {ModalPage} from '../login/login';

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  constructor(
    private _fbService: FirebaseService,
    public _nav: NavController) {

  }

  /**
   * logs the user out and then transitions to the
   * login page of the application 
   */
  doLogout() {
    this._fbService.logout()

    // what we are doing here is setting the nav that is holding the tabPages back to
    // the login page... the current tabNav is a child nav
    this._nav.rootNav.setRoot(ModalPage)

  }
}
