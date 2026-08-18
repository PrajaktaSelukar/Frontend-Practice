class EventEmitter {
    constructor() {
        this._eventSubscriptions = new Map();
    }

    // Subscribe to an event
    subscribe(eventName, callback) {
        if (typeof callback !== "function") {
            throw new TypeError("Callback should be a function");
        }

        if (!this._eventSubscriptions.has(eventName)) {
            this._eventSubscriptions.set(eventName, new Map());
        }

        const subscriptionId = Symbol();
        const subscriptions = this._eventSubscriptions.get(eventName);
        subscriptions.set(subscriptionId, callback);

        return {
            remove: () => {
                if (!subscriptions.has(subscriptionId)) {
                    return; // Fail gracefully or ignore duplicate unsubscribes
                }
                subscriptions.delete(subscriptionId);

                // Clean up outer Map key if no subscribers remain
                if (subscriptions.size === 0) {
                    this._eventSubscriptions.delete(eventName);
                }
            }
        };
    }

    // Emit an event
    emit(eventName, ...args) {
        const subscriptions = this._eventSubscriptions.get(eventName);
        
        // Fail silently if no listeners exist (standard EventEmitter behavior)
        if (!subscriptions) {
            return; 
        }

        // Snapshot callbacks before execution to prevent mutation during iteration
        const callbacks = Array.from(subscriptions.values());
        callbacks.forEach(callback => callback(...args));
    }
}

// Example usage:
const emitter = new EventEmitter();
const subscription = emitter.subscribe("modify", (link) => {
    console.log(`Modified: ${link}`);
});

emitter.emit("modify", "test@gmail.com"); // Logs: "Modified: test@gmail.com"
subscription.remove();

// Gracefully ignored (No errors thrown)
emitter.emit("modify", "test@gmail.com"); 
emitter.emit("noEventFound", "test@gmail.com");