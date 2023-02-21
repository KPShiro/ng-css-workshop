import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopComponent } from './core/containers';

const routes: Routes = [
    {
        path: '',
        component: WorkshopComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
    constructor(@Optional() @SkipSelf() parentModule: AppRoutingModule) {
        if (parentModule) {
            throw new Error(
                `${AppRoutingModule.name} is already loaded. Import it in the main AppModule only.`
            );
        }
    }
}
