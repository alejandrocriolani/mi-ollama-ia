import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { ChatComponent } from './views/chat/chat.component';
import { GenerateComponent } from './views/generate/generate.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chat'
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'chat',
                component: ChatComponent
            },{
                path: 'generate',
                component: GenerateComponent
            }
        ]
    }
];
