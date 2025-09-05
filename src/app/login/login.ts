import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterLink ,RouterOutlet } from '@angular/router'


@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink , RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  onSubmit(val:string)
  {
    console.log(val)
  }



}
