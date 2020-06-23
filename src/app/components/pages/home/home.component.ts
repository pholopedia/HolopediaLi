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
  categories;
  technologies;

  constructor(
    public hologramsService: HologramsService,
    private projectsService: ProjectsService,
    ) {
  }

  ngOnInit() {
    this.projectsNames = this.projectsService.MasterProjectsNames;
    this.sourcesNames = this.hologramsService.Sources;

    this.categories = [
      { name: "SPA Massage", imageFile: "massage_stones.png" },
      { name: "Treatments", imageFile: "biofeedback.png" },
      { name: "Knowledge", imageFile: "knowledge.png" },
      { name: "Zuberec", imageFile: "zuberec.jpg" },
    ]

    this.technologies = [
      { name: "Holopedia 3D LED fans", imageFile: "holopedia_3D_LED_fans.png" },
      { name: "Holopedia VR", imageFile: "holopedia_vr.png" },
      { name: "Holopedia Pyramid", imageFile: "holopedia_pyramid.png" },
      { name: "Holopedia Looking Glass", imageFile: "holopedia_looking_glass.png" },
      { name: "Holopedia HoloTube", imageFile: "holopedia_holotube.png" },
    ]
  }

}
