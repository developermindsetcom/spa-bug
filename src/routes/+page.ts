// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import worker_handler from "$lib/worker_handler.js";

export const prerender = false;
export const ssr = false;
export const load = ()=>{
    worker_handler.sayHello();
    return {};
}
