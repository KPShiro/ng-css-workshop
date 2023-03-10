import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INavLink } from '@app/core/models';
import { NavigationService } from '@app/core/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    get links$(): Observable<INavLink[]> {
        return this._navigationService.links$;
    }

    constructor(private readonly _navigationService: NavigationService) {}
}
