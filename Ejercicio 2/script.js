/**
 * Created by rubenperegrina on 26/2/17.
 */

for (var x=1; x <= 100; x++){
    if( x % 3 && x % 5 ) {
        document.write(x);
    } else {
        if( x % 3 == 0 &&  x % 5 == 0 ) {
            document.write("Mult. de los dos");
        }
        else if( x % 5 == 0 ) {
            document.write("Mult. de 5");
        }
        else if( x % 3 == 0 ) {
            document.write("Mult. de 3")
        }
    }
    document.write('<br>');
}