import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from '../../core/services';
import { SystemService } from '../../core/services/system/system';

interface IconDictionary {
	[iconIndex: string]: Icon;
}

interface Icon {
	src: string;
	alternativeSrc?: string;
}

@Component({
	selector: 'app-title-bar',
	templateUrl: './title-bar.component.html',
	styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

	public icons: IconDictionary = {
		maximized: { src: '../../../assets/icons/tittlebar/normalize.svg' },
		normalized: { src: '../../../assets/icons/tittlebar/maximize.svg' },
		defaultUserImage: { src: '../../../assets/icons/tittlebar/default-user-image.svg' },
		test: { src: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2f/2f8e1dfbbb63ed758d8216b8fc05228ffc7662a0_full.jpg' }
	};
	private window: Electron.BrowserWindow;
	public maximizeIcon: Icon = this.icons['normalized'];
	public username: string = SystemService.systemUser;

	constructor(public electron: ElectronService, private _ngzone: NgZone) {
		this.window = electron.remote.getCurrentWindow();
	}

	ngOnInit() {
		this.window.on('unmaximize', () => {
			this._ngzone.run(() => {
				this.maximizeIcon = this.icons['normalized'];
			});
		});
		this.window.on('maximize', () => {
			this._ngzone.run(() => {
				this.maximizeIcon = this.icons['maximized'];
			});
		});
	}

	public minimize() {
		this.window.minimize();
	}

	public maximize() {
		if (this.window.isMaximized()) this.window.unmaximize();
		else this.window.maximize();
		
	}

	public close() {
		this.window.close();
	}

}
