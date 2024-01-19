let worker: Worker | undefined = undefined;

export default {
    async loadWorker() {
        const SyncWorker = await import('$lib/worker?worker');
        worker = new SyncWorker.default();
    },

    sayHello(){
        worker && worker.postMessage('');
    }
}
