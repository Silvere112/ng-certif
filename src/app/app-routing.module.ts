import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameResultsComponent} from './game-results/game-results.component';
import {GameStatsComponent} from './game-stats/game-stats.component';

const routes: Routes = [
  {
    path: "results/:teamAbbr/:nbDays", component: GameResultsComponent
  },
  {
    path: "", component: GameStatsComponent
  },
  {
    path: "**", redirectTo: ""
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
