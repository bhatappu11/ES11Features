promise_1 = Promise.resolve('Hello')
promise_2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'world'))

Promise.allSettled([promise_1, promise_2])
    .then(([promise_1_result, promise_2_result]) => {
        console.log(promise_1_result) // output is: {status: 'fulfilled', value: 'hi'}
        console.log(promise_2_result) // output is: {status: 'rejected', reason: 'world'}
    })