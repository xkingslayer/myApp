import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPageModule } from './modal/modal.module';
import { SecondPageModule } from './modal/second/second.module';
import { ThirdPageModule } from './modal/third/third.module';
import { FourthPageModule } from './modal/fourth/fourth.module';
import { FifthPageModule } from './modal/fifth/fifth.module';
import { R6PageModule } from './modal/r6/r6.module';
import { R7PageModule } from './modal/r7/r7.module';
import { R8PageModule } from './modal/r8/r8.module';
import { R9PageModule } from './modal/r9/r9.module';
import { R10PageModule } from './modal/r10/r10.module';
import { R11PageModule } from './modal/r11/r11.module';
import { R12PageModule } from './modal/r12/r12.module';
import { R13PageModule } from './modal/r13/r13.module';
import { R14PageModule } from './modal/r14/r14.module';
import { R15PageModule } from './modal/r15/r15.module';
import { R16PageModule } from './modal/r16/r16.module';
import { R17PageModule } from './modal/r17/r17.module';
import { R18PageModule } from './modal/r18/r18.module';
import { R19PageModule } from './modal/r19/r19.module';
import { R20PageModule } from './modal/r20/r20.module';
import { R21PageModule } from './modal/r21/r21.module';
import { R22PageModule } from './modal/r22/r22.module';
import { R23PageModule } from './modal/r23/r23.module';
import { R24PageModule } from './modal/r24/r24.module';
import { D1PageModule } from './modal/d1/d1.module';
import { D2PageModule } from './modal/d2/d2.module';
import { D3PageModule } from './modal/d3/d3.module';
import { D4PageModule } from './modal/d4/d4.module';
import { D5PageModule } from './modal/d5/d5.module';
import { D6PageModule } from './modal/d6/d6.module';
import { D7PageModule } from './modal/d7/d7.module';
import { D8PageModule } from './modal/d8/d8.module';
import { D9PageModule } from './modal/d9/d9.module';
import { D10PageModule } from './modal/d10/d10.module';
import { D11PageModule } from './modal/d11/d11.module';
import { D12PageModule } from './modal/d12/d12.module';
import { D13PageModule } from './modal/d13/d13.module';
import { D14PageModule } from './modal/d14/d14.module';
import { D15PageModule } from './modal/d15/d15.module';
import { D16PageModule } from './modal/d16/d16.module';
import { D17PageModule } from './modal/d17/d17.module';
import { D18PageModule } from './modal/d18/d18.module';
import { D19PageModule } from './modal/d19/d19.module';
import { D20PageModule } from './modal/d20/d20.module';
import { D21PageModule } from './modal/d21/d21.module';
import { D22PageModule } from './modal/d22/d22.module';
import { D23PageModule } from './modal/d23/d23.module';
import { D24PageModule } from './modal/d24/d24.module';
import { D25PageModule } from './modal/d25/d25.module';
import { D26PageModule } from './modal/d26/d26.module';
import { D27PageModule } from './modal/d27/d27.module';
import { D28PageModule } from './modal/d28/d28.module';
import { D29PageModule } from './modal/d29/d29.module';
import { D30PageModule } from './modal/d30/d30.module';
import { D31PageModule } from './modal/d31/d31.module';
import { D32PageModule } from './modal/d32/d32.module';
import { D33PageModule } from './modal/d33/d33.module';
import { D34PageModule } from './modal/d34/d34.module';
import { D35PageModule } from './modal/d35/d35.module';
import { D36PageModule } from './modal/d36/d36.module';
import { D37PageModule } from './modal/d37/d37.module';
import { D38PageModule } from './modal/d38/d38.module';
import { D39PageModule } from './modal/d39/d39.module';
import { D40PageModule } from './modal/d40/d40.module';
import { D41PageModule } from './modal/d41/d41.module';
import { D42PageModule } from './modal/d42/d42.module';
import { D43PageModule } from './modal/d43/d43.module';
import { D44PageModule } from './modal/d44/d44.module';
import { D45PageModule } from './modal/d45/d45.module';
import { D46PageModule } from './modal/d46/d46.module';
import { D47PageModule } from './modal/d47/d47.module';
import { D48PageModule } from './modal/d48/d48.module';
import { D49PageModule } from './modal/d49/d49.module';
import { D50PageModule } from './modal/d50/d50.module';
import { D51PageModule } from './modal/d51/d51.module';
import { D52PageModule } from './modal/d52/d52.module';
import { D53PageModule } from './modal/d53/d53.module';
import { D54PageModule } from './modal/d54/d54.module';
import { D55PageModule } from './modal/d55/d55.module';
import { D56PageModule } from './modal/d56/d56.module';
import { D57PageModule } from './modal/d57/d57.module';
import { D58PageModule } from './modal/d58/d58.module';
import { D59PageModule } from './modal/d59/d59.module';
import { D60PageModule } from './modal/d60/d60.module';
import { D61PageModule } from './modal/d61/d61.module';
import { D62PageModule } from './modal/d62/d62.module';
import { D63PageModule } from './modal/d63/d63.module';
import { D64PageModule } from './modal/d64/d64.module';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalPageModule, SecondPageModule, ThirdPageModule, FourthPageModule, FifthPageModule, R6PageModule, 
    R7PageModule, R8PageModule, R9PageModule, R10PageModule, R11PageModule, R12PageModule, R13PageModule, R14PageModule, R15PageModule, R16PageModule, R17PageModule, R18PageModule,
    R19PageModule, R20PageModule, R21PageModule, R22PageModule, R23PageModule, R24PageModule, D1PageModule, D2PageModule, D3PageModule,
    D4PageModule, D5PageModule, D6PageModule, D7PageModule, D8PageModule, D9PageModule, D10PageModule, D11PageModule, D12PageModule,
    D13PageModule, D14PageModule, D15PageModule, D16PageModule, D17PageModule, D18PageModule, D19PageModule, D20PageModule,
    D21PageModule, D22PageModule, D23PageModule, D24PageModule, D25PageModule, D26PageModule, D27PageModule, D28PageModule, D29PageModule,
    D30PageModule, D31PageModule, D32PageModule, D33PageModule, D34PageModule, D35PageModule, D36PageModule, D37PageModule, D38PageModule, 
    D39PageModule, D40PageModule, D41PageModule, D42PageModule, D43PageModule, D44PageModule, D45PageModule, D46PageModule, D47PageModule, 
    D48PageModule, D49PageModule, D50PageModule, D51PageModule, D52PageModule, D53PageModule, D54PageModule, D55PageModule, D56PageModule, 
    D57PageModule, D58PageModule, D59PageModule, D60PageModule, D61PageModule, D62PageModule, D63PageModule, D64PageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
