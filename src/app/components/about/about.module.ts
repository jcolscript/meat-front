import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route} from '@angular/router'

import { AboutComponent } from 'app/components/about/about.component'

const ROUTES: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(ROUTES)],
})
export class AboutModule {}
