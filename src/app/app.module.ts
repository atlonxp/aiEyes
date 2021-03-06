import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';
import { NativeStorage } from '@ionic-native/native-storage';
import { AppVersion } from '@ionic-native/app-version';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { CameraProvider } from '../providers/camera/camera.provider';
import { CognitiveService } from '../providers/cognitive-services/cognitive-services.service';
import { NativeActionsProvider } from '../providers/native-actions/native-actions.provider';
import { createTranslateLoader } from './../assets/i18n/createTranslateLoader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    Vibration,
    TextToSpeech,
    ScreenOrientation,
    Globalization,
    NativeStorage,
    AppVersion,
    CognitiveService,
    CameraProvider,
    NativeActionsProvider
  ]
})
export class AppModule {}
