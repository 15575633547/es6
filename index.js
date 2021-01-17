// var i=10;
// {
//     let a=12;
//     console.log(a);
// }

// console.log(i);


// let [a,b,c,d,e="1.2"]=['张俊峰',2,3,4,undefined];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let {id,name}={id:1,name:'张俊峰'}
// console.log(id+"\t"+name);

// let a;
// ({a}={a:'张俊峰'});
// console.log(a);


// function taiji (...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
//     console.log(arg[4]);
// }
// taiji (0,1,2,3);




// let a = [1,2,3,];
// let b= a;
// console.log("a赋值给b="+b);
// b.push(5);
// let d=[1,2,3,];
// let c =[...d];
// c.push(4);
// console.log("a="+a);
// console.log("d="+d);
// console.log("b="+b);
// console.log("c="+c);



// function taiji (first,...arg){
//    console.log("length="+arg.length);
//    console.log("first="+first);
// }
// taiji (0,1,2,3,4,5,6,7);


// function taiji (first,...arg){
//     for(var a of arg){
//         console.log(a);
//     }
// }
// taiji (0,1,2,3,4,5,6,7);


// let lj='lj';
// let blog = '最佳答案: 你安装版本时,选桌面lj版本,或命令版本, 你安装是winserver2012, 建议格了,再重装,安时,看清,是桌面版本。 NT6.0,安装..';
// document.write(blog.includes(lj));
// document.write(blog.indexOf(lj));
// document.write(blog.startsWith(lj));
// document.write(blog.endsWith(lj));
// document.write('3#'.repeat(3));



// //如何判断是不是数字
// let a=11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('zjf'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// //判断NaN
// //ES5
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log("{}"+isNaN({}));
// //ES6
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log("{}"+Number.isNaN({}));
// console.log(Number.isNaN(100+'2'));

// //转换为整数
// let aa=10.2;
// console.log(Number.parseInt(aa));
// console.log(Number.isInteger(aa));
// console.log(Number.parseFloat(aa));

// //整数操作范围
// let ha = Math.pow(2,53)-1;
// console.log(ha);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// //ES6中新增数组方法
// var json = {
//     '0':'1',
//     '1':'红军分',
//     '2':'1000',
//      length:3
// }
// var a1=Array.from(json);
// console.log(a1);

// var a2=Array.of(3,4,5,6);
// console.log(a2);


// //find方法.取得是值
// var a3=[1,2,3,4,5,6];
// var v=a3.find((value,index,a3)=>{
//     return index>4;
// });
// console.log(v);


// //findindex方法，取得是下标
// var a4=[1,2,3,4,5,6];
// var v2=a4.findIndex((value)=>value>4);
// console.log(v2);


//数组去重
// var a1=[1,2,3,4,5,6,6];
// console.log(a1.filter((value,index,a1)=>a1.indexOf(value)===index));



//fill方法 ,[1,3)的方式填充
// var a=[1,2,3,4,5,6];
// console.log(a);
// a.fill(9,1,3);
// console.log(a);


// //输出数组下标
//  var a=['a','b','c','d'];
//  for(var index of a.keys()){
//      console.log(index);
//  }
// //输出下标和内容
//  let arr=['lj','梁娟','太极公司'];
//  for(let [index,val] of arr.entries()){
//      console.log(index+':'+val);
//  } 

// //entries方法切分数组
//  var list =arr.entries();
//  console.log(list);
//  console.log(list.next().value);
//  console.log(list.next().value);


 //ES6箭头函数 
 
 //ES5写法
//  'use strict'//严谨模式，放在函数体内有时会报错，例如设定默认值
//  function add(a,b=1){
    
//      //抛异常
//      if(a===0){
//          throw new Error("error");
//      }
//     return a+b;
//  }

//  console.log(add(1));
//  console.log(add.length);//可以获取方法de参数个数


// //ES6写法
// var add=(a,b=1)=>a+b;
// console.log(add(1));
// var add2 =(a,b=1)=>{
//     console.log('fang法内有多余的时使用方法体');
//     return a+b;
// } 
// console.log('fang法内有多余的时使用方法体='+add2(3));

//对象的参数
// var json = {
//     a:'ji',
//     b:'hahha'
// }
// function fun ({a,b}){
//     console.log(a+"\t"+b);
// }
// fun(json);

// //数组的函数结构

// var a=[1,2,3];
// function fun1(a,b,c){
//     console.log(a,b,c);

// }
// fun1(...a);

// //in的用法
// var obj = {
//     a:'ji',
//     b:'hahha',
//     c:'c'
// }
// console.log('c' in obj);


// //数组判断,
// var arr= [0,,,,];
// console.log(arr.length);//也会判断有长度
// console.log(0 in arr);//数组的下标位置是否为空


//数组遍历
// var a=['hahah',2,3];
// a.forEach((val,index)=>console.log(index,val));

// a.filter(x=>console.log(x));
// //遍历并可以替换
// console.log(a.map(x=>"web"));
// //数组转换为字符串
// console.log(a.toString());
// //加间隔符
// console.log(a.join('/'));


// //duixiang
// var id='ha';
// var name = 'jk';
// var obj = {id,name};
// console.log(obj);

// //key值的构建
// var key ="skill";
// var obje={
//     [key]:'web'
// }
// console.log(obje.skill);


// //自定义对象方法
// var obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));

// //比较
// var obj1 = {id:1};
// var obj2 = {id:1};
// console.log(obj1.id===obj2.id);
// console.log(Object.is(obj1.id,obj2.id));

// //同值相等，is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

// //assign
// var a={a:1};
// var b={b:2};
// var c={c:3};
// var d=Object.assign(a,b,c);
// console.log(d);


//Symbol ES6新增的
// var a = Symbol();//ES6一种新的类型
// console.log(typeof(a));
// var ha = Symbol('哈');
// console.log(ha);

// console.log(ha.toString());

// var key =Symbol;
// var obje={
//     [key]:'web'
// }
// console.log(obje[key]);
// obje[key]='hahah';
// console.log(obje[key]);


//Symbol 的保护作用
// var obj = {id:'df',name:'hjd'};
// for(var item in obj){
//     console.log(obj[item]);
// }
// var obj1 = {name:'hjd',age:18};
// var id=Symbol();
// obj1[id]='huxin';
// console.log(obj1);//id会添加进obj1 中，数据类型为Symbol,
// for(var item in obj1){//循环打印是不会打印id（Symbol）
//     console.log(obj1[item]);
// }


//Set的声明
//Set和Array的区别 Set不允许有重复的值，如果有只显示一个，Set不是数组 

// var setArr = new Set([1,2,3,4,4]);//会自动去重
// console.log(setArr);
// setArr.add(5);//增
// console.log(setArr);
// setArr.delete(3);
// console.log(setArr);//删
// //setArr.clear();//删全部
// console.log(setArr);

// console.log(setArr.has(2));
// for(var i of setArr){//遍历
//     console.log(i);
// }

// setArr.forEach((value)=>console.log(value));//遍历
// console.log( setArr.size);


// var s = new Set();
// [1,2,3,4,5,6,7,8].forEach(x=>s.add(x));
// for(var i of s){
//     console.log(i)
// }

// var weakObj = new WeakSet();
// var obj = {a:1,b:2};
// var obj1 = {a:1,b:2};
// var obj2 = obj;
// weakObj.add(obj);
// weakObj.add(obj2);
// weakObj.add(obj1);
// console.log(weakObj)


//json数据
// var json = {
//     id:'a',
//     name:'huxin'

// };
// console.log(json.id);

// //map数据类型
// var map = new Map();
// map.set(json,'i am');
// console.log(map);

// map.set('i am',json);
// console.log(map);

// //map 转成数组
// console.log([...map]);

// //map取值
// console.log(map.get(json));
// map.delete('i am');
// console.log(map);

// //map大小
// console.log(map.size);

 //proxy预处理
//  var obj = {
//      add:function(val){
//          return val+100;
//      },
//      name :'hjaskhdk'

//  }
//  console.log(obj.add(100));
//  console.log(obj.name);

// var e = {
//     id:'fdsa',
//     name:'dfsadf'
// };
// console.group('e');
// console.log(e.id);
// console.log(e.name);
// console.log(e.org);
// console.log(e.fullName);
// var hander ={
//     get: 
//     function(target,fieldName){
//         if(fieldName==='fullName'){
//             return  `${target.id} ${target.name}`;

//         }
//         return fieldName in target ?
//         target[fieldName] :
//         `No such property as, '${fieldName}'!'`;
//     }
// };
// var p = new Proxy(e,hander);
// console.group('proxy');
// console.log(p.id);
// console.log(p.name);
// console.log(p.log);
// console.log(p.fullName);


// var vale = {
//     set:
//     function(obj,prop,value){
//         if(prop==='age'){
//         if(!Number.isInteger(value)){
//             throw new TypeError('age is an Intager');

//         }
//         if(value<0){
//             throw new TypeError('this is insane');
//         }
//       }
//     }
// };
// var pr = new Proxy(e,vale);

// pr.age = 1.0;


// var pro=new Proxy({
//     add:function(val){
//         return val+100;
//     },
//     name:'sdjkhfj',
// },{
//    get:
//    function(target,key,property){
//        console.log('come in Get');
//        return target[key];
//    },
//    set:
//    function(target,key,value,recriver){
//        console.log(`setting ${key}=${value}`);
//        return target[key] = value+'222';
//    }

// });
// console.log(pro.add(3));
// console.log(pro.name);
// pro.name = 'huxin';
// console.log(pro.name);

// //apply的使用
// var target  = function(val){
//     console.log('olsadjf');
//     return val +=100;

// }
// var hander = {
//     apply(target ,ctx,args){
//         console.log('sdkjhf');
//         return Reflect.apply(...arguments);

//     }
// } 
// var pro = new Proxy(target,hander);
// console.log(pro(5));
         


// let state = 1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭完成')
//     }else{
//         reject('洗菜做饭-错误')
//     }
// }
// // // // //
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭')
//     }else{
//         reject('坐下来吃饭-错误')
//     }
// }
// // //
// function step3(resolve,reject){
//     // state = 0;
//     console.log('3.开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子')
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
// // // //
// new Promise(step1).then(function(val){
//         console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
// });


// class Coder {
//     name(val){
//         console.log(val);
//     }
//      skill(val){
//      console.log(this.name('kldf')+' skill='+val);
//     }
// //类的传参
//     constructor(c,d){
//         this.c=c;
//         this.d=d;
//     }

//     add(){
//         return this.c+this.d;

//     }


// }

// var b = new Coder;
// b.name('name');
// b.skill('skill');

// var e = new Coder(1,2);
// console.log(e.add());



//  var a = new Coder;
//  a.name('dhfjk');
    

// //类可以继承
//  class htmler extends Coder{

//  }

//  var htmleraa = new htmler;
// console.log('htmleraa.c=' +htmleraa.name('sdhf'));


// //模块化，可以在另一个js文件中引用，import{a} from './xx.js'
// export var a = 'sdf'
// var b =1;
// var c=2;
// var d=3;
// export {b,c,d};//也可以一起引入，需先模块化包装一下
// //export default模块化方式只能出现一次





