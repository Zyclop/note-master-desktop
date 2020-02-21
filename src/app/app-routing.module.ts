import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { HomeComponent } from './pages/home/home.component';
import { NoteToolComponent } from './components/toolbar/note-tool/note-tool.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path: 'note',
		component: NoteToolComponent,
		outlet: 'tool',
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
