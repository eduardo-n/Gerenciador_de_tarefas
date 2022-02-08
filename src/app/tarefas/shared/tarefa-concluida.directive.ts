import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    if(this.tarefaConcluida){
      this.element.nativeElement.style.textDecoration = "line-throught";
    }
  }

}
