document.write("94.to find the number appearing most frequently in a given array of integers."+"<br>");
function test94(arr){
    var x=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                x.push(arr[i],arr[j])
            }
        }
    }
    return [...new Set(x)];
}
document.write("The array :[1,2,3,2,4] , Ans :"+test94([1,2,3,2,4])+"<br><br>");