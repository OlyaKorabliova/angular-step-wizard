import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { StepComponent } from './components/step/step.component';

@Component({
  selector: 'wizard-view-child',
  template: `
    <h3>@ViewChild()</h3>
    <step>This step is ONE - access element</step>
    <div #stepTwo>Hello on step TWO - access reference</div>
  `,
})
export class WizardViewChildComponent implements AfterViewInit {
  @ViewChild(StepComponent) stepChild: StepComponent | null;
  @ViewChild('stepTwo') stepTwoChild: ElementRef;

  constructor() {
    // View hasn't been created yet, so the stepChild is undefined
    console.log('------------ Constructor ------------');
    console.log('stepOne component', this.stepChild);
    console.log('stepTwo ref', this.stepTwoChild);
  }

  ngAfterViewInit() {
    // Runs after the view is ready, so the stepChild will be defined
    console.log('------------ NgAfterViewInit ------------');
    console.log('stepOne component', this.stepChild);
    console.log('stepTwo ref', this.stepTwoChild);
  }
}
