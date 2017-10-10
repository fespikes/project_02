export class MessageDataOptions {
  duration?: number;
  animate?: boolean;
  pauseOnHover?: boolean;
}

export class MessageData {
  html?: string;
  type?: 'success' | 'info' | 'warning' | 'error' | 'loading' | any;
  content?: string;
}

export class MessageDataFilled extends MessageData {
  messageId: string; // Service-wide unique id, auto generated
  state?: 'enter' | 'leave';
  options?: MessageDataOptions;
  createdAt: Date; // Auto created
}
