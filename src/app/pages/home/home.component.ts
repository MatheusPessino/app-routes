import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  private router: Router; 

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
  }

  x:number = 0;

  onAlert(): void{
    window.alert("teste");
    // this.router.navigateByUrl("/login");
    this.router.navigate(['/login']); // usamos pra trabalhar com variaveis dentro do array
  }
}
