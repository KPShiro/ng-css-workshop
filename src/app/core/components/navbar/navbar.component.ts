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
                path: '/css-units',
                text: 'CSS Units',
            },
            {
                path: '/layout-flexbox',
                text: 'Layout: Flexbox',
            },
            {
                path: '/layout-grid',
                text: 'Layout: Grid',
            },
            {
                path: '/dos-and-donts',
                text: "Dos and don'ts",
            },
        ]);
    }
}
