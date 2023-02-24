import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import {FormsModule} from '@angular/forms';
import { GameResultsComponent } from './game-results/game-results.component';
import { GameStatsComponent } from './game-stats/game-stats.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import {PopupRoutingModule} from "./popup-routing.module";
import { PopupContainerComponent } from './popup-container/popup-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamStatsComponent,
    GameResultsComponent,
    GameStatsComponent,
    SelectTeamComponent,
    DeleteConfirmationComponent,
    PopupContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopupRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
