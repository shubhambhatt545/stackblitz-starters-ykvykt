import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { EmpModalComponent } from '../emp-modal/emp-modal.component';

@Component({
  selector: 'my-stop-loss-app',
  templateUrl: './stop-loss.component.html',
  styleUrls: ['./stop-loss.component.css'],
})
export class StopLossComponent {
  constructor(private changeRef: ChangeDetectorRef) {}
  @ViewChild('diversifiedBenefitsModal')
  public diversifiedBenefitsModal!: EmpModalComponent;

  addedAccountList = [
    {
      accountId: '123',
      dvbFlag: 'Y',
    },
  ];

  diversifiedBenefitsIndicatorVal!: String;
  dvbReportingIndVal!: String;
  dvbBillingIndVal!: String;

  serverdvbReportingIndVal = 'Y';
  serverdvbBillingIndVal = 'N';

  resetDiversifiedBenefitsCheckbox(e: any) {
    console.log(this.serverdvbReportingIndVal + 'serverdvbReportingIndVal');

    console.log(this.serverdvbBillingIndVal + 'serverdvbBillingIndVal');

    this.diversifiedBenefitsIndicatorVal =
      this.serverdvbReportingIndVal === 'Y' ||
      this.serverdvbBillingIndVal === 'Y'
        ? 'Y'
        : 'N';

    console.log(
      this.diversifiedBenefitsIndicatorVal + 'diversifiedBenefitsIndicatorVal'
    );
    this.changeRef.detectChanges();
  }

  diversifiedBenefitsCheckbox(e: any, i: any) {
    if (this.diversifiedBenefitsIndicatorVal === 'Y') {
      this.diversifiedBenefitsIndicatorVal = 'N';
      this.dvbReportingIndVal = 'N';
      this.dvbBillingIndVal = 'N';
      this.serverdvbReportingIndVal = 'N';
      this.serverdvbBillingIndVal = 'N';
    } else {
      this.dvbReportingIndVal = 'N';
      this.dvbBillingIndVal = 'N';
      this.serverdvbReportingIndVal = 'N';
      this.serverdvbBillingIndVal = 'N';
      this.diversifiedBenefitsPopUp(e);
    }
    console.log(
      this.diversifiedBenefitsIndicatorVal + 'diversifiedBenefitsIndicatorVal'
    );
    console.log('dvbBillingIndVal' + this.dvbBillingIndVal);
    console.log('dvbReportingIndVal' + this.dvbReportingIndVal);
  }
  diversifiedBenefitsPopUp(e: any) {
    if (this.serverdvbReportingIndVal === 'Y') {
      this.dvbReportingIndVal = 'Y';
      this.dvbBillingIndVal = 'N';
    } else if (this.serverdvbBillingIndVal === 'Y') {
      this.dvbReportingIndVal = 'N';
      this.dvbBillingIndVal = 'Y';
    }

    this.diversifiedBenefitsModal.showModal();
  }

  resetDVB(e: any) {
    this.changeRef.detectChanges();
  }
}
