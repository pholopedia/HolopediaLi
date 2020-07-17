import { Component, OnInit, Input } from '@angular/core';
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
  @Input() category: string;
  @Input() technology: string;

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
      id: "",
      url: this.getYoutubeId(this.hologramUrl),
      title: "sample title",
      source: "YouTube",
      category: this.category,
      technology: this.technology
    }

    this.hologramsService.add(item).then((doc: Hologram) => {
        item.id = doc.id;
        this.hologramsService.update(item);
    });

    this.hologramUrl = "";
  }

  getYoutubeId(url) {
    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[1].length==11)? match[1] : false;
  }
}