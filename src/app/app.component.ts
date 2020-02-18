import { Component, OnInit } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(
		public electronService: ElectronService,
		private translate: TranslateService,
	) {
		translate.setDefaultLang('en');
		console.log('AppConfig', AppConfig);

		if (electronService.isElectron) {
			console.log(process.env);
			console.log('Mode electron');
			console.log('Electron ipcRenderer', electronService.ipcRenderer);
			console.log('NodeJS childProcess', electronService.childProcess);
		} else {
			console.log('Mode web');
		}
	}
	ngOnInit() {
		var remote = require('electron').remote; 

		document.getElementById("min-btn").addEventListener("click", function (e) {
			var window = remote.getCurrentWindow();
			window.minimize();
		});
		
		document.getElementById("max-btn").addEventListener("click", function (e) {
			var window = remote.getCurrentWindow();
			window.maximize();
		});
		
		document.getElementById("close-btn").addEventListener("click", function (e) {
			var window = remote.getCurrentWindow();
			window.close();
		});
	}
}
