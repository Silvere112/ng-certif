import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameResultsComponent} from './game-results/game-results.component';
import {GameStatsComponent} from './game-stats/game-stats.component';
import {DeleteConfirmationComponent} from "./delete-confirmation/delete-confirmation.component";

const routes: Routes = [{
  path: "delete/:id",
  component: DeleteConfirmationComponent,
  outlet: 'popup'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PopupRoutingModule { }
