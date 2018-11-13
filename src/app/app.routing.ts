import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { CustomerTableComponent } from './customerTable';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { SubmitCustomerComponent } from 'src/app/submit-customer';
import { EditCustomerComponent } from 'src/app/edit-customer/edit-customer.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'customers', component: CustomerTableComponent, canActivate: [AuthGuard]  },
    { path: 'add', component: SubmitCustomerComponent, canActivate: [AuthGuard]  },
    { path: 'update', component: EditCustomerComponent, canActivate: [AuthGuard]  },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);