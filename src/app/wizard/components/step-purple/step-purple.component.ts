import { Component, forwardRef } from '@angular/core';
import { WizardStepService } from '../wizard-step.service';

@Component({
  selector: 'step-purple',
  template: '<div class="step-purple">Purple step</div>',
  styleUrls: ['./step-purple.component.scss'],
  providers: [
    {
      provide: WizardStepService,
      useExisting: forwardRef(() => StepPurpleComponent),
      // forwardRef capture the early access inside of a closure
      // and evaluates the closure after the class has been defined
    },
  ],
})
export class StepPurpleComponent implements WizardStepService {
  show() {
    console.log('show PURPLE');
  }

  hide() {
    console.log('hide PURPLE');
  }
}
