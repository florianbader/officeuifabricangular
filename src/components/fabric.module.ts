import { NgModule } from '@angular/core';

import '../../node_modules/office-ui-fabric-core/dist/css/fabric.min.css';

import { ButtonComponent } from './button/button.component';
import { FabricComponent } from './fabric/fabric.component';
import { DefaultButtonComponent } from './button/defaultButton/defaultButton.component';
import { BrowserModule } from '@angular/platform-browser';
import { CompoundButtonComponent } from './button/compoundButton/compoundButton.component';

@NgModule({
  declarations: [
    FabricComponent,
    ButtonComponent,
    DefaultButtonComponent,
    CompoundButtonComponent
  ],
  exports: [
    FabricComponent,
    DefaultButtonComponent,
    CompoundButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class FabricModule { }
