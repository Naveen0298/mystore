import { Injectable } from '@angular/core';
import { Products } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  actionUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: no-unused-expression
  /* private products: Array<Products> = [
   {
     name: 'ipad',
     image: `https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/f/m/c/apple-mrjp2hn-a-original-imaf46khz8vftwnf.jpeg?q=70`,
     description: 'Apple iPad (6th Gen) 32 GB 9.7 inch with Wi-Fi Only (Gold)',
     imageAlt: 'ipad',
     isAvailable: true,
     price: 100
   },
   {
     name: 'Redmi 8A ',
     // tslint:disable-next-line: max-line-length
     image: `https://rukminim1.flixcart.com/image/416/416/k12go7k0/mobile/8/e/b/mi-redmi-8a-mzb8298in-original-imafkmhqztfbabww.jpeg?q=70`,
     description: ' (Midnight Black, 32 GB)  (3 GB RAM)',
     imageAlt: 'Redmi 8A (Midnight Black, 32 GB)  (3 GB RAM)',
     isAvailable: true,
     price: 100
   },
   {
     name: 'I-pad',
     image: `https://rukminim1.flixcart.com/image/416/416/jfsknm80/tablet/f/m/c/apple-mrjp2hn-a-original-imaf46khz8vftwnf.jpeg?q=70`,
     description: 'The tablet comes with a 12.90-inch.',
     imageAlt: '',
     isAvailable: true,
     price: 100
   },
   {
     name: 'Realme X',
     // tslint:disable-next-line: max-line-length
     image: `https://rukminim1.flixcart.com/image/416/416/k01b8280pkrrdj/mobile/c/g/y/realme-x-rmx1901-original-imafj22gabhnt2gs.jpeg?q=70`,
     description: '(Garlic, 128 GB)  (8 GB RAM)',
     imageAlt: 'Realme X',
     isAvailable: true,
     price: 100
   },
   {
     name: 'Apple Watch',
     image: `https://rukminim1.flixcart.com/image/312/312/k0o69ow0/smartwatch/p/e/k/mwwe2hn-a-apple-original-imafkffxzcxf3gyz.jpeg?q=70`,
     description: 'Series 3 GPS - 38 mm Silver Aluminium Case with Fog Sport Band  (White Strap Regular)  ',
     imageAlt: 'Apple Watch',
     isAvailable: true,
     price: 100
   },
   {
     name: 'Samsung',
     // tslint:disable-next-line: max-line-length
     image: `https://rukminim1.flixcart.com/image/416/416/jh3q6q80/monitor/y/r/h/ls24f350-ls24f350-samsung-original-imaf576unwyge7hp.jpeg?q=70`,
     description: '23.5 inch Full HD IPS Panel Monitor (LS24F350FHWXXL)  (HDMI, VGA) ',
     imageAlt: 'Samsung',
     isAvailable: true,
     price: 100
   }

 ];
 constructor(private http: HttpClient) { }
 */
  pushProducts(product: Products) {
    return this.http.post(this.actionUrl + '/product', product);
  }
  getproducts() {
    return this.http.get(this.actionUrl + '/product');
  }
  filterProducts(id) {
    return this.http.get(this.actionUrl + '/product/' + id);
  }
  updateProducts(form, id) {
    return this.http.put(this.actionUrl + '/product/' + id, form);
  }
  deleteProducts(id) {
    return this.http.delete(this.actionUrl + '/product/' + id);
  }
}
