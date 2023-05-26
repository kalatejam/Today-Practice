var arr = [15,16,17,20,25,56,95];
for (i=0; i<arr.length; i++){
    if(arr[i]%5==0){
        console.log(arr[i]);
    }
}

for(i=0; i>=10; i--){
    console.log(i);
}

var arr = [0,1,2,-1,-2,-3];
function positive(arr){
    for(i=0; i<arr.length; i++){
    if(arr[i]>=0){
        console.log(a[i]);
    }
}
}

arr=[0,1,0,1,1,0,0,1,1,0,1,0,1];
function count(arr){
    var count0;
    var count1;
    for(i=0;i<arr.length; i++){
        if(arr[i===0]){
            count0++;
        }
        else{
            count1++;
        }
    }
    return[count0, count1]
}
var op = count(arr);
console.log(op);

