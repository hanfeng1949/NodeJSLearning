/**
 * Created by hanfeng on 2017/3/29.
 */
var fortuneCookies = [
    "lucky one",
    "lucky two",
    "lucky three",
    "lucky four"
];
exports.getFortune = function () {
    var idx = Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx];
}
