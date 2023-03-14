import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule} from "@angular/forms";

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
    ResearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'summary', component: SummaryComponent },
      { path: 'patients-management', component: PatientsManagementComponent },
      { path: 'projects-management', component: ProjectsManagementComponent },
      { path: 'research-commisioning', component: ResearchCommissioningComponent },
      { path: 'research-results', component: ResearchResultsComponent },
      { path: "**", redirectTo: 'summary'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
