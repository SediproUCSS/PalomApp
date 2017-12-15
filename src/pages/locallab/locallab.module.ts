import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocallabPage } from './locallab';

@NgModule({
  declarations: [
    LocallabPage,
  ],
  imports: [
    IonicPageModule.forChild(LocallabPage),
  ],
})
export class LocallabPageModule {}
