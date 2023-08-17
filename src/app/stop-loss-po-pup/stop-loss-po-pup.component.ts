import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'popup-stop-loss',
  templateUrl: './stop-loss-po-pup.component.html',
  styleUrls: ['./stop-loss-po-pup.component.css'],
})
export class StopLossPoPupComponent {
  constructor() {}

  @Input() dvbReportingIndVal!: string;
  @Input() dvbBillingIndVal!: string;
  @Input() diversifiedBenefitsModal?: any;
  @Input() serverdvbReportingIndVal!: string;
  @Input() serverdvbBillingIndVal!: string;
  @Input() diversifiedBenefitsIndicatorVal!: string;
  @Output() output = new EventEmitter();

  dvbReportingChange(event: any) {
    if (event.target.value === 'Reporting') {
      this.serverdvbBillingIndVal = 'Y';
      this.dvbReportingIndVal = 'Y';
      this.dvbBillingIndVal = 'N';
    }

    this.diversifiedBenefitsIndicatorVal =
      this.serverdvbReportingIndVal === 'Y' ||
      this.serverdvbBillingIndVal === 'Y'
        ? 'Y'
        : 'N';
    this.output.emit('dvbReportingChange');
    console.log('pop dvbReportingIndVal' + this.dvbReportingIndVal);
    console.log('pop dvbBillingIndVal' + this.dvbBillingIndVal);
  }
  dvbBillingChange(event: any) {
    if (event.target.value === 'Billing') {
      this.serverdvbReportingIndVal = 'Y';
      this.dvbBillingIndVal = 'Y';
      this.dvbReportingIndVal = 'N';
    }

    this.diversifiedBenefitsIndicatorVal =
      this.serverdvbReportingIndVal === 'Y' ||
      this.serverdvbBillingIndVal === 'Y'
        ? 'Y'
        : 'N';
    this.output.emit('dvbBillingChange');
    console.log('pop dvbBillingIndVal' + this.dvbBillingIndVal);
    console.log('pop dvbReportingIndVal' + this.dvbReportingIndVal);
  }
}
