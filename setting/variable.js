// variable.js
// 変数定義
const variable = Object.freeze({
    rootFontSize:16,
    maxViewportWidth:1440,
    minViewportWidth:375,
    dpi: {
        web: 96,
        print: 300,
        legacy: 72,
    },
});

export { variable };
