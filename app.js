var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tasks = [
    { id: 1, text: "Buy milk", done: true },
    { id: 2, text: "Go to gym", done: true },
    { id: 3, text: "Learn TypeScript", done: true },
];
tasks.push({ id: 4, text: "Read book", done: false });
tasks = __spreadArray(__spreadArray([], tasks, true), [{ id: 5, text: "Read book", done: true }], false);
console.log(tasks);
var testid = 3;
tasks = tasks.map(function (task) { return task.id == testid ? __assign(__assign({}, task), { text: "Read book" }) : task; });
tasks = tasks.map(function (task) { return task.id == testid ? __assign(__assign({}, task), { done: !task.done }) : task; });
tasks = tasks.filter(function (task) { return task.done !== true; });
tasks = tasks.map(function (task) { return (__assign(__assign({}, task), { text: "updated" })); });
console.log(tasks);
