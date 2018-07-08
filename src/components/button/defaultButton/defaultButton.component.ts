import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
    selector: 'of-default-button',
    templateUrl: './defaultButton.component.html',
    styleUrls: ['defaultButton.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DefaultButtonComponent extends ButtonComponent {
    @Input() public primary: boolean;
    @Input() public checked: boolean;
    @Input() public iconName: string = null;

    public get iconClass() {
        if (this.iconName == null) {
            return {};
        }

        const classes = {};
        classes['ms-Icon--' + this.iconName] = true;

        return classes;
    }
}
