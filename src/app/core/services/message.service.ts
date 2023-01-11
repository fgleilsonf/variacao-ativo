import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

  getMessages(): string[] {
    this.log('Consultou os loggers');
    return this.messages;
  }

  private log(message: string): void {
    this.add(`LoggerService: ${message}`);
  }
}
