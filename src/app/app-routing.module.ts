import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IDELandingPageComponent } from './modules/IDE-landing-page/IDE-landing-page.component';

const routes: Routes = [{ path: '', component: IDELandingPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
