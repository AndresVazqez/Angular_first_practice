import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './features/home/components/header/header.component';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { MainComponent } from './features/home/components/main/main.component';
import { GalleryComponent } from './features/home/components/gallery/gallery.component';
import { ImageComponent } from './shared/components/image/image.component';
import { ItemComponent } from './features/home/components/main/item/item.component';
import { FooterComponent } from './features/home/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    MainComponent,
    GalleryComponent,
    ImageComponent,
    ItemComponent,
    FooterComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
