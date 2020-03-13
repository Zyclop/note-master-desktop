import { Component, ElementRef, HostListener, AfterViewInit, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { tsrScrollBarAnimations } from './tsr-scroll-bar.animations';

let unique_id = 0;
export type TsrScrollBarState = 'visible' | 'hidden';

@Component({
	selector: 'tsr-scroll-bar',
	templateUrl: './tsr-scroll-bar.html',
	styleUrls: ['./tsr-scroll-bar.scss'],
	animations: [tsrScrollBarAnimations.scrollBarThumb],
	host: {
		'class': 'tsr-scroll-bar'
	}
})
export class TsrScrollBar implements AfterViewInit {

	@ViewChild('scrollBar')
	private _scrollBar: ElementRef;
	private _thumbState: boolean = false;

	@Input()
	get thumbState(): boolean {
		return this._thumbState;
	}
	set thumbState(thumbState: boolean) {
		this._thumbState = thumbState;
	}

	constructor() { }

	ngAfterViewInit(): void {
		console.log(this._scrollBar);
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.toggle();
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.toggle();
	}

	_getThumbState(): TsrScrollBarState {
		return this._thumbState ? 'visible' : 'hidden';
	}

	toggle(): void {
		this.thumbState = !this.thumbState;
	}

}
