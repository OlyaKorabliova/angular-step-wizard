import { Component } from '@angular/core';

@Component({
  selector: 'step',
  template: '<div class="step"><ng-content></ng-content></div>',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent {}
