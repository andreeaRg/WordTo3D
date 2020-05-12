
//TRINGHI OARECARE 
var t1 = new THREE.Vector3(-15, 0, 0); t1.name = "B";
var t2 = new THREE.Vector3(-5, 20, 0); t2.name = "A";
var t3 = new THREE.Vector3(20, 0, 0); t3.name = "C";

var t_linie1_2 = new THREE.Line3(t1, t2);
var t_linie2_3 = new THREE.Line3(t2, t3);
var t_linie3_1 = new THREE.Line3(t3, t1);

function triunghiOarecare() {
    sterge();
    addLinieBaza(t_linie1_2);
    // desenUnghiSus(t_linie1_2.start,t_linie1_2.end,t_linie2_3.end);
    addLinieBaza(t_linie2_3);
    // desenUnghiDreaptaJos(t_linie2_3.start,t_linie2_3.end,t_linie3_1.end);
    addLinieBaza(t_linie3_1);
    // desenUnghiStangaJos(t_linie3_1.start,t_linie3_1.end,t_linie1_2.end);
}

//TRIUNGHI ISOSCEL
var t4 = new THREE.Vector3(-20, 0, 0); t4.name = "t4";
var t5 = new THREE.Vector3(20, 0, 0); t5.name = "t5";
var t6 = new THREE.Vector3(0, 20, 0); t6.name = "t6";

var t_linie4_5 = new THREE.Line3(t4, t5);
var t_linie5_6= new THREE.Line3(t5, t6);
var t_linie6_4 = new THREE.Line3(t6, t4);

function triunghiIsoscel() {
    sterge();
    addLinieBaza(t_linie4_5);
    // desenUnghiSus(t_linie4_5.start,t_linie4_5.end,t_linie5_6.end);
    addLinieBaza(t_linie5_6);
    // desenUnghiDreaptaJos(t_linie5_6.start,t_linie5_6.end,t_linie6_4.end);
    addLinieBaza(t_linie6_4);
    // desenUnghiStangaJos(t_linie6_4.start,t_linie6_4.end,t_linie4_5.end);
}


//TRIUNGHI DREPTUNGHIC
var t7 = new THREE.Vector3(-10, 0, 0); t7.name = "t7";
var t8 = new THREE.Vector3(-10, 20, 0); t8.name = "t8";
var t9 = new THREE.Vector3(20, 0, 0); t9.name = "t9";

var t_linie7_8 = new THREE.Line3(t7, t8);
var t_linie8_9 = new THREE.Line3(t8, t9);
var t_linie9_7 = new THREE.Line3(t9, t7);

function triunghiDreptunghic() {
    sterge();
    addLinieBaza(t_linie7_8);
    // desenUnghiSus(t_linie7_8.start,t_linie7_8.end,t_linie8_9.end);
    addLinieBaza(t_linie8_9);
    // desenUnghiDreaptaJos(t_linie8_9.start,t_linie8_9.end,t_linie9_7.end);
    addLinieBaza(t_linie9_7);
    // desenUnghiStangaJos(t_linie9_7.start,t_linie9_7.end,t_linie7_8.end);
}

//TRIUNGHI ECHIATERL
var t10 = new THREE.Vector3(-15, 0, 0); t10.name = "t10";
var t11 = new THREE.Vector3(15, 0, 0); t11.name = "t11";
var latura = new THREE.Line3(t10, t11).distance() ;
var rad =  Math.sqrt(3) / 2 ;
var h = latura * rad;
var t12 = new THREE.Vector3(0, h, 0); t12.name = "t12";

var t_linie10_11 = new THREE.Line3(t10, t11);
var t_linie11_12 = new THREE.Line3(t11, t12);
var t_linie12_10 = new THREE.Line3(t12, t10);
// console.log("l2t_linie10_11 = ",t_linie10_11.distance());
// console.log("t_linie12_10 = ",t_linie12_10.distance());
// console.log("t_linie11_12 = ",t_linie11_12.distance());
 
function triunghiEchilateral() {
    sterge();
    addLinieBaza(t_linie10_11);
    // desenUnghiSus(t_linie10_11.start,t_linie10_11.end,t_linie11_12.end);
    addLinieBaza(t_linie11_12);
    // desenUnghiDreaptaJos(t_linie11_12.start,t_linie11_12.end,t_linie12_10.end);
    addLinieBaza(t_linie12_10);
    // desenUnghiStangaJos(t_linie12_10.start,t_linie12_10.end,t_linie10_11.end);
}

//TRIUNGHI DREPTUNGHIC ISOSCEL
var t13 = new THREE.Vector3(0, 0, 0); t13.name = "t13";
var t14 = new THREE.Vector3(20, 0, 0); t14.name = "t14";
var t15 = new THREE.Vector3(0, 20, 0); t15.name = "t15";

var t_linie13_14 = new THREE.Line3(t13, t14);
var t_linie14_15 = new THREE.Line3(t14, t15);
var t_linie15_13 = new THREE.Line3(t15, t13);

function triunghiDreptunghicIsoscel() {
    sterge();
    addLinieBaza(t_linie13_14);
    // desenUnghiSus(t_linie13_14.start,t_linie13_14.end,t_linie14_15.end);
    addLinieBaza(t_linie14_15);
    // desenUnghiDreaptaJos(t_linie14_15.start,t_linie14_15.end,t_linie15_13.end);
    addLinieBaza(t_linie15_13);
    // desenUnghiStangaJos(t_linie15_13.start,t_linie15_13.end,t_linie13_14.end);
}

//TRIUNGHI Obtuzunghic
var t16 = new THREE.Vector3(0, 0, 0); t16.name = "t16";
var t17 = new THREE.Vector3(20, 0, 0); t17.name = "t17";
var t18 = new THREE.Vector3(-10, 20, 0); t18.name = "t18";

var t_linie16_17 = new THREE.Line3(t16, t17);
var t_linie17_18 = new THREE.Line3(t17, t18);
var t_linie18_16 = new THREE.Line3(t18, t16);

function triunghiObtuzunghic() {
    sterge();
    addLinieBaza(t_linie16_17);
    // desenUnghiSus(t_linie16_17.start,t_linie16_17.end,t_linie17_18.end);
    addLinieBaza(t_linie17_18);
    // desenUnghiDreaptaJos(t_linie17_18.start,t_linie17_18.end,t_linie18_16.end);
    addLinieBaza(t_linie18_16);
    // desenUnghiStangaJos(t_linie18_16.start,t_linie1t_linie18_16_13.end,t_linie16_17.end);
}

//TRIUNGHI Ascutitunghic
var t19 = new THREE.Vector3(-10, 0, 0); t19.name = "t19";
var t20 = new THREE.Vector3(15, 0, 0); t20.name = "t20";
var t21 = new THREE.Vector3(0, 20, 0); t21.name = "t21";

var t_linie19_20 = new THREE.Line3(t19, t20);
var t_linie20_21 = new THREE.Line3(t20, t21);
var t_linie21_19 = new THREE.Line3(t21, t19);

function triunghiAscutitunghic() {
    sterge();
    addLinieBaza(t_linie19_20);
    // desenUnghiSus(t_linie19_20.start,t_linie19_20.end,t_linie20_21.end);
    addLinieBaza(t_linie20_21);
    // desenUnghiDreaptaJos(t_linie20_21.start,t_linie20_21.end,t_linie21_19.end);
    addLinieBaza(t_linie21_19);
    // desenUnghiStangaJos(t_linie21_19.start,t_linie1t_linie21_19_13.end,t_linie19_20.end);
}