import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TitleComponent } from './componentes/title/title.component';
import { InputComponent } from './componentes/input/input.component';
import { NumberComponent } from './componentes/number/number.component';
import { DataComponent } from './componentes/data/data.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FrmInputComponent } from './features/frm-input/frm-input.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { FrmMenuComponent } from './features/frm-menu/frm-menu.component';
import { FrmNumberComponent } from './features/frm-number/frm-number.component';
import { FrmTitleComponent } from './features/frm-title/frm-title.component';
import { TemplatePrincipalComponent } from './templates/template-principal/template-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InputComponent,
    NumberComponent,
    DataComponent,
    MenuComponent,
    FrmInputComponent,
    HomeComponent,
    HeaderComponent,
    FrmMenuComponent,
    FrmNumberComponent,
    FrmTitleComponent,
    TemplatePrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
