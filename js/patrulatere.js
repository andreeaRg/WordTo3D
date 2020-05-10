// patrat

var p1 = new THREE.Vector3(0, 0, 0); p1.name = "A";
var p2 = new THREE.Vector3(20, 0, 0); p2.name = "B";
var p3 = new THREE.Vector3(20, 20, 0); p3.name = "C";
var p4 = new THREE.Vector3(0, 20, 0); p4.name = "D";

var p_linie1_2 = new THREE.Line3(p1, p2);
var p_linie2_3 = new THREE.Line3(p2, p3);
var p_linie3_4 = new THREE.Line3(p3, p4);
var p_linie4_1 = new THREE.Line3(p4, p1);

function patrat() {
    sterge();
    addLinieBaza(p_linie1_2);
    addLinieBaza(p_linie2_3);
    addLinieBaza(p_linie3_4);
    addLinieBaza(p_linie4_1);
}

function patratDeVar(p1, p2, p3, p4) {
    p1.name = "A";
    p2.name = "B";
    p3.name = "C";
    p3.name = "D";

    p_linie1_2 = new THREE.Line3(p1, p2);
    p_linie2_3 = new THREE.Line3(p2, p3);
    p_linie3_4 = new THREE.Line3(p3, p4);
    p_linie4_1 = new THREE.Line3(p4, p1);

    sterge();
    addLinieBaza(p_linie1_2);
    addLinieBaza(p_linie2_3);
    addLinieBaza(p_linie3_4);
    addLinieBaza(p_linie4_1);
}

// PARALELOGRAM

var p5 = new THREE.Vector3(0, 0, 0); p5.name = "A";
var p6 = new THREE.Vector3(20, 0, 0); p6.name = "B";
var p7 = new THREE.Vector3(30, 20, 0); p7.name = "C";
var p8 = new THREE.Vector3(10, 20, 0); p8.name = "D";

var p_linie5_6 = new THREE.Line3(p5, p6);
var p_linie6_7 = new THREE.Line3(p6, p7);
var p_linie7_8 = new THREE.Line3(p7, p8);
var p_linie8_5 = new THREE.Line3(p8, p5);

function paralelogram() {
    sterge();
    addLinieBaza(p_linie5_6);
    addLinieBaza(p_linie6_7);
    addLinieBaza(p_linie7_8);
    addLinieBaza(p_linie8_5);
}

function paralelogramDeVar(p1, p2, p3, p4) {
    p1.name = "A";
    p2.name = "B";
    p3.name = "C";
    p3.name = "D";

    p_linie1_2 = new THREE.Line3(p1, p2);
    p_linie2_3 = new THREE.Line3(p2, p3);
    p_linie3_4 = new THREE.Line3(p3, p4);
    p_linie4_1 = new THREE.Line3(p4, p1);
    
    sterge();
    addLinieBaza(p_linie1_2);
    addLinieBaza(p_linie2_3);
    addLinieBaza(p_linie3_4);
    addLinieBaza(p_linie4_1);
}

// romb 

var p9 = new THREE.Vector3(0, 48, 0); p9.name = "A";
var p10 = new THREE.Vector3(20, 0, 0); p10.name = "B";
var p11 = new THREE.Vector3(0, -48, 0); p11.name = "C";
var p12 = new THREE.Vector3(-20, 0, 0); p12.name = "D";// mumerele pitagoricesti (5,12,13)

var p_linie9_10 = new THREE.Line3(p9, p10);
var p_linie10_11 = new THREE.Line3(p10, p11);
var p_linie11_12 = new THREE.Line3(p11, p12);
var p_linie12_9 = new THREE.Line3(p12, p9);

function romb() {
    sterge();
    addLinieBaza(p_linie9_10);
    addLinieBaza(p_linie10_11);
    addLinieBaza(p_linie11_12);
    addLinieBaza(p_linie12_9);
}

function rombDeVar(p1, p2, p3, p4) {
    p1.name = "A";
    p2.name = "B";
    p3.name = "C";
    p3.name = "D";

    p_linie1_2 = new THREE.Line3(p1, p2);
    p_linie2_3 = new THREE.Line3(p2, p3);
    p_linie3_4 = new THREE.Line3(p3, p4);
    p_linie4_1 = new THREE.Line3(p4, p1);
    
    sterge();
    addLinieBaza(p_linie1_2);
    addLinieBaza(p_linie2_3);
    addLinieBaza(p_linie3_4);
    addLinieBaza(p_linie4_1);
}

// trapez dreptunghic

var p13 = new THREE.Vector3(0, 0, 0); p13.name = "A";
var p14 = new THREE.Vector3(30, 0, 0); p14.name = "B";
var p15 = new THREE.Vector3(20, 20, 0); p15.name = "C";
var p16 = new THREE.Vector3(0, 20, 0); p16.name = "D";

var p_linie13_14 = new THREE.Line3(p13, p14);
var p_linie14_15 = new THREE.Line3(p14, p15);
var p_linie15_16 = new THREE.Line3(p15, p16);
var p_linie16_13 = new THREE.Line3(p16, p13);

function trapezDrept() {
    sterge();
    addLinieBaza(p_linie13_14);
    addLinieBaza(p_linie14_15);
    addLinieBaza(p_linie15_16);
    addLinieBaza(p_linie16_13);
}

function trapezDreptDeVar(p1, p2, p3, p4) {
    p1.name = "A";
    p2.name = "B";
    p3.name = "C";
    p3.name = "D";

    p_linie1_2 = new THREE.Line3(p1, p2);
    p_linie2_3 = new THREE.Line3(p2, p3);
    p_linie3_4 = new THREE.Line3(p3, p4);
    p_linie4_1 = new THREE.Line3(p4, p1);
    
    sterge();
    addLinieBaza(p_linie1_2);
    addLinieBaza(p_linie2_3);
    addLinieBaza(p_linie3_4);
    addLinieBaza(p_linie4_1);
}

// trapez oarecare
var p17 = new THREE.Vector3(-10, 0, 0); p17.name = "A";
var p18 = new THREE.Vector3(30, 0, 0); p18.name = "B";
var p19 = new THREE.Vector3(20, 20, 0); p19.name = "C";
var p20 = new THREE.Vector3(0, 20, 0); p20.name = "D";

var p_linie17_18 = new THREE.Line3(p17, p18);
var p_linie18_19 = new THREE.Line3(p18, p19);
var p_linie19_20 = new THREE.Line3(p19, p20);
var p_linie20_17 = new THREE.Line3(p20, p17);

function trapez() {
    sterge();
    addLinieBaza(p_linie17_18);
    addLinieBaza(p_linie18_19);
    addLinieBaza(p_linie19_20);
    addLinieBaza(p_linie20_17);
}

function trapezDeVar(p1, p2, p3, p4) {
    p1.name = "A";
    p2.name = "B";
    p3.name = "C";
    p3.name = "D";

    p_linie1_2 = new THREE.Line3(p1, p2);
    p_linie2_3 = new THREE.Line3(p2, p3);
    p_linie3_4 = new THREE.Line3(p3, p4);
    p_linie4_1 = new THREE.Line3(p4, p1);
    
    sterge();
    addLinieBaza(p_linie1_2);
    addLinieBaza(p_linie2_3);
    addLinieBaza(p_linie3_4);
    addLinieBaza(p_linie4_1);
}

//  trapez isoscel
var p21 = new THREE.Vector3(-20, 0, 0); p21.name = "A";
var p22 = new THREE.Vector3(20, 0, 0); p22.name = "B";
var p23 = new THREE.Vector3(10, 20, 0); p23.name = "C";
var p24= new THREE.Vector3(-10, 20, 0); p24.name = "D";

var p_linie21_22 = new THREE.Line3(p21, p22);
var p_linie22_23 = new THREE.Line3(p22, p23);
var p_linie23_24 = new THREE.Line3(p23, p24);
var p_linie24_21 = new THREE.Line3(p24, p21);

function trapezIsoscel() {
    sterge();
    addLinieBaza(p_linie21_22);
    addLinieBaza(p_linie22_23);
    addLinieBaza(p_linie23_24);
    addLinieBaza(p_linie24_21);
}

function trapezIsoscelDeVar(p1, p2, p3, p4) {
    p1.name = "A";
    p2.name = "B";
    p3.name = "C";
    p3.name = "D";

    p_linie1_2 = new THREE.Line3(p1, p2);
    p_linie2_3 = new THREE.Line3(p2, p3);
    p_linie3_4 = new THREE.Line3(p3, p4);
    p_linie4_1 = new THREE.Line3(p4, p1);
    
    sterge();
    addLinieBaza(p_linie1_2);
    addLinieBaza(p_linie2_3);
    addLinieBaza(p_linie3_4);
    addLinieBaza(p_linie4_1);
}

// dreptunghi

var p25 = new THREE.Vector3(-20, 0, 0); p25.name = "A";
var p26 = new THREE.Vector3(20, 0, 0); p26.name = "B";
var p27 = new THREE.Vector3(10, 20, 0); p27.name = "C";
var p28= new THREE.Vector3(-10, 20, 0); p28.name = "D";

var p_linie25_26 = new THREE.Line3(p25, p26);
var p_linie26_27 = new THREE.Line3(p26, p27);
var p_linie27_28 = new THREE.Line3(p27, p28);
var p_linie28_25 = new THREE.Line3(p28, p25);

function dreptunghi() {
    sterge();
    addLinieBaza(p_linie25_26);
    addLinieBaza(p_linie26_27);
    addLinieBaza(p_linie27_28);
    addLinieBaza(p_linie28_25);
}

function dreptunghiDeVar(p1, p2, p3, p4) {
    p1.name = "A";
    p2.name = "B";
    p3.name = "C";
    p3.name = "D";

    p_linie1_2 = new THREE.Line3(p1, p2);
    p_linie2_3 = new THREE.Line3(p2, p3);
    p_linie3_4 = new THREE.Line3(p3, p4);
    p_linie4_1 = new THREE.Line3(p4, p1);
    
    sterge();
    addLinieBaza(p_linie1_2);
    addLinieBaza(p_linie2_3);
    addLinieBaza(p_linie3_4);
    addLinieBaza(p_linie4_1);
}