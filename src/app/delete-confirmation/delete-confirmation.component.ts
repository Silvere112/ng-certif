import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbaService} from "../nba.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit, OnDestroy {


  id: string | null = null


  constructor(
    private nbaService: NbaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
    // TODO unsubscribe
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.id = params.get("id")
      }
    )
  }


  cancelClicked() {
    this.closePopup()
  }

  deleteClicked() {
    if (this.id != null) {
      this.nbaService.removeTrackedTeam(this.id)
    }
    this.closePopup()
  }

  closePopup(){
    this.router.navigate([{ outlets: { popup: null } }])
  }
}
