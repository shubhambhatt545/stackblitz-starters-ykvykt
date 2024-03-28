import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'my-stop-loss-app',
  templateUrl: './stop-loss.component.html',
  styleUrls: ['./stop-loss.component.css'],
})
export class StopLossComponent implements OnInit {
  multiSelectForm!: FormGroup;
  select: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.multiSelectForm = this.fb.group({
      selectedOptions: this.fb.array([], Validators.required),
    });
  }

  options: Option[] = [
    { value: 'abc', label: 'Option 1' },
    { value: 'xyz', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
  ];
  get selectedOptions(): FormArray {
    return this.multiSelectForm.get('selectedOptions') as FormArray;
  }
  selecttoggel() {
    if (this.select == true) {
      this.select = false;
    } else {
      this.select = true;
    }
  }

  onSelect(event: any) {
    console.log(event.target.selectedOptions);
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option: any) => option.value
    );
    selectedValues.forEach((value) => {
      if (!this.selectedOptions.value.includes(value)) {
        this.selectedOptions.push(this.fb.control(value));
      }
    });
  }
  search(name: string) {}

  removeOption() {
    console.log(this.selectedOptions.length);
    while (this.selectedOptions.length) {
      this.selectedOptions.removeAt(0);
    }
  }

  // isSelected(optionId: string): boolean {
  //   let s = this.selectedOptions.value.includes(optionId);
  //   console.log(s + 'selected');
  //   return s;
  // }
  // toggleSelection(event: any) {

  //   const index = this.selectedOptions.controls.findIndex(
  //     (x) => x.value === optionId
  //   );
  //   console.log(index + ' index');
  //   if (index >= 0) {
  //     this.selectedOptions.removeAt(index);
  //   } else {
  //     console.log('inside else block');
  //     this.selectedOptions.push(this.fb.control(optionId));
  //   }
  // }

  // addOption(target: HTMLSelectElement) {
  //   console.log('inside');
  //   // const control = new FormControl(item);
  //   // this.selectedOptions.push(control);
  //   const selectedValues = Array.from(
  //     target.selectedOptions,
  //     (option: HTMLOptionElement) => +option.value
  //   );
  //   this.selectedOptions.clear();
  //   selectedValues.forEach((value) => {
  //     this.selectedOptions.push(this.fb.control(value));
  //   });
  // }

  // removeOption(index: number) {
  //   this.selectedOptions.removeAt(index);
  // }

  // onSubmit() {
  //   console.log(this.multiSelectForm.value); // Access selected options
  // }

  showValue(ss: any): string {
    let s = this.options.find((opt) => opt.value === ss.value)?.label;

    // for (let option of this.selectedOptions.controls) {
    //   s = s + this.options.find((opt) => opt.value === option.value)?.label;
    // }
    // console.log(s + 'name');
    return s ? s : '';
  }


  



  <span
        class="input-group-text"
        (click)="removeOption()"
        id="basic-addon1"
        >X</span
      >


}
