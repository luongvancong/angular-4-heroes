import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { RouterModule } from '@angular/router';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    HeroService
  ]
})

export class AppModule { }
