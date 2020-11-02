import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TrainingService } from "../../../services/formations.service";
import { Location } from "@angular/common";
import { Training } from "src/app/interfaces/training";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private trainingService: TrainingService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }
  add(name: string, start_date: Date, end_date: Date, option: string): void {
    name = name.trim();
    let status: boolean;
    console.log(option)
    console.log("///////////")
    console.log(status)
    if(option === 'true') status = true;
    if(option === 'false') status = false;

    if(!name){ return; }
    this.trainingService.addTraining({ name, start_date, end_date, status } as Training)
    .subscribe(() => this.goBack());
  }
}
