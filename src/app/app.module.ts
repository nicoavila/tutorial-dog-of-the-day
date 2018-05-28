import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { DogOfTheDayComponent } from './dog-of-the-day/dog-of-the-day.component';

@NgModule({
  declarations: [DogOfTheDayComponent],
  imports: [BrowserModule, HttpClientModule],
  entryComponents: [DogOfTheDayComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const imagenEspacio = createCustomElement(DogOfTheDayComponent, { injector });
    customElements.define('ng-chile-dotd', imagenEspacio);
  }

  ngDoBootstrap() {}
}
