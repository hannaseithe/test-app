import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeelingsComponent } from './components/feelings/feelings.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: FeelingsComponent
    },
    { 
        path: '',   
        redirectTo: '/home', 
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: '**',   
        redirectTo: '/home'
    }
    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
