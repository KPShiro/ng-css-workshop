import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-rem-example',
    templateUrl: './rem-example.component.html',
    styleUrls: ['./rem-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemExampleComponent {}
