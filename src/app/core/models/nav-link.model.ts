export interface INavLink {
    text: string;
    path: string;
    children: INavLink[];
    highlighted: boolean;
}
