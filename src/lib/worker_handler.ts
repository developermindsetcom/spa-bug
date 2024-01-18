import Worker from '$lib/worker?worker';
const worker = new Worker();
export default {
    sayHello(){
        worker.postMessage('');
    }
}