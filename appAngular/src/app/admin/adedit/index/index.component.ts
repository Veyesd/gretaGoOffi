import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../interfaces/admin';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  datas: Admin[];
  constructor( private AdminService : AdminService) { }

  ngOnInit(): void {

    this.getAdmins();
  }
  getAdmins(): void {
    this.AdminService.getAdmins()
    .subscribe(datas => this.datas = datas["data"]
    
    );
  }

  delete(Admin: Admin): void {
    this.datas = this.datas.filter(p => p !== Admin);
    this.AdminService.deleteAdmin(Admin).subscribe();
  }

}
