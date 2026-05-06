import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Footer} from './core/footer/footer';
import { Navbar } from './core/navbar/navbar';
import {Hero} from './features/Hero/Hero';
import { Projects } from './features/projects/projects';
import { Experience } from './features/experience/experience';
import { About } from './features/about/about';
import { FloatingSocial } from './core/floating-social/floating-social';
import { Skill } from './features/skill/skill';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Navbar,
    Hero,
    FloatingSocial,
    About,
    Experience,
    Skill,
    Footer,
    Projects
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('dev-resume');
}
