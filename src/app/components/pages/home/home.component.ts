import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HologramsService } from '../../../services/holograms/holograms.service';
import { Hologram } from '../../../services/holograms/hologram.model';
// import { DomSanitizationService } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  holograms: Hologram[];
  hologramUrl: string;

  constructor(
    db: AngularFirestore,
    public hologramsService: HologramsService,
    protected sanitizer: DomSanitizer,
  ) {

  }

  ngOnInit() {

    this.hologramsService.get().subscribe(holograms => {
      this.holograms = holograms;
    });

  }

  addHologram() {
    var item: Hologram = {
      id: "sampleid",
      url: this.hologramUrl.replace("watch?v=", "embed/"),
      title: "sample title",
      category: "youtube",
    }

    this.hologramsService.add(item).then((doc: Hologram) => {
        item.id = doc.id;
        this.hologramsService.update(item);
    });
  }


}
