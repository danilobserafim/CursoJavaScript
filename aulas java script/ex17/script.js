function Tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
       alert('Digite um número!')
    }else{
        tab.innerHTML = " "
        let n = Number(num.value)
        let c = 1
        while(c <= 10){

        
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}