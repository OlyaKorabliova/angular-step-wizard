import { Component, forwardRef } from '@angular/core';
import { WizardStepService } from '../wizard-step.service';

@Component({
  selector: 'step-red',
  template: '<div class="step-red">Red step</div>',
  styleUrls: ['./step-red.component.scss'],
  providers: [
    {
      provide: WizardStepService,
      useExisting: forwardRef(() => StepRedComponent),
      // forwardRef capture the early access inside of a closure
      // and evaluates the closure after the class has been defined
    },
  ],
})
export class StepRedComponent implements WizardStepService {
  show() {
    console.log('show RED');
  }

  hide() {
    console.log('hide RED');
  }
}
