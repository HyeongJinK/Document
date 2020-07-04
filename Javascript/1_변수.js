// 변수 
// var
// 선언이 가장 위로 올라감
// 함수스코프&블록스코프
// 전역변수 지역변수
// 기본타입과 참조타입
// call by value
// call by reference  객체, 배열

const log = console.log;

function var0() {
    log(a); // 
}
//a0();

function var1() {
    log(a); //
    var a = 1;
    log(a); //
}
//a1();

function var2() {
    for (var i = 0; i < 1; i++) {
        var a = 4;
    }
    log(a); //
}

//a2();

var aa = 10;

function var3() {
    var aa = 20;
    log(aa); //

    if (true) {
        var aa = 30;
        log(aa); //
    }
    log(aa); //
}

//a3();

function type0() {
    var a = 10;
    var b = a;

    b = 20;
    log(a); //
}

//type0();

function type1() {
    var a = {a: 10};
    var b = a;
    b.a = 20;

    log(a); //
}

//type1();

function type2() {
    var a = "test";
    var b = a;

    b = "ttt";

    log(a);
}

type2();


var aa = 10;

function this0() {
    log(this);
}

// this0();    // Window

var f1 = {this2 : function() {log(this)}}
var f2 = {this3 : () => {log(this)}}