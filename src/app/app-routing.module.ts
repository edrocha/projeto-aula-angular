import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmInputComponent } from './features/frm-input/frm-input.component';
import { HomeComponent} from './features/home/home.component';
import { FrmMenuComponent} from './features/frm-menu/frm-menu.component';
import {FrmNumberComponent } from './features/frm-number/frm-number.component';
import { FrmTitleComponent} from './features/frm-title/frm-title.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'frm-input', component: FrmInputComponent},
    {path: 'frm-menu', component: FrmMenuComponent},
    {path: 'frm-number', component: FrmNumberComponent},
    {path: 'frm-title', component: FrmTitleComponent},
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}

