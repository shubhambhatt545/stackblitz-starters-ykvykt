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

  diversifiedBenefitsIndicatorVal!: string;
  dvbReportingIndVal!: string;
  dvbBillingIndVal!: string;

  serverdvbReportingIndVal = 'Y';
  serverdvbBillingIndVal = 'N';

  resetDiversifiedBenefitsCheckbox(e: any) {
    this.diversifiedBenefitsIndicatorVal =
      this.serverdvbReportingIndVal === 'Y' ||
      this.serverdvbBillingIndVal === 'Y'
        ? 'Y'
        : 'N';
    this.changeRef.detectChanges();
  }

  diversifiedBenefitsCheckbox(e: any, i: any) {
    this.diversifiedBenefitsIndicatorVal =
      this.diversifiedBenefitsIndicatorVal === 'Y' ? 'Y' : 'N';
    if (this.diversifiedBenefitsIndicatorVal === 'Y') {
      this.diversifiedBenefitsPopUp(e);
    } else {
      this.dvbReportingIndVal = 'N';
      this.dvbBillingIndVal = 'N';
      this.serverdvbReportingIndVal = 'N';
      this.serverdvbBillingIndVal = 'N';
      this.diversifiedBenefitsPopUp(e);
    }
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
