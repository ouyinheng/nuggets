import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatTabsModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule
} from '@angular/material';
@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class MaterialModule {

}