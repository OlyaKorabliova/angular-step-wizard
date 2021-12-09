import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { StepComponent } from './components/step/step.component';

@Component({
  selector: 'wizard-content-children',
  template: `
    <h3>@ContentChildren() - all steps are of one type</h3>
    <ng-content></ng-content>
  `,
})
export class WizardContentChildrenComponent implements AfterContentInit {
  @ContentChildren(StepComponent) steps: QueryList<StepComponent>;

  ngAfterContentInit() {
    // ngAfterContentInit Signals when the content queries are available
    console.log('------------ ngAfterContentInit ------------');
    console.log('Content steps', this.steps.toArray());
  }
}
