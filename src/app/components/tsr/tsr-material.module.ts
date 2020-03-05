import { NgModule } from '@angular/core';
import { TsrDropDown } from './tsr-drop-down/tsr-drop-down';
import { TsrDropDownHeader } from './tsr-drop-down/tsr-drop-down-header';
import { TsrDropDownBody } from './tsr-drop-down/tsr-drop-down-body';
import { CommonModule } from '@angular/common';


@NgModule({
	declarations: [
		TsrDropDown,
		TsrDropDownHeader,
		TsrDropDownBody
	],
	exports: [
		TsrDropDown,
		TsrDropDownHeader,
		TsrDropDownBody
	],
	imports: [
		CommonModule
	]
})
export class TsrMaterialModule { }
