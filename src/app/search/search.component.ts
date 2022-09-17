import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
text:string=''
  
  

  constructor() {
   
  
   
    
   }

  ngOnInit(): void {
    
  }
  @Output() search:EventEmitter<string>=new EventEmitter<string>()
  onsearch(){
    this.search.emit(this.text)
  }
  
}
