import { Component } from '@angular/core';

@Component({
    templateUrl: './flexbox.component.html',
    styleUrls: ['./flexbox.component.scss'],
})
export class FlexboxPageComponent {
    get example1() {
        return `
        <div class="container">
            <div class="item">
                Item 1
            </div>
            <div class="item">
                Item 2
            </div>
            <div class="item">
                Item 3
            </div>
        </div>`;
    }

    get example2() {
        return `
        .container {
            display: flex;
        }`;
    }

    get example3() {
        return `
        .container {
            display: flex;
            flex-direction: column;
        }`;
    }
}
