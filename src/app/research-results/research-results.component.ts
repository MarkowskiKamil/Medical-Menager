import { Component, AfterViewInit, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { Research } from '../data/definitions';
import { Router } from '@angular/router';
import { research } from '../data/research';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-research-results',
  templateUrl: './research-results.component.html',
  styleUrls: ['./research-results.component.css']
})
export class ResearchResultsComponent implements OnInit, AfterViewInit{
  public displayedColumns: string[] = [
    'id',
    'type',
    'status',
    'result',
    'patient',
    'project',

  ];

  public research: Array<Research> = research;
  public dataSource = new MatTableDataSource(research);
  public id = '';
  public type = '';
  public status = '';
  public result = '';
  public patient = '';
  public project = '';

  constructor(private _router: Router, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
  }
  
  public goToSummary() {
    this._router.navigate(['/summary'])
  }
  public goToPatientsManagement() {
    this._router.navigate(['/patients-management'])
  }
  public goToProjectsManagement() {
    this._router.navigate(['/projects-management'])
  }
  public goToResearchCommisioning() {
    this._router.navigate(['/research-commisioning'])
  }
  public goToResearchResults() {
    this._router.navigate(['/research-results'])
  }

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
 

}
