import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { SocialComponent } from './components/pages/social/social.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GamesComponent } from './components/pages/games/games.component';
import { HologramComponent } from './components/pages/hologram/hologram.component';
import { HolofactomComponent } from './components/elements/holofactom/holofactom.component';
import { PrincessesComponent } from './components/pages/games/princesses/princesses.component';
import { Game2048Component } from './components/pages/games/game2048/game2048.component';
import { Game2048hexComponent } from './components/pages/games/game2048hex/game2048hex.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'social',  component: SocialComponent },
  { path: 'projects/holofactom',  component: HolofactomComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'projects/:project',  component: ProjectsComponent },
  { path: 'games',  component: GamesComponent },
  { path: 'games/princesses',  component: PrincessesComponent },
  { path: 'games/2048',  component: Game2048Component },
  { path: 'games/2048_hex',  component: Game2048hexComponent },
  { path: 'hologram',  component: HologramComponent },
  { path: 'hologram/:holoid',  component: HologramComponent },
  // individual holo master coin
  // Default
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
