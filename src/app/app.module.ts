import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, CoreModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CoinComponent } from './components/elements/coin/coin.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
// import { SocialComponent } from './components/pages/social/social.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { GamesComponent } from './components/pages/games/games.component';
// import { FacebookModule } from 'ngx-facebook';
// import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
// import { EmbedVideo } from 'ngx-embed-video/dist';
import { ProjectStarComponent } from './components/elements/project-star/project-star.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { SafePipe } from './pipes/safe.pipe';
import { HologramComponent } from './components/pages/hologram/hologram.component';
import { CategoriesComponent } from './components/elements/categories/categories.component';
import { HologramsListComponent } from './components/elements/holograms-list/holograms-list.component';
import { AddHologramComponent } from './components/elements/add-hologram/add-hologram.component';
import { HolofactomComponent } from './components/elements/holofactom/holofactom.component';
import { PrincessesComponent } from './components/pages/games/princesses/princesses.component';
import { Game2048Component } from './components/pages/games/game2048/game2048.component';
import { Game2048hexComponent } from './components/pages/games/game2048hex/game2048hex.component';
import { Game3d2048Component } from './components/pages/games/game3d2048/game3d2048.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavigationComponent,
    CoinComponent,
    HomeComponent,
    ContactComponent,
    // SocialComponent,
    ProjectsComponent,
    GamesComponent,
    ProjectStarComponent,
    SafePipe,
    HologramComponent,
    CategoriesComponent,
    HologramsListComponent,
    AddHologramComponent,
    HolofactomComponent,
    PrincessesComponent,
    Game2048Component,
    Game2048hexComponent,
    Game3d2048Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    // EmbedVideo.forRoot(),
    // FacebookModule.forRoot(),
    // NgxTwitterTimelineModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    // CoreModule,
  ],
  providers: [AngularFireAuth, AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
