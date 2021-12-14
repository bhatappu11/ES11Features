const myModule = './Disp.mjs';
import(myModule)
    .then((module) => {
        console.log(module.showMessage());
    });

(async function(){
    const myModule = './Disp.mjs';
    const module = await import(myModule)
    console.log(module.showMessage());
})();