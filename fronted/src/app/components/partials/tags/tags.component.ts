import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];

  constructor(productsService:ProductsService){
    productsService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }

}
