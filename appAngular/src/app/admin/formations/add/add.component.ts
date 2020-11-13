import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TrainingService } from "../../../services/training.service";
import { Location } from "@angular/common";
import { Training } from "src/app/interfaces/training";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  initdata={status:true};
  constructor(
    private route: ActivatedRoute,
    private trainingService: TrainingService,
    private location: Location
  ) {}

  ngOnInit(): void {

  }
  onEnabledToggleChange(){
    this.initdata.status=!this.initdata.status;
  }
  goBack(): void {
    this.location.back();
  }
  add(name: string, start_date: Date, end_date: Date, status: boolean): void {
    console.log("AddComponent -> add -> status", status)
    name = name.trim();
   status=this.initdata.status;

    if(!name){ return; }
    this.trainingService.addTraining({ name, start_date, end_date, status } as Training)
    .subscribe(() => this.goBack());
  }
}
