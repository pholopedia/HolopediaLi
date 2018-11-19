import { Component, OnInit } from '@angular/core';
import { Hologram } from '../../../services/holograms/hologram.model';
import { HologramsService } from '../../../services/holograms/holograms.service';
import { Router, ActivatedRoute, RoutesRecognized, Params } from '@angular/router';

@Component({
  selector: 'app-add-hologram',
  templateUrl: './add-hologram.component.html',
  styleUrls: ['./add-hologram.component.scss']
})
export class AddHologramComponent implements OnInit {
  
  hologramUrl: string;
  projectName: string;

  constructor(
    private route: ActivatedRoute,
    public hologramsService: HologramsService,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.projectName = params["params"]["project"];
    });
  }
  addHologram() {
    var item: Hologram = {
      id: "sampleid",
      url: this.hologramUrl.replace("watch?v=", "embed/"),
      title: "sample title",
      source: "YouTube",
      project: this.projectName,
    }

    this.hologramsService.add(item).then((doc: Hologram) => {
        item.id = doc.id;
        this.hologramsService.update(item);
    });
  }
}
