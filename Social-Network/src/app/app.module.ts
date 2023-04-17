import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { SocialLogoComponent } from './social-logo/social-logo.component';
import { UserContentComponent } from './user-content/user-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ProfileHeaderComponent,
    SocialLogoComponent,
    UserContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
