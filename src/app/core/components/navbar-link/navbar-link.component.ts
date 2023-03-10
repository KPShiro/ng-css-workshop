import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INavLink } from '@app/core/models';

@Component({
    selector: 'app-navbar-link',
    templateUrl: './navbar-link.component.html',
    styleUrls: ['./navbar-link.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarLinkComponent {
    @Input()
    link!: INavLink;

    get hasChildren(): boolean {
        return this.link.children && this.link.children.length > 0;
    }
}
