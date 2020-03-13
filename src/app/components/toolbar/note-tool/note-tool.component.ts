import { Component } from '@angular/core';
import { ToolButtonList, ToolButton } from '../toolbar.interfaces';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-note-tool',
	templateUrl: './note-tool.component.html',
	styleUrls: ['./note-tool.component.scss']
})
export class NoteToolComponent {

	public buttons: ToolButtonList[] = [
		{
			title: 'CREATE',
			active: true,
			buttons: [
				{ title: 'basic', icon: 'description' },
				{ title: 'list', icon: 'check_box' },
				{ title: 'image', icon: 'photo' },
				{ title: 'draw', icon: 'gesture' },
				{ title: 'audio', icon: 'mic' }
			]
		},
		{
			title: 'TEST',
			buttons: [
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' },
				{ title: 'test', icon: 'accessible_forward' }
			]
		}
	]

	public activeButton: ToolButton;

	constructor() {
		this.active(this.buttons[0].buttons[0]);
	}

	handle(button: ToolButton) {
		this.active(button);
		this.openDialog();
	}

	active(button: ToolButton) {
		this.activeButton = button;
	}

	isActive(button: ToolButton) {
		return (button == this.activeButton);
	}

	drop(event: CdkDragDrop<string[]>, array: any[]) {
		moveItemInArray(array, event.previousIndex, event.currentIndex);
	}

	openDialog(): void {

	}

}