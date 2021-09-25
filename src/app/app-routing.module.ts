import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './protected/home/home.component';
import { UserInfoComponent } from './protected/user-info/user-info.component';
import { LoginComponent } from './public/login/login.component';
import { AuthGuard } from "./core/gaurds/auth.guard"
import { EntriesComponent } from './protected/entries/entries.component';
import { FeedComponent } from './protected/feed/feed.component';


const routes: Routes = [

  {path: "", component: LoginComponent},
  // Add route gaurd
  {path: "home", component: HomeComponent, canActivate:[AuthGuard] ,
    children: [
      // add defaul route to My Entries
      {path: '', redirectTo: 'entries', pathMatch: 'full' },
      {path: "entries", component: EntriesComponent},
      {path: "userinfo", component: UserInfoComponent},
      {path: "feed", component: FeedComponent}
    ]
},

  
  // Wildcard
  { path: '**', redirectTo: "" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
