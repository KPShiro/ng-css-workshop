import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import {
    EmExampleComponent,
    ExampleCardComponent,
    NavbarComponent,
    NavbarLinkComponent,
    RemExampleComponent,
} from '@app/core/components';
import {
    CssUnitsPageComponent,
    DosAndDontsPageComponent,
    FlexboxContainerPageComponent,
    FlexboxItemsPageComponent,
    FlexboxLayoutsPageComponent,
    FlexboxPageComponent,
} from '@app/core/containers';

@NgModule({
    imports: [SharedModule],
    exports: [NavbarComponent],
    declarations: [
        NavbarComponent,
        NavbarLinkComponent,
        CssUnitsPageComponent,
        DosAndDontsPageComponent,
        FlexboxContainerPageComponent,
        FlexboxItemsPageComponent,
        FlexboxLayoutsPageComponent,
        FlexboxPageComponent,
        EmExampleComponent,
        ExampleCardComponent,
        RemExampleComponent,
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
