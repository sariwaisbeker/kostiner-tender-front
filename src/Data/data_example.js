import { action, computed, makeObservable, observable, runInAction } from 'mobx';


class Data {
    list = [];
   
    constructor() {
        makeObservable(this, {
            list: observable,
            init: action,
            getService: computed
           
        }),
            this.init();
    }

    async init() {
        try {
            // json שרת דמו של 
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json();
            runInAction(() => {
                this.list = data;             
            });
           
        }
        catch (err) {
            console.error(err)
        }

    }

    get getService() {
        return this.list
    }


}
const singleton = new Data();
export default singleton;

