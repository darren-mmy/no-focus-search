import Cookies from 'js-cookie'
export function setCookie(name, value, expires = 7) {
    Cookies.set(name, value, { expires: expires })
}

export function getCookie(name) {
    return Cookies.get(name)
}

export function removeCookie(name) {
    return Cookies.remove(name)
}

export const debounce = function(func, wait = 1000) {
    let timeout;
    return function(...arg) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.call(this, arg);
        }, wait);
    };
};
export function throttle(func, wait = 1000) {
    let flag = true;
    let timeout;
    return function () {
        if (flag) {
            flag = false;
            setTimeout(() => {
                flag = true;
            }, wait);
            func(...arguments);
            // func.call(this, ...arguments);
            // func.apply(this, arguments); // 运行时这里的 this 为 App组件，函数在 App Component 中运行
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, arguments);
            }, wait);
        }
    };
}