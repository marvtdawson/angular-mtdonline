import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AboutComponent} from '../about.component';
import {ExperienceComponent} from '../experience/experience.component';
import {StacksComponent} from '../stacks/stacks.component';
import { MyStoryComponent } from '../my-story/my-story.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'about', component: AboutComponent,
        children: [
          { path: 'my-story', component: MyStoryComponent },
          { path: 'experience', component: ExperienceComponent },
          { path: 'stacks', component: StacksComponent },
        ]
      }
    ])
  ],
  declarations: [MyStoryComponent]
})
export class AboutRoutingModule { }
