import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ConsultoriasapComponent } from './pages/consultoriasap/consultoriasap.component';
import { AdmsistemasComponent } from './pages/admsistemas/admsistemas.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import { SaphanaComponent } from './pages/saphana/saphana.component';
import { MasinfoComponent } from './cmspage/masinfo/masinfo.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannertopComponent } from './components/bannertop/bannertop.component';

import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';
import { RegistrosComponent } from './cmspage/registros/registros.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ConsultoriasapComponent,
    AdmsistemasComponent,
    UpgradeComponent,
    SaphanaComponent,
    MasinfoComponent,
    BannerComponent,
    BannertopComponent,
    ContactFormComponent,
    RegistrosComponent,
    SitemapComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
