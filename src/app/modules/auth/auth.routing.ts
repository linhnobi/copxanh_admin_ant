import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { 
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { 
        path: '',
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}