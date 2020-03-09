import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this.title.setTitle('CT CP DƯỢC PHẨM LIÊN DOANH FOXS-USA');
    this.meta.updateTag({ name: 'description', content: 'Tự hòa là một trong những công ty dược phẩm hàng đầu Việt Nam. Luôn đi đầu trong lĩnh vực nghiên cứu và sản xuất dòng sẩn phẩm chức năng chất lượng cao' });
  }

}
