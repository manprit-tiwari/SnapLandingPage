import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'

const Materials = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule
]
@NgModule({
  imports: [Materials],
  exports: [Materials]
})
export class MaterialModule { }
