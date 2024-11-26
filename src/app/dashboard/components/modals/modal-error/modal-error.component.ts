import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent {
  @Input() isVisible: boolean = false
  @Input() msg: string = ''
  @Output() close = new EventEmitter<void>()

  onClose(){
    this.close.emit()
  }
}
