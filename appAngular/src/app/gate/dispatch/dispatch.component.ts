import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements OnInit {

  constructor(private router: Router, private nbAuthService: NbAuthService) { }

  ngOnInit(): void {
    this.nbAuthService.getToken()
      .subscribe((token: NbAuthJWTToken) => {
          console.log(token);
          if(token.getPayload().role === 'user'){
            this.router.navigate(['/user']);
          } else if (token.getPayload().role === 'admin') {
            this.router.navigate(['/admin']);
          }
      });

  }

}
