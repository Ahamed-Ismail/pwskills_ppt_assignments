public class MyClass {

    public static void moveZero(int arr[]){
        int i=0,c=0;
        while(i<arr.length){
            if(arr[i]!=0){
                arr[c]=arr[i];
                c++;
            }
            i++;
        }
        while(c<arr.length){
            arr[c]=0;
            c++;
        }
    }
    
     
    public static void main(String[] args)
    {
        int arr[]={0,1,0,3,12};
        moveZero(arr);
        for(int i:arr){
            System.out.println(i);
        }
    }
}	