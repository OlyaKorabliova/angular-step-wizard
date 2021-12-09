import { Injectable } from '@angular/core';

// All interaction between the wizard and its steps uses this interface
@Injectable()
export abstract class WizardStepService {
  abstract show(): void;
  abstract hide(): void;
}
