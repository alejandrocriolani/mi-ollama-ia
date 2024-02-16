import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

  menus: {id: number, route: string,  label: string} [] = [
    {
      id: 0,
      route: "generate",
      label: "Generate"
    },{
      id: 1,
      route: "chat",
      label: "Chat"
    }
  ]
}
