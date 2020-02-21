import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';

enum KEY_CODE {
	RIGHT_ARROW = 39,
	LEFT_ARROW = 37,
	ALT = 18
}

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@ViewChild('noteBtnTooltip') noteBtnTooltip: MatTooltip;
	@ViewChild('notebookBtnTooltip') notebookBtnTooltip: MatTooltip;
	@ViewChild('groupBtnTooltip') groupBtnTooltip: MatTooltip;

	private btnToolTips: MatTooltip[] = [];

	private flagKey: boolean = false;

	constructor(private _router: Router) {
		this.setTool('note');
	}
	
	ngOnInit(): void {
	}
	
	@HostListener('window:keydown', ['$event'])
	keydownEvent(event: KeyboardEvent) {
		if (event.keyCode === KEY_CODE.ALT && !this.flagKey) {
			if (this.btnToolTips.length == 0) this.btnToolTips.push(this.noteBtnTooltip, this.notebookBtnTooltip, this.groupBtnTooltip);
			for (const tooltip of this.btnToolTips) {
				tooltip.show();
				tooltip.hideDelay = 999999;
			}
			this.flagKey = true;
		}
	}
	@HostListener('window:keyup', ['$event'])
	keyupEvent(event: KeyboardEvent) {
		if (event.keyCode === KEY_CODE.ALT && this.flagKey) {
			for (const tooltip of this.btnToolTips) {
				tooltip.hideDelay = 0;
				tooltip.hide();
			}
			this.flagKey = false;
		}
	}

	setTool(toolname: string) {
		let currentRoute = (this._router.url != '/') ? this._router.url : '/home';
		this._router.navigateByUrl(currentRoute+"(tool:"+toolname+")");
	}

}
