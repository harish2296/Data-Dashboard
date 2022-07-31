import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountBudgetComponent } from './account-budget/account-budget.component';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes = [
  { path: 'account-budget/:accountId', component: AccountBudgetComponent , data: {title: 'Account Budget'}},
  { path: 'budget', component: BudgetComponent , data: {title: 'Budget Dashboard'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
