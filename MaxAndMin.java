public class MaxAndMin {
    public static void main (String args[]){
        int num[]={1,3,24,-98};
        int size = 4;
        int max =0;
        int min = 0;
        for (int i=0;i<size-1;i++){
            if(max<i){
             int temp= min;
             min= max;
             max = temp;
            }
        }
        System.out.println(min);
    }
}
