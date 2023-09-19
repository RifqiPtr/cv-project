import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { router } from "./app/app.route";
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(
  AppComponent,
  {providers: [provideRouter(router), provideAnimations()]}
)