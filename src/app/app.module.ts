import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';
import { OimData} from './OIM/oim-data';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { OimDetailComponent } from './OIM/oim-detail.component';
import { OimListComponent } from './OIM/oim-list.component';
import { OimEditComponent } from './OIM/oim-edit/oim-edit.component';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule.withComponents([OimDetailComponent]),
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    InMemoryWebApiModule.forFeature(OimData, {delay:1000}),
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    
  ],
  bootstrap: [AppComponent],
  providers: [InMemoryWebApiModule]
})
export class AppModule { }
