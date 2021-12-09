import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { WizardStepDirective } from './wizard-step.directive';

@Component({
  selector: 'wizard-content-children-directive',
  template: `
    <h3>@ContentChildren() using WizardStepDirective</h3>
    <ng-content></ng-content>
  `,
})
export class WizardContentChildrenDirectiveComponent
  implements AfterContentInit
{
  // Search using directive, but ask for a ref to the element instead
  // otherwise (withour { read }), we get directive instances
  @ContentChildren(WizardStepDirective, { read: ElementRef })
  steps: QueryList<ElementRef>;

  ngAfterContentInit() {
    // ngAfterContentInit Signals when the content queries are available
    console.log('------------ ngAfterContentInit ------------');
    console.log("Content elements' refs", this.steps.toArray());
  }
}
