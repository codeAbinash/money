const o="money";function n(e,t){localStorage.setItem(o+"."+e,t.toString())}function l(e){return localStorage.getItem("money."+e)}function c(){localStorage.clear()}const a={set:n,get:l,clear:c},r=a;export{r as l};