import { Component, VERSION ,Input} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})



export class AppComponent  {
  people =[  { name:"suhas",
               age:35
             },
             { name:"ram",
               age:45
             },
             { name:"sham",
               age:30
             }
          ];
name: string=undefined;
age: number=undefined;
 addPerson()   
 {
   this.people.push({"name":this.name,"age":this.age});
 }
}
