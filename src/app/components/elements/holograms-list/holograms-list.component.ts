import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hologram } from 'src/app/services/holograms/hologram.model';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { HologramsService } from 'src/app/services/holograms/holograms.service';
import { ItemsService } from 'src/app/services/firestore/item.service';

@Component({
  selector: 'app-holograms-list',
  templateUrl: './holograms-list.component.html',
  styleUrls: ['./holograms-list.component.scss']
})
export class HologramsListComponent implements OnInit {

  @Input() isInSidebar: boolean;
  @Output() toggleFullscreen:EventEmitter<boolean> = new EventEmitter(true);
  @Input() technology: string;

  selectedHologram: Hologram;
  holograms: any[];
  filteredHolograms: Hologram[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public hologramsService: HologramsService,
    public itemService: ItemsService,

  ) { }

  ngOnInit() {

    this.itemService.getItemsByAttribute("holograms", "technology", this.technology).subscribe(holograms => {
      this.holograms = holograms;
      console.log({holograms})
    });

    // this.hologramsService.get().subscribe(holograms => {
    //   this.holograms = holograms;
    //   this.filteredHolograms = holograms;

    //   this.route.queryParamMap
    //     .subscribe(params => {
    //       this.filteredHolograms = this.holograms.filter(hologram => {
    //         for (var keyInd in params.keys) {
    //           let key = params.keys[keyInd];
    //           if (hologram[key] != params["params"][key]) {
    //             return false;
    //           }
    //         }
    //         return true;
    //       });
    //     });
    // });

  }

  selectHologram(hologram: Hologram) {
    this.selectedHologram = hologram;
    this.router.navigate(['/hologram/' + hologram.id], { queryParamsHandling: "preserve" });
  }

  showFullscreen() {
    this.hologramsService.isFullscreen = true;
    this.toggleFullscreen.emit(true);
  }

  enableHover(hologram) {
    hologram.hovered = true;
  }

}
