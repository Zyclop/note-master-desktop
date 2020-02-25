import 'reflect-metadata';
import '../../../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TsrDropDownComponent } from './tsr-drop-down/tsr-drop-down.component';
import { TsrDropDownHeaderComponent } from './tsr-drop-down-header/tsr-drop-down-header.component';
import { TsrDropDownBodyComponent } from './tsr-drop-down-body/tsr-drop-down-body.component';


@NgModule({
	declarations: [
		TsrDropDownComponent,
		TsrDropDownHeaderComponent,
		TsrDropDownBodyComponent
	],
	exports: [
		TsrDropDownComponent,
		TsrDropDownHeaderComponent,
		TsrDropDownBodyComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: []
})
export class TsrMaterialModule { }
