import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { tsrDropDownAnimations } from './tsr-drop-down.animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';

export type TsrDropDownState = 'expanded' | 'collapsed';
let uniqueId = 0;
let nextId = 0;

@Component({
	selector: 'tsr-drop-down',
	templateUrl: './tsr-drop-down.html',
	styleUrls: ['./tsr-drop-down.scss'],
	animations: [tsrDropDownAnimations.bodyDropDown]
})
export class TsrDropDown {

	readonly id = `tsr-drop-down-${nextId++}`;
	_headerId = `tsr-drop-down-${uniqueId++}`;

	_bodyAnimationDone = new Subject<AnimationEvent>();
	_expanded: boolean = false;

	@Input()
	get expanded(): any {
		return this._expanded;
	}
	set expanded(expanded: any) {
		this._expanded = coerceBooleanProperty(expanded);
	}

	/** An event emitted after the body's expansion animation happens. */
	@Output() afterExpand = new EventEmitter<void>();

	/** An event emitted after the body's collapse animation happens. */
	@Output() afterCollapse = new EventEmitter<void>();

	constructor(
		_uniqueSelectionDispatcher: UniqueSelectionDispatcher
	) {
		this._bodyAnimationDone
			.pipe(
				distinctUntilChanged(
					(x, y: any) => {
						return x.fromState === y.fromState && x.toState === y.toState;
					}
				)
			)
			.subscribe(
				(event: any) => {
					if (event.fromState !== 'void') {
						if (event.toState === 'expanded') {
							this.afterExpand.emit();
						} else if (event.toState === 'collapsed') {
							this.afterCollapse.emit();
						}
					}
				}
			);
	}

	_getExpandedState(): TsrDropDownState {
		return this._expanded ? 'expanded' : 'collapsed';
	}

	toggle(): void {
		this.expanded = !this.expanded;
	}


}