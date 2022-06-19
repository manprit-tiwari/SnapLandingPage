import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';


const Materials = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatRippleModule,
  MatMenuModule
]
@NgModule({
  imports: [Materials],
  exports: [Materials]
})
export class MaterialModule { }
