import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaboratorioPage } from './laboratorio';

@NgModule({
  declarations: [
    LaboratorioPage,
  ],
  imports: [
    IonicPageModule.forChild(LaboratorioPage),
  ],
})
export class LaboratorioPageModule {}
