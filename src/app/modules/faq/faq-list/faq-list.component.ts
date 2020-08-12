import { Component, OnInit } from '@angular/core';
import {WknFaqService} from "../../../_services/wkn-faq.service";

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {
  public faqs: any = null;
  constructor(private wknFaqService: WknFaqService) {
    this.wknFaqService.getFaqs()
      .then((res) => {
        console.log(res);
        this.faqs = res.records;
      })
      .catch((err: any) => {
        console.log('errors' +  err);
      });
  }

  ngOnInit(): void {
  }

  clickToggle(event) {
    console.log('clickeando');
    if (! event.target.classList.contains('rotate-img')) {
      event.target.classList.add('rotate-img');
      event.target.classList.remove('reverse-rotate-img');

    }else{
      event.target.classList.add('reverse-rotate-img');
      event.target.classList.remove('rotate-img');

    }
  }
}
