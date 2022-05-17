/*
If a method has a cyclomatic complexity of 10, it means there are 10 independent paths through the method. 
This implies is that at least 10 test cases are needed to test all the different paths through the code. The lesser the number, the easier it is to test

We Can change the value of cyclomatic complexity, its set to 10 in the current example.
*/
function test(num){

    if(num<10)
        return 1;
    if(num<100)
        return 2;
    if(num<1000)
        return 3;
    if(num<10000)
        return 4;
    if(num<100000)
        return 5;
    if(num<1000000)
        return 6;
    if(num<1000000)
        return 7;
    if(num<10000000)
        return 8;
    if(num<100000000)
        return 9;

    if(num<1000000000)
        return 10;
    if(num<10000000000)
        return 11;
    return 1;

}