import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToolButton } from './toolbar.interfaces';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
export class ToolbarComponent {

	public buttons: ToolButton[] = [
		{ icon: 'note', url: 'note', classList:'rotated' },
		{ icon: 'menu_book', url: 'note' },
		{ icon: 'supervised_user_circle', url: 'note' }
	]

	public activeButton: ToolButton;
	
	constructor(private _router: Router) {
		this.activeButton = this.buttons[0];
		this.setTool(this.buttons[0].url??'note');
	}

	active(button: ToolButton) {
		this.activeButton = button;
	}

	isActive(button: ToolButton) {
		return (button == this.activeButton);
	}

	onClick(button: ToolButton) {
		this.setTool(button.url);
		this.active(button);
	}

	setTool(toolname: string) {
		let currentRoute = (this._router.url != '/') ? this._router.url : '/home';
		this._router.navigateByUrl(currentRoute + "(tool:" + toolname + ")");
	}

	drop(event: CdkDragDrop<string[]>, array: any[]) {
		console.log(event);
		moveItemInArray(array, event.previousIndex, event.currentIndex);
	}

}
