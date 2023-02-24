import {Component, EventEmitter, Input, Output} from '@angular/core';

const EMPTY = "";

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.css']
})
export class SelectTeamComponent<T> {

  allTeamOptions: TeamOption<T>[] = []
  currentTeamOptions: TeamOption<T>[] = []
  currentConferenceOptions: string[] = []
  currentDivisionOptions: string[] = []

  @Input()
  set options(value: TeamOption<T>[] | null) {
    this.allTeamOptions = value || [];
    this.refreshTeamOptionsUsing(this.allTeamOptions);
    this.refreshConferenceOptionsUsing(this.allTeamOptions);
    this.refreshDivisionOptionsUsing(this.allTeamOptions);
  };

  @Output()
  trackTeamClicked = new EventEmitter<T>()

  onSelect(value: string) {
    this.trackTeamClicked.next(JSON.parse(value))
  }

  onConferenceChange(conference: string) {
    const availableOptions = conference === EMPTY ? this.allTeamOptions : this.allTeamOptions.filter(it => it.labels.conference === conference);
    this.refreshTeamOptionsUsing(availableOptions);
    this.refreshDivisionOptionsUsing(availableOptions);
  }

  onDivisionChange(division: string) {
    const availableOptions = division === EMPTY ? this.allTeamOptions : this.allTeamOptions.filter(it => it.labels.division === division);
    this.refreshTeamOptionsUsing(availableOptions);
  }

  private refreshDivisionOptionsUsing(availableOptions: TeamOption<T>[]) {
    const options = availableOptions.map(it => it.labels.division);
    this.currentDivisionOptions = [EMPTY, ...removeDuplicatesFrom(options)]
  }


  private refreshConferenceOptionsUsing(availableOptions: TeamOption<T>[]) {
    const options = availableOptions.map(it => it.labels.conference);
    this.currentConferenceOptions = [EMPTY, ...removeDuplicatesFrom(options)]
  }

  private refreshTeamOptionsUsing(availableOptions: TeamOption<T>[]) {
    this.currentTeamOptions = availableOptions
  }

   toStr = JSON.stringify;

}

function removeDuplicatesFrom(strings: string[]) {
  return [...new Set(strings)];
}


export interface TeamOption<T> {
  labels: TeamLabels
  value: T
}

interface TeamLabels {
  conference: string;
  division: string;
  team: string;
}
