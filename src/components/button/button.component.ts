import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'of-button',
    templateUrl: './button.component.html',
    styleUrls: ['button.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
    @Input() public disabled: boolean;
    @Input() public classes: any;
    @Input() public href: string = null;
    @Input() public title: string = null;
    @Input() public target: string = null;

    @Output() public click = new EventEmitter<Event>();
}
