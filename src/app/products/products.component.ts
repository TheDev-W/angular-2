import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isEdit = false

  data = [
    {
      id: 0,
      name: "iPhone 12",
      des: "des i12",
      price: 1200
    }
  ]


  newProduct =
  {
    id: 1,
    name: "",
    des: "",
    price: 0
  }

  edit(obj: any) {
    this.isEdit = true

    this.newProduct = obj
    console.log(this.data)
  }

  remove(id: number){
    this.data = this.data.filter(x => {
      return x.id != id
    })
  }

  onSubmit(formValue: any) {
    console.log(this.isEdit);
    
    if (this.isEdit) {
      let i = this.data.findIndex(x => x.id = this.newProduct.id)
      this.data[i] = formValue

    } else {
      this.newProduct = formValue
      this.newProduct.id = this.data.length
      this.data.push(this.newProduct)

      console.log(this.newProduct, this.data);
    }

    this.isEdit = false
    this.newProduct = {
      id: 1,
      name: "",
      des: "",
      price: 0
    }
  }

  onValidate(){
    if (!this.newProduct.name || !this.newProduct.des || !(this.newProduct.price>0) ) {
      return false
    }
    return true
  }

}
