import { Component } from '@angular/core';

@Component({
  selector: 'minimal-app',
  styleUrls: ['./app.component.css'],
  template: '<sf-form []="mySchema"></sf-form>'
})

export class AppComponent {
  title = 'Test';
  mySchema = {
      "userId": "number",
      "id": "number",
      "title": "string",
      "completed": "boolean",
      
      "required": [
        "userId",
        "id",
        "title",
        "completed"
      ]
  };
}