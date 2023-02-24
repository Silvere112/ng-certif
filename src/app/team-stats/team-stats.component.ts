import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap} from 'rxjs';
import {NbaService} from '../nba.service';
import {Game, Stats, Team} from '../data.models';
import {Router} from "@angular/router";

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent {

  @Input()
  team!: Team;

  availableOptions = [6, 12, 20]
  lastResultQuery = new BehaviorSubject<number>(this.availableOptions[0])


  stats = this.lastResultQuery.pipe(
    switchMap(
      (numberOfDay: number) => this.nbaService.getLastResults(this.team, numberOfDay)
    ),
    map(
      (it) => this.nbaService.getStatsFromGames(it, this.team)
    )
  );


  constructor(private nbaService: NbaService, private router: Router) {
  }


  deleteClicked() {
    this.router.navigate([{outlets: {popup: ['delete', this.team.id]}}])
  }

  onPeriodChange(duration: string) {
    this.lastResultQuery.next(Number.parseInt(duration))
  }
}
