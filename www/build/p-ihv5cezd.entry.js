import{r as s,h as r}from"./p-f6bced52.js";class t{constructor(r){s(this,r),this.cols=1,this.gap=0}render(){return r("div",{class:`grid grid--cols-${this.cols} grid--gap-${this.gap} ${this.class}`},r("slot",null))}static get style(){return".grid{display:grid}.grid--cols-1{grid-template-columns:repeat(1,1fr)}.grid--cols-2{grid-template-columns:repeat(2,1fr)}.grid--cols-3{grid-template-columns:repeat(3,1fr)}.grid--cols-4{grid-template-columns:repeat(4,1fr)}.grid--gap-1{grid-gap:1rem}.grid--gap-2{grid-gap:2rem}.grid--gap-3{grid-gap:3rem}.grid--gap-4{grid-gap:4rem}\@media screen and (max-width:1100px){.grid--cols-3,.grid--cols-4{grid-template-columns:repeat(2,1fr)}}\@media screen and (max-width:600px){[class*=grid--cols]{grid-template-columns:repeat(1,1fr)}}"}}export{t as ui_grid};