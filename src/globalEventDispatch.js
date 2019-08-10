export default {
    eventInstances: [],
    add(appName, eventInstance) {
        this.eventInstances.push({appName, eventInstance});
    },
    trigger(eventName) {
        for (let a of this.eventInstances) {
            a.eventInstance.trigger(eventName);
        }
    },
    remove(appName) {
        for (let [index, a] of this.eventInstances.entries()) {
            if (a.appName === appName) {
                return this.eventInstances.splice(index, 1);
            }
        }
    }
}