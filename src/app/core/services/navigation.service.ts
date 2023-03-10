import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { INavLink } from '../models';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private _links = new BehaviorSubject<INavLink[]>([]);

    get links$(): Observable<INavLink[]> {
        return this._links.asObservable();
    }

    init(routes: Routes): void {
        const mappedRoutes = this._mapRoutes(routes);
        this._links.next(mappedRoutes);
    }

    private _mapRoutes(routes: Routes): INavLink[] {
        if (routes.length === 0) {
            return [];
        }

        return routes
            .filter((route) => route.data && route.data.text)
            .map((route) => {
                const children =
                    route.children && route.children.length > 0
                        ? this._mapRoutes(route.children)
                        : [];

                return {
                    text: route.data?.text || route.path,
                    path: route.path || '/',
                    children,
                    highlighted: route.data?.highlighted || false,
                };
            });
    }
}
