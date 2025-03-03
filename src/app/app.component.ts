import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './component/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Text
  title = {
    name: 'VANH DZ',
    password: 'vietanh123',
    address: {
      district: '12',
      city: 'Ho Chi Minh',
    },
  };
  // Properties
  isDisable = true;

  //Attributes
  dataImg = {
    scr: 'https://placehold.co/600x400',
    alt: 'img.jpg',
  };
  isHidden = true;
  isHiddenMessage = 'Show';
  show() {
    this.isHidden = !this.isHidden;
    if (this.isHidden) {
      this.isHiddenMessage = 'Show';
    } else {
      this.isHiddenMessage = 'Hide';
    }
    console.log(this.isHidden);
  }
  clickCount = 0;
  counter() {
    this.clickCount++;
  }
  //
  bindingMessage = '';
}
