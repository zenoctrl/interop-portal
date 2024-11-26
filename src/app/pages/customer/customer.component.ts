import { Component, OnInit } from "@angular/core";
import { environment } from "environments/environment";
import { DataService } from "app/services/data/data.service";

@Component({
  selector: "customer-cmp",
  moduleId: module.id,
  templateUrl: "customer.component.html",
})
export class CustomerComponent implements OnInit {
  customers: any[] = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    const endpoint: string = environment.endpoints.customers.getAll;
    this.data.get(endpoint).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }
}
