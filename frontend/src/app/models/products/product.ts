export class Product {
    _id: string;
    name: string;
    price: number;
    category: string;
    description: string;

    constructor(_id='',name='',price=0,category='',description='',){
        this._id=_id;
        this.name=name;
        this.price=price;
        this.category=category;
        this.description=description;

    }
}
