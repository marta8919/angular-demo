import { Component, ElementRef, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { ControlComponent } from '../../../ui/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; text: string }>();

  onSubmit(title: string, textInput: string) {
    this.add.emit({ title: title, text: textInput });
    this.form()?.nativeElement.reset();
  }
}
