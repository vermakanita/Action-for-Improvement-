package Vectors;

import java.util.Vector;

public class CreateV {
    public static void main(String args[]){
        Vector<Integer> vec = new Vector<>();
        vec.add(10);
        vec.add( 20);
        System.out.println(vec.get(0));
    }
}
