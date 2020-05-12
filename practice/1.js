// 浅克隆 只把第一级拷贝一份赋值给新的数组。
let arr1 = [10, 20, [30, 40]];
// let arr2 = arr1.slice(0);
// let arr2 = arr1.concat();
// let arr2 = [...arr1];

// 深克隆  不仅克隆第一级，如果存在多级，把每一级都克隆一份赋值给新数组的每一个级别
let arr2 = JSON.parse(JSON.stringify(arr1));
// 先把对象变成字符串，再转成对象，就开辟了新的内存
// 注意: 正则会被JSON.stringify转为{};f，undefined,Symbol都会转为null。
// 但对于 数字/字符串/布尔值/null/普通对象/数组对象 都没有影响
// 注意：Date被stringify转成字符串之后，parse转不回原date格式。

function cloneDeep(obj) {
    if (obj === null) return null;
    if (typeof obj !== 'object') return obj;
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);

    // 如果传递的是数组和对象，我们需要创建一个新的数组或对象，用来存储原有的数据。
    // obj.constructor 获取当前值的构造器,用来分辨类型
    let cloneObj = new obj.constructor;
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) break;
        cloneObj[key] = cloneDeep(obj[key])
    }
    return cloneObj;
}console.log(arr1)
// let arr1 = [10, '20', true, null, undefined];
// let arr2 = cloneDeep(arr1);
// let obj1 = {
//     name: 'hah',
//     age: 10,
//     state: true,
//     fn: function () { },
//     reg: /\d+/,
//     0: null
// };
// let obj2 = cloneDeep(obj1)
// 递归的方式
