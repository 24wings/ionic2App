import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SignupPage } from '../pages/signup/signup';
import { IndexPage } from '../pages/index/index';
import { MessagePage } from '../pages/message/message';
import { ToolService } from '../providers/tool-service';
import { MytimePage } from '../pages/mytime/mytime';
import { MyCustomerPage } from '../pages/my-customer/my-customer';
import { AddCustomerPage } from '../pages/add-customer/add-customer';
import { StatePage } from '../pages/state/state';
import { TreatDetailPage } from '../pages/treat-detail/treat-detail';
import { BeautyProjectsPage } from '../pages/beauty-projects/beauty-projects';
import { MessageDetailPage } from '../pages/message-detail/message-detail';


@NgModule({
  declarations: [
    SigninPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ForgotPasswordPage,
    SignupPage,
    IndexPage,
    MessagePage,
    MytimePage,
    MyCustomerPage,
    AddCustomerPage,
    StatePage,
    TreatDetailPage,
    BeautyProjectsPage,
    MessageDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-back'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SigninPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ForgotPasswordPage,
    SignupPage,
    IndexPage,
    MessagePage,
    MytimePage,
    MyCustomerPage,
    AddCustomerPage,
    StatePage,
    TreatDetailPage,
    BeautyProjectsPage,
    MessageDetailPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ToolService]
})
export class AppModule { }
