import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../../components/core/message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(
    private $message: MessageService
  ) { }

  ngOnInit() {
  }
  setSuccess() {
    this.$message.success('success');
  }
  setInfo() {
    this.$message.info('info');
  }
  setError() {
    this.$message.error('error');
  }
  setWarning() {
    this.$message.warning('warning');
  }
  setType() {
  }
}
