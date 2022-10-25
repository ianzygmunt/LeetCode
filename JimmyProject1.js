for( var i = 1; i <= 100 ; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('Ian Zygmunt')
    }
    else if(i % 3 === 0 && !i % 5 === 0) {
        console.log('Ian')
    }
    else if(!i % 3 === 0 && i % 5 === 0){
        console.log('Zygmunt')
    }
    else{console.log(i)}
}
