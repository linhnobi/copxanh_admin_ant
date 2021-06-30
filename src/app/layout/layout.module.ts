import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './layout.component';
import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        AppLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
    ],
    exports: [],
    providers: [],
})
export class AppLayoutModule {}
