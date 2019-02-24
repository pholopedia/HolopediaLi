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

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'social',  component: SocialComponent },
  { path: 'projects/holofactom',  component: HolofactomComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'projects/:project',  component: ProjectsComponent },
  { path: 'games',  component: GamesComponent },
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
