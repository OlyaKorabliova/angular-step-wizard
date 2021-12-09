import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { WizardStepService } from './components/wizard-step.service';
import { WizardStepDirective } from './wizard-step.directive';

@Component({
  selector: 'wizard-content-children-directive-service',
  template: `
    <h3>@ContentChildren() using WizardStepDirective and WizardStepService</h3>
    <ng-content></ng-content>
  `,
})
export class WizardContentChildrenDirectiveServiceComponent
  implements AfterContentInit
{
  // We ask for the inject value of WizardStepService instead of the element
  // Use DI to get the WizardStepService for each step
  @ContentChildren(WizardStepDirective, { read: WizardStepService })
  steps: QueryList<WizardStepService>;

  ngAfterContentInit() {
    // ngAfterContentInit Signals when the content queries are available
    console.log('------------ ngAfterContentInit ------------');
    console.log('Injected content values', this.steps.toArray());
  }
}
