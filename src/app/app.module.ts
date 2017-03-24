import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ContentComponent } from './content/content.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HighlightDirective } from './customdirective/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    ContentComponent,
    LifecycleComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
