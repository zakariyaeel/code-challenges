/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve)=>{
        setTimeout(function(){
            resolve('success');
        },millis);
    });
}