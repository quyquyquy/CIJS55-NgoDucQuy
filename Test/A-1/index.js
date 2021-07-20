let n = prompt('Hãy nhập mảng ngăn cách bằng ","')
let ar = n.split(',')
let x = ar[0]*ar[1]
for(i=0; i<ar.length; i++) {
    if(x < ar[i]*ar[i+1]){
        x = ar[i]*ar[i+1]
    }
      
}
alert(`cặp liền kề có tích lớn nhất là: ${x}`)