class EventEmitter {
  static instance_;

  events_ = {};

  constructor() {};

  on(event, listener) {
    if (!this.events_[event]) {
      this.events_[event] = [];
    }
    this.events_[event].push(listener);
  }

  off(event, listenerToRemove) {
    if (this.events_[event]) {
      this.events_[event] = this.events_[event].filter(
          (listener) => listener !== listenerToRemove);
    };
  }

  emit(event, payload) {
    if (this.events_[event]) {
      this.events_[event].forEach(
        (listener) => listener(payload));
    }
  }

  static getInstance() {
    if (EventBuss.instance_) {
      this.instance_ = new EventBuss();
    }
    return this.instance_;
  }
}

export const eventEmitter = new EventEmitter();
