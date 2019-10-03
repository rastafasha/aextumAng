import { Component, OnInit } from '@angular/core';
import { CmspageService } from '../cmspage.service';
import { Masinfo } from '../masinfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.component.html',
  styleUrls: ['./masinfo.component.css']
})
export class MasinfoComponent implements OnInit {

  model = new Masinfo();
  submitted = false;
  error: any = {};

  constructor(
    private router: Router,
    private cmspageService: CmspageService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    return this.cmspageService.masinfoForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
