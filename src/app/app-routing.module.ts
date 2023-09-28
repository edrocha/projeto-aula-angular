import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmInputComponent } from './features/frm-input/frm-input.component';
import { HomeComponent} from './features/home/home.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'frm-input', component: FrmInputComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}
