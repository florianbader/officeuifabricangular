import { Component, ViewEncapsulation, Input } from '@angular/core';
import { DefaultButtonComponent } from '../defaultButton/defaultButton.component';

@Component({
    selector: 'of-compound-button',
    templateUrl: './compoundButton.component.html',
    styleUrls: ['compoundButton.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CompoundButtonComponent extends DefaultButtonComponent {
    @Input() public secondaryText: string;
}
