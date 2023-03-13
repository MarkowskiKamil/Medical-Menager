import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { PatientsManagementComponent } from './patients-management/patients-management.component';
import { ProjectsManagementComponent } from './projects-management/projects-management.component';
import { ResearchCommissioningComponent } from './research-commissioning/research-commissioning.component';
import { ResearchResultsComponent } from './research-results/research-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    PatientsManagementComponent,
    ProjectsManagementComponent,
    ResearchCommissioningComponent,
    ResearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
