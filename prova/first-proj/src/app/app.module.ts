import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Comp1Component } from './comp1/comp1.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import{FormsModule} from '@angular/forms'

import { ButtonComponent } from './button/button.component';
import { PicShibainuComponent } from './pic-shibainu/pic-shibainu.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivesTestComponent } from './directives-test/directives-test.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ButtonComponent,
    PicShibainuComponent,
    TwoWayBindingComponent,
    DirectivesTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
