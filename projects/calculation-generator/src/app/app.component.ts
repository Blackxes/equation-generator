import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@blackxes/angular-shared-ui';
import { EquationGeneratorService } from '../equation-generator/equation-generator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public title = 'calculation-generator';
  public isGenerating = signal<boolean>(false);

  constructor(public equationService: EquationGeneratorService) {}

  ngOnInit() {
    this.generateEquations();
  }

  public async generateEquations() {
    this.isGenerating.set(true);
    await this.equationService.generate();
    this.isGenerating.set(false);
  }
}
