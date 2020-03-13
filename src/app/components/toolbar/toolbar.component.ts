import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToolButton } from './toolbar.interfaces';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ElectronService } from '../../core/services';
import { MatDialog } from '@angular/material/dialog';

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
		{ title: "notes", icon: 'note', url: 'note', classList: 'rotated' },
		{ title: "books", icon: 'menu_book', url: 'note' },
		{ title: "groups", icon: 'supervised_user_circle', url: 'note' }
	]

	public activeButton: ToolButton;

	constructor(private electron: ElectronService, private _router: Router, public dialog: MatDialog) {
		this.activeButton = this.buttons[0];
		this.setTool(this.buttons[0].url ?? 'note');
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
