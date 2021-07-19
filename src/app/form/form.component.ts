import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent{

  @Input() name: string;
  @Input() description: string;

  @Output() addEvent = new EventEmitter();

  add(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    if (!name || !description) { return; }
    this.addEvent.emit(this.name);
    this.addEvent.emit(this.description)
}
}