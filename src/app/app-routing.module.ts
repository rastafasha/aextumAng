import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, NosotrosComponent, ServiciosComponent, ConsultoriasapComponent,
  AdmsistemasComponent, UpgradeComponent, SaphanaComponent, SitemapComponent, NotFoundComponent} from './pages/index.paginas';

import { ContactFormComponent} from './cmspage/contact-form/contact-form.component';


// import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'nosotros/#mis', component: NosotrosComponent},
  {path: 'nosotros/#vis', component: NosotrosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'servicios/consultoria-sap-basis', component: ConsultoriasapComponent},
  {path: 'servicios/administracion-de-sistemas', component: AdmsistemasComponent},
  {path: 'servicios/upgrade', component: UpgradeComponent},
  {path: 'servicios/sap-hana', component: SaphanaComponent},
  {path: 'contacto', component: ContactFormComponent},
  {path: 'site-map', component: SitemapComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }


