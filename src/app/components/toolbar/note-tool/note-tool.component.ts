import { Component, OnInit } from '@angular/core';
import { ToolButtonList, ToolButton } from '../toolbar.interfaces';

@Component({
	selector: 'app-note-tool',
	templateUrl: './note-tool.component.html',
	styleUrls: ['./note-tool.component.scss']
})
export class NoteToolComponent implements OnInit {

	public buttons: ToolButtonList[] = [
		{
			title: 'CREATE NOTE',
			buttons: [
				{ title: 'basic', icon: 'description' },
				{ title: 'list', icon: 'check_box' },
				{ title: 'image', icon: 'photo' },
				{ title: 'draw', icon: 'gesture' },
				{ title: 'audio', icon: 'mic' }
			]
		}
	]

	public activeButton: ToolButton;

	constructor() { }

	ngOnInit(): void {
	}

	active(button: ToolButton) {
		this.activeButton = button;
	}

	isActive(button: ToolButton) {
		return (button == this.activeButton);
	}

	collapse(collapseButton: any) {
		if (collapseButton.toElement.nextElementSibling.style.maxHeight) {
			collapseButton.toElement.nextElementSibling.style.maxHeight = null;
		} else {
			collapseButton.toElement.nextElementSibling.style.maxHeight = collapseButton.toElement.nextElementSibling.scrollHeight + "px";
		}
	}

}
