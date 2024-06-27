class BoxShadowGenerator {
    constructor(horizontal,horizontalRef, vertical,verticalRef, blur,blurRef, spread, spreadRef,previewBox,rule,webKitRule,mozRule) {

        this.horizontal= horizontal
        this.horizontalRef= horizontalRef
        this.vertical = vertical
        this.verticalRef = verticalRef
        this.blur = blur
        this.blurRef = blurRef
        this.spread = spread
        this.spreadRef = spreadRef
        this.previewBox = previewBox
        this.rule = rule
        this.webKitRule = webKitRule
        this.mozRule = mozRule
    }
}
// Seleção de Elementos
const horizontal = document.querySelector("#horizontal")
const horizontalRef = document.querySelector("#horizontal-value")
const vertical = document.querySelector("#vertical")
const verticalRef = document.querySelector("#vertical-value")
const blur = document.querySelector("#blur")
const blurRef = document.querySelector("#blur-value")
const spread = document.querySelector("#spread")
const spreadRef = document.querySelector("#spread-value")

const previewBox = document.querySelector("#box")

const rule = document.querySelector("#rule span")
const webKitRule = document.querySelector("#web-kit-rule span")
const mozRule = document.querySelector("#moz-rule span")

const boxShadow = new BoxShadowGenerator(horizontal,horizontalRef, vertical,verticalRef, blur,blurRef, spread, spreadRef,previewBox,rule,webKitRule,mozRule);

console.log(boxShadow)
// Eventos