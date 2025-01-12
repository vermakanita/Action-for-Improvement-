public class SquareP {

    public static void main(String[] args) {
        // inner loop show -> row single
        // outer loop n times 1 to n
        int n =4;
        for(int i=1; i<=n; i++){

            for (int j=1; j<=n; j++){
                System.out.print(j);
            }
            System.out.println( );
        }
    }
}