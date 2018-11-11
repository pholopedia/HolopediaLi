import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CoinComponent } from './components/elements/coin/coin.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { SocialComponent } from './components/pages/social/social.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { GamesComponent } from './components/pages/games/games.component';
import { FacebookModule } from 'ngx-facebook';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { EmbedVideo } from 'ngx-embed-video/dist';
import { ProjectStarComponent } from './components/elements/project-star/project-star.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavigationComponent,
    CoinComponent,
    HomeComponent,
    ContactComponent,
    SocialComponent,
    ProjectsComponent,
    GamesComponent,
    ProjectStarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    EmbedVideo.forRoot(),
    FacebookModule.forRoot(),
    NgxTwitterTimelineModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
