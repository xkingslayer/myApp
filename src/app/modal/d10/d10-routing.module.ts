import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D10Page } from './d10.page';

const routes: Routes = [
  {
    path: '',
    component: D10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D10PageRoutingModule {}
