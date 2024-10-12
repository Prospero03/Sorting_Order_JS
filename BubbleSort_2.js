let arr = [4,5,6,1,2,3]
    for (j=0; j<arr.length; j++){
        for(i=0; i<arr.length-1; i++){

            if(arr[i]>arr[i+1]){
                temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
            }
        }
    }
console.log(arr);
