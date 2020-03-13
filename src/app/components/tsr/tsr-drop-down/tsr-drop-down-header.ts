import { Component, Input, Host } from '@angular/core';
import { TsrDropDown, TsrDropDownState } from './tsr-drop-down';
import { tsrDropDownAnimations } from './tsr-drop-down.animations';

@Component({
	selector: 'tsr-drop-down-header',
	styleUrls: ['./tsr-drop-down-header.scss'],
	animations: [tsrDropDownAnimations.indicatorRotate],
	host: {
		'(click)': '_toggle()'
	},
	template: `
		<div class="collapsible">
			<i [@indicatorRotate]="_getExpandedState()" class="material-icons tsr-drop-down-indicator">arrow_drop_down</i>
			<ng-content></ng-content>
		</div>
	`
})
export class TsrDropDownHeader {

	@Input('dropIcon') useIcon: boolean = true;

	constructor(@Host() public parent: TsrDropDown) {}

	_toggle(): void {
		this.parent.toggle();
	}

	_getExpandedState(): TsrDropDownState {
		return this.parent._getExpandedState();
	}
	
}
