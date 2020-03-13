import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { MatButtonModule } from '@angular/material/button';
import { AngularSplitModule, SplitComponent } from 'angular-split';
import { MatTooltipModule } from '@angular/material/tooltip';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NoteToolComponent } from './components/toolbar/note-tool/note-tool.component';

import { TsrMaterialModule } from './components/tsr/tsr-material.module';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
	declarations: [
		AppComponent,
		TitleBarComponent,
		HomeComponent,
		ToolbarComponent,
		NoteToolComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		CoreModule,
		SharedModule,
		AppRoutingModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		AngularSplitModule.forRoot(),
		BrowserAnimationsModule,
		MatButtonModule,
		MatTooltipModule,
		MatDialogModule,
		DragDropModule,
		TsrMaterialModule,
		CKEditorModule
	],
	providers: [SplitComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
