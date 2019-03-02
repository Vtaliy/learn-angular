import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UserServices} from './shared/services/user.services';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AuthModule,
        AppRoutingModule,
    ],
    providers: [UserServices],
    bootstrap: [AppComponent]
})
export class AppModule {
}
