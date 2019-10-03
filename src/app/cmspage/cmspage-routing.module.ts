import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegistrosComponent } from './registros/registros.component';
import { MasinfoComponent } from './masinfo/masinfo.component';

const routes: Routes = [
  {path: 'contact', component: ContactFormComponent},
  {path: 'subscribe', component: RegistrosComponent},
  {path: 'masinfo', component: MasinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
