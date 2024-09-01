import { Component, input } from "@angular/core";
import { EquationGenerationService } from "../equation-generator/equation-generator.service";
import { IEquation } from "../equation-generator/equation-generator.types";

@Component({
  selector: "",
  standalone: true,
  templateUrl: "equation-edit-form.component.html",
})
export class EquationEditForm {
  public equation = input.required<IEquation>();

  constructor(public equationService: EquationGenerationService) {}
}
