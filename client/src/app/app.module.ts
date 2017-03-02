import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, DropdownModule } from 'ng2-bootstrap';
import { EmojifyModule } from 'angular2-emojify';


import { AppComponent } from './app.component';
import { FeelingsComponent } from './components/feelings/feelings.component';
import { FeelingsListComponent } from './components/feelings-list/feelingsList.component';
import { AboutComponent } from './components/about/about.component';
import { routing } from './app.routing';
import { EmomapPipe } from './pipes/emomap.pipe';
import { KeysArrayPipe } from './pipes/keysArray.pipe';
import { FilterStatePipe } from './pipes/filterState.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FeelingsComponent,
    FeelingsListComponent,
    AboutComponent,
    EmomapPipe,
    KeysArrayPipe,
    FilterStatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    EmojifyModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
