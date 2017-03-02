import { Component } from '@angular/core';
import { FeelingService } from './services/feeling.service';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FeelingService]
})
export class AppComponent {
}
