import { Route } from "@angular/router";
import { OnBoardComponent } from "./local-component/on-board/on-board.component";
import { ProfileComponent } from "./local-component/content/profile/profile.component";
import { ExperienceComponent } from "./local-component/content/experience/experience.component";
import { SkillsComponent } from "./local-component/content/skills/skills.component";
import { PortofolioComponent } from "./local-component/content/portofolio/portofolio.component";

export const router: Route[] = [
  {path:'', pathMatch: "full", redirectTo: 'on-board'},
  {path:'rifqi', pathMatch: "full", redirectTo: 'on-board'},
  {path:'on-board', component: OnBoardComponent},
  {path:'rifqi/about-me', component: ProfileComponent},
  {path:'rifqi/experience', component: ExperienceComponent},
  {path:'rifqi/skills', component: SkillsComponent},
  {path:'rifqi/portofolio', component: PortofolioComponent}
]