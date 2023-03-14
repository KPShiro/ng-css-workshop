import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    templateUrl: './dos-and-donts.component.html',
    styleUrls: ['./dos-and-donts.component.scss'],
})
export class DosAndDontsPageComponent implements OnInit {
    private readonly _dosAndDonts = new BehaviorSubject<
        { title: string; description?: string }[]
    >([]);

    private readonly _usefulLinks = new BehaviorSubject<
        { text: string; link: string }[]
    >([]);

    private readonly _socialMediaLinks = new BehaviorSubject<
        { text: string; link: string }[]
    >([]);

    get dosAndDonts$() {
        return this._dosAndDonts.asObservable();
    }

    get usefulLinks$() {
        return this._usefulLinks.asObservable();
    }

    get socialMediaLinks$() {
        return this._socialMediaLinks.asObservable();
    }

    ngOnInit(): void {
        this._usefulLinks.next([
            {
                text: 'CSS Docs (MDN)',
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            },
            {
                text: 'CSS Box Model',
                link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model',
            },
            {
                text: 'BEM - Block Element Modifier',
                link: 'https://getbem.com/',
            },
            {
                text: 'CSS Specificity',
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
            },
            {
                text: 'CSS Selectors',
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors',
            },
            {
                text: 'CSS Inheritance',
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance',
            },
            {
                text: 'Can I use...',
                link: 'https://caniuse.com/',
            },
            {
                text: 'Flexbox (CSS Tricks)',
                link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
            },
            {
                text: 'Flexbox Froggy',
                link: 'https://flexboxfroggy.com/',
            },
        ]);

        this._socialMediaLinks.next([
            {
                text: 'Kewin Powell (YouTube)',
                link: 'https://www.youtube.com/@KevinPowell',
            },
            {
                text: 'Slaying The Dragon (YouTube)',
                link: 'https://www.youtube.com/@slayingthedragon',
            },
            {
                text: 'Web Dev Simplified (YouTube)',
                link: 'https://www.youtube.com/@WebDevSimplified',
            },
        ]);

        this._dosAndDonts.next([
            {
                title: `Learn and understand CSS Box Model`,
            },
            {
                title: `Learn and understand BEM (Block Element Modifier)`,
            },
            {
                title: `Learn and understand CSS inheritance - yes, inheritance`,
            },
            {
                title: `Learn and understand CSS Specificity`,
            },
            {
                title: `Use VS Code`,
                description: `VS Code has a lot of usefull features (or extensions) that will instantly improve your frontend development experience.`,
            },
            {
                title: 'Respect accessibility setttings',
                description: `Every browser nowadays has some default values that user can modify. Don't override user's preferences (e.g. by hardcoding default font size), because it might lead to accessibility issues.`,
            },
            {
                title: `Always remember about the bigger picture`,
                description: `If you're working on a small portion of the UI it doesn't mean you can forget about the rest. Make sure that your new component can be resued in a different place, is scallable (can grow/shrink in width) and respects user preferences.`,
            },
            {
                title: `Stop copying, start reusing`,
                description: `It's tempting to "copy & paste" CSS that is working somewhere else. Unfortunately, this decreases the maintainability and scalability of the project. Also, quite often there will be styles or just CSS properties that you won't need.`,
            },
            {
                title: `Keep your CSS readable`,
            },
            {
                title: `Simplify your CSS selectors`,
                description: `Try to write selectors that fits your needs. Keep them short and understandable.`,
            },
            {
                title: `Keep your CSS organized`,
                description: `If you need to write a new styles that could be reused, make sure that there are no similiar styles in project. Check the existing files (or components) and reuse existing items. If you won't be able to find anything, add your code in a place where it should belong.`,
            },
            {
                title: `Forget about magic values`,
                description: `Avoid hardcoding colors, font sizes, paddings etc. We have a design system that we should follow. Use values provided in our theme so in case of global changes it will be very easy to perform the update.`,
            },
            {
                title: `Utility styles ARE NOT component styles`,
                description: `Avoid hardcoding colors, font sizes, paddings etc. We have a design system that we should follow. Use values provided in our theme so in case of global changes it will be very easy to perform the update.`,
            },
        ]);
    }
}
