let arr = [4,5,6,1,2,3]
    for (j=0; j<arr.length; j++){
        for(i=0; i<arr.length-1; i++){
            let A = arr[i];
            let B = arr[i+1];

            if(A>B){
                temp = A;
                A=B;
                B=temp;
            }

            arr[i]=A;
            arr[i+1]=B;
        }
    }
console.log(arr);
