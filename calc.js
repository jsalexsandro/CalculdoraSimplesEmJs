const Calc = {
    input:document.getElementById("textInput"),
    setOfInput:(value) => {
        if (Calc.input.innerHTML.length <= 12)
            Calc.input.innerHTML += value
    },
    setMathOperationOfInput:(value) => {
        if (Calc.input.innerHTML.length > 0){
            const c = Calc.input.innerHTML.length - 1
            if (Calc.input.innerHTML[c] == "÷"|| Calc.input.innerHTML[c] == "×"|| Calc.input.innerHTML[c] == "-" || Calc.input.innerHTML[c] == "+" || Calc.input.innerHTML[c] == ","){
                var count = 0;
                var code = ""
                while (count <= c-1){
                    code += Calc.input.innerHTML[count]
                    count ++
                }
                code += value
                Calc.input.innerHTML = code
            } else {
                Calc.setOfInput(value)
            }

        }
    },
    remove:() => {
        let v = Calc.input.innerHTML.substring(0,Calc.input.innerHTML.length-1)
        Calc.input.innerHTML = v;
    }
    ,
    clear:() => {
        Calc.input.innerHTML = ""
    },

    run:() => {
        var _code = Calc.input.innerHTML;
        if (!_code)
            return
        var code = ""
        for (var i of _code){

            if (i == "×"){
                code += "*"
            } else if (i == "÷"){
                code += "/"
            } else {
                code += i
            }
        }
        console.log(code)
        var a = String(eval(code))
        console.log(a.length)
        if (a.length > 12){
            var count = 0;
            code = ""
            while (count <= 12){
                code += a[count]
                count += 1
            }
            a = code
        }
        Calc.input.innerHTML = a;
    }
}