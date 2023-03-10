import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { NavbarComponent, NavbarLinkComponent } from '@app/core/components';
import {
    CssUnitsPageComponent,
    FlexboxPageComponent,
    LayoutFlexboxPageComponent,
} from '@app/core/containers';

@NgModule({
    imports: [SharedModule],
    exports: [NavbarComponent],
    declarations: [
        NavbarComponent,
        NavbarLinkComponent,
        CssUnitsPageComponent,
        FlexboxPageComponent,
        LayoutFlexboxPageComponent,
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                `${CoreModule.name} is already loaded. Import it in the main AppModule only.`
            );
        }
    }
}
