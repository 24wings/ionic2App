import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyCustomerPage } from '../my-customer/my-customer';
import { DynamicPage } from '../dynamic/dynamic';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MyCustomerPage;
  tab3Root: any = DynamicPage;
  tab4Root: any = MorePage;

  constructor() {

  }
}
