function solution(n) {
    const list = [0, 1]
    for(let i=2; i<=n+1; i++) {
        list.push((list[i-2] + list[i-1]) % 1234567)
    }
    return list[list.length - 1]
}

function fibonachi(n) {
    
}