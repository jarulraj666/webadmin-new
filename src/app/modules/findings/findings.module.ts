import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { FindingPageComponent } from "./pages/finding-page/finding-page.component";
import { FindingsComponent } from "./components/findings/findings.component";
import { CoreModule } from "../core/core.module";
import { FindingFieldComponent } from './components/finding-field/finding-field.component';

const routes: Routes = [{ path: "", component: FindingPageComponent }];

@NgModule({
  declarations: [FindingPageComponent, FindingsComponent, FindingFieldComponent],
  imports: [CoreModule, RouterModule.forChild(routes), CommonModule]
})
export class FindingsModule {}
