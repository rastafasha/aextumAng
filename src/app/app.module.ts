import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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


// cookies
import { PoliticascookiesComponent } from './pages/politicascookies/politicascookies.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { TerminosUsoComponent } from './pages/terminos-uso/terminos-uso.component';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'// it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements:{
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}} 
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank">{{cookiePolicyLink}}</a>, 
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> y nuestro 
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank">{{tosLink}}</a>
    </span>
    `,
  },
  content:{
    message: 'By using our site, you acknowledge that you have read and understand our ',
    
    cookiePolicyLink: 'Politicas de Cookies',
    cookiePolicyHref: '/politicas-cookies',

    privacyPolicyLink: 'Politicas de Privacidad',
    privacyPolicyHref: '/politicas-privacidad',

    tosLink: 'Términos de Servicio',
    tosHref: 'terminos-de-servicio',
  }
};

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


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
    NotFoundComponent,
    PoliticascookiesComponent,
    PoliticaPrivacidadComponent,
    TerminosUsoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
