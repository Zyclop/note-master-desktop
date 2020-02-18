import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from '../../core/services';

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

	private window: Electron.BrowserWindow;

	public icons: IconDictionary = {
		maximized: { src: '../../../assets/icons/tittlebar/normalize.svg' },
		normalized: { src: '../../../assets/icons/tittlebar/maximize.svg' }
	};

	public maximizeIcon: Icon = this.icons['normalized'];

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
