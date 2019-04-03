import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RightDivComponent } from './right-div/right-div.component';
import { LeftDivComponent } from './left-div/left-div.component';
import { MiddleDivsComponent } from './middle-divs/middle-divs.component';
import { SpecialCharacterDirective } from './special-character.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightDivComponent,
    LeftDivComponent,
    MiddleDivsComponent,
    SpecialCharacterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
