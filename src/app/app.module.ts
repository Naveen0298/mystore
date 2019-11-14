import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
const appRoutes: Routes = [
  { path: '', component: CardComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'addproduct/:id', component: AddproductComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    AddproductComponent,
    ProductdetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
