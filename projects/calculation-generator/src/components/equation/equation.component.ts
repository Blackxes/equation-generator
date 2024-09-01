/**
 * @Author Alexander Bassov Sun Sep 01 2024
 * @Email blackxes.dev@gmail.com
 */

import { Component, input } from "@angular/core";
import { EquationGenerationService } from "../equation-generator/equation-generator.service";
import { IEquation } from "../equation-generator/equation-generator.types";

@Component({
  selector: ".app-equation",
  standalone: true,
  templateUrl: "equation.component.html",
  styleUrl: "equation.component.scss",
})
export class EquationComponent {
  public equations = input.required<IEquation[]>();

  constructor(public equationService: EquationGenerationService) {}
}
