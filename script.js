console.log('jiji')

const script2 = 'https://cdn.jsdelivr.net/gh/DevAbishek/zecko-cdn/script2.js'

function loadScript(scriptURL) {
    console.log('kmk')
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    console.log('done')
}
loadScript(script2);
console.log('done2')