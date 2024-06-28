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

    initialize(){
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.blurRef.value = this.blur.value;
        this.spreadRef.value = this.spread.value;

        this.applyRule();
        this.showRule();
    }
    applyRule(){
        this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px  #000`;
        this.currentRule = this.previewBox.style.boxShadow;
    }
    showRule(){
        this.rule.innerText = this.currentRule;
        this.webKitRule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;
    }
    uptadeValue(type, value){

        switch(type) {
            case "horizontal":
                this.horizontalRef.value = value;
        }
        this.applyRule();
        this.showRule();
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

boxShadow.initialize();
// Eventos
horizontal.addEventListener("input", (e)=>{
    const value = e.target.value;

    boxShadow.uptadeValue("horizontal", value)
})