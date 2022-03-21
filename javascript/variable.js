function camelCaseTest(){
    let abcdsed;
    //Not in a camel case identified by Program
    let abc_aa;
    let abcAA;
    let _aaaaaa;
    let _Anand;
}

function variableWithSingleCharacter(){
    //Violates the Naming convention
    let x;
    let xy;
}
//It will show error for a single character for w and z, but not for i
function iteratingVarInLoop(){
    let w=0;
    for(let i=0;i<10;i++){
        let z=0;
    }

}
