import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { Location } from '@angular/common';
import { Admin } from 'src/app/interfaces/admin';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  Admin: Admin;
  status: string;

  constructor(
    private route: ActivatedRoute,
    private AdminService: AdminService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAdmin();
  }
  getAdmin(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.AdminService.getAdmin(id)
    .subscribe(t => {this.Admin = t['data'];
    this.Admin.password=null;
  });
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.AdminService.updateAdmin(this.Admin)
    .subscribe(() => this.goBack());
  }

}
