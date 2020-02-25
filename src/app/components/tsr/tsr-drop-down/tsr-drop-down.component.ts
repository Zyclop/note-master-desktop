import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
	selector: 'tsr-drop-down',
	templateUrl: './tsr-drop-down.component.html',
	styleUrls: ['./tsr-drop-down.component.scss']
})
export class TsrDropDownComponent implements OnInit {
	
	private body: any;

	ngOnInit(): void {
		console.log(this.elt)
		for (const children of this.elt.nativeElement.children) {
			console.log(children.localName);
			if (children.localName == 'tsr-drop-down-header') {
				children.addEventListener("click", () => {
					if (this.body.children[0].style.maxHeight) {
						this.body.children[0].style.maxHeight = null;
					} else {
						console.log(this.body.children[0].scrollHeight);
						this.body.children[0].style.maxHeight = this.body.children[0].scrollHeight+"px";
					}
					console.log(this.body.children[0].style);
				});
			}
			if (children.localName == 'tsr-drop-down-body') {
				this.body = children;
			}
		}
	}

	constructor(private elt: ElementRef) { }


}
