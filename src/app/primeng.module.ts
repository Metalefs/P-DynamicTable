
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    SkeletonModule,
    SlideMenuModule,
    TableModule
  ],
  exports: [
    SkeletonModule
  ]
})

export class PrimeNGModule {
}
