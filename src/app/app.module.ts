import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './protected/home/home.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnquotePipe } from './core/pipes/unquote.pipe';

// Angular Material imports
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CapitalizePipe } from './core/pipes/capitalize.pipe';
import { UserInfoComponent } from './protected/user-info/user-info.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { EntriesComponent } from './protected/entries/entries.component';
import { PostFormComponent } from './protected/post-form/post-form.component';
import { PostComponent } from './protected/post/post.component';
import { FeedComponent } from './protected/feed/feed.component';
import { PostService } from './core/services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UnquotePipe,
    CapitalizePipe,
    UserInfoComponent,
    EntriesComponent,
    PostFormComponent,
    PostComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: PostService, useClass: PostService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
