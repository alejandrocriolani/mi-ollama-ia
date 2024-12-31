import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Llama2Component } from './shared/components/llama-2/llama-2.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    AdminLayoutComponent,
    HttpClientModule,
    Llama2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-ollama-ia';

  
}
