import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AppLayoutModule } from './layout/layout.module';
import { HttpConfigInterceptor } from './core/http-service/interceptor';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './core/helpers/auth.guard';
import { AuthModule } from './modules/auth/auth.module';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // IconsProviderModule,
    // NzLayoutModule,
    // NzMenuModule,
    AppLayoutModule,
    AuthModule,
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    CookieService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
