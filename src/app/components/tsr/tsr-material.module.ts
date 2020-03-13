import { NgModule } from '@angular/core';
import { TsrDropDown } from './tsr-drop-down/tsr-drop-down';
import { TsrDropDownHeader } from './tsr-drop-down/tsr-drop-down-header';
import { TsrDropDownBody } from './tsr-drop-down/tsr-drop-down-body';
import { CommonModule } from '@angular/common';
import { TsrScrollBar } from './tsr-scroll-bar/tsr-scroll-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
	declarations: [
		TsrDropDown,
		TsrDropDownHeader,
		TsrDropDownBody,
		TsrScrollBar
	],
	exports: [
		TsrDropDown,
		TsrDropDownHeader,
		TsrDropDownBody,
		TsrScrollBar
	],
	imports: [
		CommonModule,
		DragDropModule
	]
})
export class TsrMaterialModule { }
