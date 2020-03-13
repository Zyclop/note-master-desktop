import { Component, ElementRef, HostListener, AfterViewInit, ViewChild, Input } from '@angular/core';
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

	private _scFlag: boolean = false;
	public _thumbHeight = 0;
	public _trackHeight = 0;

	@Input()
	get thumbState(): boolean {
		return this._thumbState;
	}
	set thumbState(thumbState: boolean) {
		this._thumbState = thumbState;
	}

	constructor() {}

	ngAfterViewInit(): void {
		this._thumbHeight = this._setThumbHeight();
		this._trackHeight = this._scrollBar.nativeElement.offsetHeight;
		this._scFlag = true;
	}

	@HostListener('mouseenter') onMouseEnter() {
		// this.toggle();
		// this._thumbHeight = this._setThumbHeight();
		console.log(this._scrollBar);		
	}

	@HostListener('mouseleave') onMouseLeave() {
		// this.toggle();
		// this._thumbHeight = this._setThumbHeight();
	}

	_getThumbState(): TsrScrollBarState {
		return this._thumbState ? 'visible' : 'hidden';
	}

	_getThumbHeight(): string {
		return (!this._scFlag) ? '0px' : this._thumbHeight+'px';
	}
	
	_setThumbHeight() {
		const thumbHeight = this._scrollBar.nativeElement.offsetHeight / this._scrollBar.nativeElement.scrollHeight;
		return (thumbHeight > 1) ? thumbHeight : 0;
	}
	
	_setTrackHeight() {
		return this._scrollBar.nativeElement.offsetHeight;
	}

	toggle(): void {
		this.thumbState = !this.thumbState;
	}

}
