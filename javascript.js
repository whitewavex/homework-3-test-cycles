// 3.

var arr = [70, 565, 45, 100, 407];
var result = arr[0];
for( i = 1; i < 5; i++) {
    if( result < arr[i] ){
        result = arr[i];
    }
}

document.write( '<p>Наибольшее число массива - ' + result + '</p>' );


// 4.
var arr = [10, 20, 45, 70, 24];
var sum = 0;

for( i = 0; i < 5; i++ ){
    sum = arr[i] + sum;
}

var result = sum/arr.length;

document.write( '<p>Среднее арифметическое ячеек массива равно: ' + result + '</p>' ); 

// 5

var array = [];

for( var i = 0; i < 6; i++ ) {
    array[i] = [];
    document.write( '<br>' );
    for( var j = 0; j < 6; j++ ) {
        array[i].push( 0 );
    }
    
    var result = array[i].slice( 0, i+1 );
    
    document.write( result );
}