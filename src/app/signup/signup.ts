import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-signup',
  imports: [FormsModule,  RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

    onSubmit(val:string)
  {
    console.log(val)
  }
}
