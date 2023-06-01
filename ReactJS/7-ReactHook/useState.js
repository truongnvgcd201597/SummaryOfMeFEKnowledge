function useState(initialValue) {
    let _val = initialValue
    function state() {
        return _val
    }
    function setState(newVal) {
        _val = newVal
    }
    return [state, setState]
}

const [count, setCount] = useState(1)
console.log(count()) // 1
setCount(5)
console.log(count()) // 2

