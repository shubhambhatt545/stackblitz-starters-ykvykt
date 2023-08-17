import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'emp-modal',
  templateUrl: './emp-modal.component.html',
  styleUrls: ['./emp-modal.component.css'],
})
export class EmpModalComponent {
  @ViewChild(ModalDirective) modal?: ModalDirective;
  @Input() largeModal!: boolean;
  @Input() title!: string;

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  @Input() prmyBtn = null;
  @Input() secdBtn = null;

  @Input() disablePrmyBtn = null;
  @Input() disableSecdBtn = null;
  @Input() hideCloseBtn = false;
  @Input() showModal() {
    this.modal?.show();
  }
  hideModal() {
    this.modal?.hide();
  }
  cancelClick(event: any) {
    this.modal?.hide();
    this.cancel?.emit({ event });
  }
  saveClick(event: any) {
    this.modal?.hide();
    this.save?.emit({ event });
  }
}
