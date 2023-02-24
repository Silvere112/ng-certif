import {Component} from '@angular/core';
import {Team} from '../data.models';
import {map, Observable, tap} from 'rxjs';
import {NbaService} from '../nba.service';
import {TeamOption} from "../select-team/select-team.component";

type TeamOptionWithValue = TeamOption<Team>;

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css']
})
export class GameStatsComponent {

  teams$: Observable<Team[]> = this.nbaService.getAllTeams().pipe(
    tap(data => this.allTeams = data)
  );
  allTeams: Team[] = [];
  options$: Observable<TeamOptionWithValue[]> = this.teams$.pipe(
    map(teams => teams.map(team => this.toTeamOptionWithValue(team)))
  );

  private toTeamOptionWithValue(team: Team): TeamOptionWithValue {
    return {
      labels: {
        conference: team.conference,
        division: team.division,
        team: team.full_name
      },
      value: team
    };
  }

  constructor(protected nbaService: NbaService) {
  }

  trackTeam(teamId: string | number): void {
    console.log(teamId)
    let team = this.allTeams.find(team => team.id == Number(teamId));
    if (team)
      this.nbaService.addTrackedTeam(team);
  }
}
