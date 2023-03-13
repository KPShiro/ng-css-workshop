import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-em-example',
    templateUrl: './em-example.component.html',
    styleUrls: ['./em-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmExampleComponent {}
