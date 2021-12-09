import { Component, forwardRef } from '@angular/core';
import { WizardStepService } from '../wizard-step.service';

@Component({
  selector: 'step-green',
  template: '<div class="step-green">Green step</div>',
  styleUrls: ['./step-green.component.scss'],
  providers: [
    {
      provide: WizardStepService,
      useExisting: forwardRef(() => StepGreenComponent),
      // forwardRef capture the early access inside of a closure
      // and evaluates the closure after the class has been defined
    },
  ],
})
export class StepGreenComponent implements WizardStepService {
  show() {
    console.log('show GREEN');
  }

  hide() {
    console.log('hide GREEN');
  }
}
