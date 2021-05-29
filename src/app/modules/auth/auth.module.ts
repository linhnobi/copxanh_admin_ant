import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NzInputModule,
        NzFormModule,
        NzButtonModule
    ],
    exports: [],
    providers: [],
})
export class AuthModule {}