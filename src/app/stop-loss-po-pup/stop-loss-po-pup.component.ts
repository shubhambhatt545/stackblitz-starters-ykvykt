import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'popup-stop-loss',
  templateUrl: './stop-loss-po-pup.component.html',
  styleUrls: ['./stop-loss-po-pup.component.css'],
})
export class StopLossPoPupComponent {
  constructor() {}

  @Input() dvbReportingIndVal?: String;
  @Input() dvbBillingIndVal?: String;
  @Input() diversifiedBenefitsModal?: any;
  @Input() serverdvbReportingIndVal?: String;
  @Input() serverdvbBillingIndVal?: String;
  @Output() output = new EventEmitter();

  dvbReportingChange(event: any) {
    this.serverdvbReportingIndVal = 'Y';
    this.serverdvbBillingIndVal = 'N';
    this.dvbReportingIndVal = 'Y';
    this.dvbBillingIndVal = 'N';

    this.output.emit('dvbReportingChange');
    console.log('pop dvbReportingIndVal' + this.dvbReportingIndVal);
    console.log('pop dvbBillingIndVal' + this.dvbBillingIndVal);
  }
  dvbBillingChange(event: any) {
    this.serverdvbBillingIndVal = 'Y';
    this.serverdvbReportingIndVal = 'N';
    this.dvbBillingIndVal = 'Y';
    this.dvbReportingIndVal = 'N';

    this.output.emit('dvbBillingChange');
    console.log('pop dvbBillingIndVal' + this.dvbBillingIndVal);
    console.log('pop dvbReportingIndVal' + this.dvbReportingIndVal);
  }
}
