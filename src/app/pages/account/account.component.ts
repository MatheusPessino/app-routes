import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private route: ActivatedRoute;
  public name!: string;
  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.name = params["name"];
      }
    })
  }

}
