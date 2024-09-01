import { Component, OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ButtonComponent } from "@blackxes/angular-shared-ui";
import { EquationGenerationService } from "../equation-generator/equation-generator.service";
import { EquationComponent } from "../equation/equation.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, EquationComponent],
  templateUrl: "app.component.html",
  styleUrl: "app.component.scss",
})
export class AppComponent implements OnInit {
  public title = "calculation-generator";
  public isGenerating = signal<boolean>(false);

  constructor(public equationService: EquationGenerationService) {}

  ngOnInit() {
    this.generateEquations();
  }

  public async generateEquations() {
    this.isGenerating.set(true);
    await this.equationService.generate();
    this.isGenerating.set(false);
  }
}
