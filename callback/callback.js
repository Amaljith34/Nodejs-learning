function fn(name){
    console.log(`hello ${name}`);
    
}
function fn1(anotherfn){
    const name='amal';
    anotherfn(name)
}


fn1(fn)