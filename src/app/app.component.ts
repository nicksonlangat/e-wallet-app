import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { timer } from 'rxjs';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[StatusBar, SplashScreen],
})
export class AppComponent {
  showSplash=true;
  constructor(
    private statusBar: StatusBar,
    private platform:Platform,
    private splashScreen:SplashScreen,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    this.statusBar.backgroundColorByHexString('#151a20');
    this.splashScreen.hide();
    
    timer(3000).subscribe(() => this.showSplash = false)
  }
}
