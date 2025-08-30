/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    function promisifiedSetTimeout(t){
        return new Promise(function(resolve){
            setTimeout(resolve,t);
    });
    }

    

    // promisifiedSetTimeout(n).then(function callback(){
    //     console.log('inside callback');
    //     return promisifiedSetTimeout(1000);
    // }).then(function callback(){
    //     console.log('inside callback after 1000ms');
    //     return promisifiedSetTimeout(1000);
    // }).then(function callback(){
    //     console.log('inside callback after 2000ms');
    //     return promisifiedSetTimeout(1000);
    // });

    async function solve(t){
        await promisifiedSetTimeout(t);
        console.log('inside async')
        await promisifiedSetTimeout(1000);
        console.log('inside async after 1000')
        await promisifiedSetTimeout(n+1000);
        console.log('inside async after 2000')
    }

    solve(n);
}

module.exports = wait;
