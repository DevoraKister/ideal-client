import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { City } from '../shared/models/city';
import { JobParameters } from '../shared/models/JobParameters';
import { JobService } from '../shared/services/job.service';


export const _filter = (opt: string, value: string): string => {
  const filterValue = value.toLowerCase();
  if(opt.includes(filterValue)){
    return opt;
  }
  return "";
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private jobParameters: JobParameters=new JobParameters();


  citiesForm: FormGroup = this._formBuilder.group({
    citiesGroup: '',
  });

  cities: City[] =  [];

  cityOptions: Observable<City[]>;

  constructor(private _formBuilder: FormBuilder, private jobService: JobService) {}

  ngOnInit() {
    
    this.jobService.getJobParameters().subscribe(state => {
      this.jobParameters = state;
      this.cities = this.jobParameters.Cities;
    });
  
    this.cityOptions = this.citiesForm.get('citiesGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): City[] {
    if (value) {
      return this.cities
        .map(city => ({CityName: _filter(city.CityName, value)}))
        .filter(city => city.CityName.length > 0);
    }

    return this.cities;
  }
// LK(){
//    container = document.querySelector(".container");
//    menu = document.querySelector(".menu");
//    items = document.querySelectorAll(".item");
//    current = 0;
//   items.forEach((item, i) =>
//     item.addEventListener("click", () => {
//       if (i < current) {
//         // ltr
//         container.className = "container right instant";
//         void container.offsetHeight; // force reflow
//         container.className = `container left pos${i}`;
//       } else if (i > current) {
//         // rtl
//         container.className = "container left instant";
//         void container.offsetHeight; // force reflow
//         container.className = `container right pos${i}`;
//       }
//       current = i;
//     })
//   );
// }
}
