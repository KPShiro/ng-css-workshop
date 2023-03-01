import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule, FontAwesomeModule],
    exports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class SharedModule {}
