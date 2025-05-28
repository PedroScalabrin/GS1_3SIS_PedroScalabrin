import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InspiracaoComponent } from './inspiracao/inspiracao.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ParceirosComponent } from './parceiros/parceiros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inspiracao', component: InspiracaoComponent },
  { path: 'programacao', component: ProgramacaoComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'parceiros', component: ParceirosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
