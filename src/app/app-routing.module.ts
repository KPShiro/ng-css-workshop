import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    CssUnitsPageComponent,
    FlexboxPageComponent,
} from '@app/core/containers';
import { NavigationService } from './core/services';

const routes: Routes = [
    {
        path: 'workshops',
        data: {
            text: 'Workshops',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'css-units',
            },
            {
                path: 'css-units',
                data: {
                    text: 'CSS Units',
                },
                component: CssUnitsPageComponent,
            },
            {
                path: 'flexbox',
                data: {
                    text: 'Flexbox - About',
                },
                component: FlexboxPageComponent,
            },
        ],
    },
    {
        path: 'workspace',
        data: {
            text: 'My Workspace',
            highlighted: true,
        },
        loadChildren: () =>
            import('./workspace/workspace.module').then(
                (m) => m.WorkspaceModule
            ),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/workshops/css-units',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
    constructor(
        @Optional() @SkipSelf() parentModule: AppRoutingModule,
        private readonly _navigationService: NavigationService
    ) {
        if (parentModule) {
            throw new Error(
                `${AppRoutingModule.name} is already loaded. Import it in the main AppModule only.`
            );
        }

        this._navigationService.init(routes);
    }
}
