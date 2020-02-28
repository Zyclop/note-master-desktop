import { Component, Input } from '@angular/core';

@Component({
  selector: 'tsr-drop-down-header',
  template: `
  <div class="collapsible" (click)="this.toggle()">
      <i *ngIf="this.useIcon" class="material-icons" [class.active]="this.isActive">arrow_drop_down</i>
      <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./tsr-drop-down-header.component.scss']
})
export class TsrDropDownHeaderComponent {

  isActive: boolean = false;
  @Input('dropIcon') useIcon: boolean = true;

  constructor() { }

  toggle() {
    if (!this.useIcon) return;
    this.isActive = !this.isActive;
  }

}
