import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StepGreenComponent } from './components/step-green/step-green.component';
import { StepPurpleComponent } from './components/step-purple/step-purple.component';
import { StepRedComponent } from './components/step-red/step-red.component';

import { StepComponent } from './components/step/step.component';
import { WizardContentChildrenDirectiveServiceComponent } from './wizard-content-children-directive-service.component';
import { WizardContentChildrenDirectiveComponent } from './wizard-content-children-directive.component';
import { WizardContentChildrenComponent } from './wizard-content-children.component';
import { WizardStepDirective } from './wizard-step.directive';
import { WizardViewChildComponent } from './wizard-view-child.component';
import { WizardViewChildrenComponent } from './wizard-view-children.component';

@NgModule({
  declarations: [
    WizardViewChildComponent,
    WizardViewChildrenComponent,
    WizardContentChildrenComponent,
    WizardContentChildrenDirectiveComponent,
    WizardContentChildrenDirectiveServiceComponent,
    StepComponent,
    StepRedComponent,
    StepPurpleComponent,
    StepGreenComponent,
    WizardStepDirective,
  ],
  imports: [BrowserModule],
  exports: [
    WizardViewChildComponent,
    WizardViewChildrenComponent,
    WizardContentChildrenComponent,
    WizardContentChildrenDirectiveComponent,
    WizardContentChildrenDirectiveServiceComponent,
    StepComponent,
    StepRedComponent,
    StepPurpleComponent,
    StepGreenComponent,
    WizardStepDirective,
  ],
})
export class WizardModule {}
