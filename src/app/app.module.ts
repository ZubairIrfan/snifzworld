import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './home/header/header.component';
import { SliderComponent } from './home/slider/slider.component';
import { EventGeneratorService } from 'app/services/event-generator.service';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
