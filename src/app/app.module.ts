import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';


// import { AppRouting } from './app.routes';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
