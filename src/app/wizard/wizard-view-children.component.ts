import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { StepComponent } from './components/step/step.component';

@Component({
  selector: 'wizard-view-children',
  template: `
    <h3>@ViewChildren()</h3>
    <button (click)="onAddStep()">Add</button>
    <step *ngFor="let i of allSteps">
      <div>Step #{{ i }}</div>
    </step>
  `,
})
export class WizardViewChildrenComponent implements AfterViewInit {
  allSteps: number[] = [1, 2, 3, 4];
  stepsCount: number;

  @ViewChildren(StepComponent) steps: QueryList<StepComponent>; // List all of the steps

  ngAfterViewInit() {
    // We can subscribe to the changes that are made to the QueryList
    console.log('Query list of steps in View', this.steps.toArray());
    this.steps.changes.subscribe(() => {
      this.stepsCount = this.steps.length;
      console.log('Steps count:', this.steps.length);
    });
  }

  onAddStep = () => {
    const lastItem = this.steps.length + 1;
    this.allSteps.push(lastItem);
  };
}

/* INFO:
      The problem of this case is that it's not flexible.
      We need to pass elements all of the same type StepComponent,
      otherwise the steps will not get listed to the QueryList
*/
