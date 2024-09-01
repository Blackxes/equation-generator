/**
 * @Author Alexander Bassov Sun Sep 01 2024
 * @Email blackxes.dev@gmail.com
 */

import { JsonPipe } from "@angular/common";
import { Component, input } from "@angular/core";
import { IEquation } from "../equation-generator/equation-generator.types";

@Component({
  selector: ".app-equation",
  standalone: true,
  imports: [JsonPipe],
  templateUrl: "equation.component.html",
  styleUrl: "equation.component.scss",
})
export class EquationComponent {
  public equation = input.required<IEquation>();

  constructor() {}
}
