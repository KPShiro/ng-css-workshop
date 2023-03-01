import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { INavLink } from '@app/core/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
    private readonly _navLinks = new BehaviorSubject<INavLink[]>([]);

    get navLinks(): Observable<INavLink[]> {
        return this._navLinks.asObservable();
    }

    ngOnInit(): void {
        this._navLinks.next([
            {
                path: '/cases/css-units',
                text: 'CSS Units',
            },
            {
                path: '/cases/layout-flexbox',
                text: 'Layout: Flexbox',
            },
            {
                path: '/cases/layout-grid',
                text: 'Layout: Grid',
            },
        ]);
    }
}
