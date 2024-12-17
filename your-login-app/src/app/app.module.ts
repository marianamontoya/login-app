import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Add components here
  ],
  imports: [
    FormsModule,
    // Other modules
  ],
  providers: [],
  bootstrap: [] // Typically includes AppComponent
})
export class AppModule { } // Add this line to fix the error
