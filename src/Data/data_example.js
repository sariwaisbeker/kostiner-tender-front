import { action, computed, makeObservable, observable, runInAction } from 'mobx';
//import { Axios } from 'axios';

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

// function get()
// {
//   //axios.post('http://127.0.0.1:5000/api/data',)
//   axios.get('http://127.0.0.1:5000/api/data')
//       .then(response => {
//         // setData(response.data);
//         // setClicked(true);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
// }