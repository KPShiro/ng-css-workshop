import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-example-card',
    templateUrl: './example-card.component.html',
    styleUrls: ['./example-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleCardComponent {}
