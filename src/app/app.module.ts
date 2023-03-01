import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { AppInitializerProvider } from '@app/core/providers';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,

        //App routing (should be imported as the last one)
        AppRoutingModule,
    ],
    providers: [
        AppInitializerProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        private readonly _faIconLibrary: FaIconLibrary,
        private readonly _faConfig: FaConfig,
    ) {
        this._faIconLibrary.addIconPacks(fas, far, fab);
        this._faConfig.defaultPrefix = 'fas';
        this._faConfig.fixedWidth = true;
    }
}
