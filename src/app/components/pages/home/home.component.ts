import { Component, OnInit } from '@angular/core';
import { HologramsService } from '../../../services/holograms/holograms.service';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projectsNames: string[];
  sourcesNames: string[];

  constructor(
    public hologramsService: HologramsService,
    private projectsService: ProjectsService,
    ) {
  }

  ngOnInit() {
    this.projectsNames = this.projectsService.MasterProjectsNames;
    this.sourcesNames = this.hologramsService.Sources;
  }

}
