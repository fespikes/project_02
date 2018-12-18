import { Component, OnInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { FunctionalitiesComponent } from '../../common/components/functionalities/functionalities.component';
import { RelationalDatabaseService } from '../relational-database.service';

@Component({
  selector: 'relational-database-functionalities',
  templateUrl: '../../common/components/functionalities/functionalities.component.html',
})
export class RelationalDatabaseFunctionalitiesComponent extends FunctionalitiesComponent /*implements OnDestroy */ {

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private service: RelationalDatabaseService,
    private el: ElementRef
  ) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    const productDetails = this.service.getProductDetails();
    this.data = productDetails.functionalities;
  }

}
