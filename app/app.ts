import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {ModalPage} from './pages/login/login';
import {FirebaseService} from './lib/auth';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/,
  providers: [FirebaseService]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform,  fb : FirebaseService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    
    if (fb.isAuthenticated()) {
      alert("authentecated")
    } else {
      this.rootPage = ModalPage
    }
    
  }
}
