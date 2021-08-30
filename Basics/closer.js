let f = () => {
    let i = 1;
    return () => {
        console.log(i)
    }
}

console.dir(f());