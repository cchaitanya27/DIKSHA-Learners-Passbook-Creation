import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DlpComponent } from './dlp/dlp.component'

const routes: Routes = [
  // {path: "", component: AppComponent},
  {path : "", component : RegisterComponent},
  {path : "DLP", component :DlpComponent},
  {path : "signin", component : SigninComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
