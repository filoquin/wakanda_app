(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9NiU":function(t,e,o){"use strict";o.r(e),o.d(e,"routes",(function(){return d})),o.d(e,"FaqModule",(function(){return b}));var r=o("ofXK"),n=o("fXoL"),a=o("xzt6");let i=(()=>{class t{constructor(t){this.odooRPC=t}getFaqs(){return this.odooRPC.searchRead("wak.faq",[],["name","display_name","html"])}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(a.a))},t.\u0275prov=n.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function c(t,e){if(1&t){const t=n.Mb();n.Lb(0,"div",6),n.Lb(1,"div",7),n.Lb(2,"div",8),n.Lb(3,"div",9),n.Lb(4,"a",10),n.Sb("click",(function(e){return n.gc(t),n.Ub().clickToggle(e)})),n.Jb(5,"img",11),n.Kb(),n.Kb(),n.Lb(6,"div",12),n.lc(7),n.Kb(),n.Kb(),n.Kb(),n.Lb(8,"div",13),n.Lb(9,"div",14),n.Lb(10,"div",15),n.Jb(11,"div",16),n.Kb(),n.Kb(),n.Kb(),n.Kb()}if(2&t){const t=e.$implicit,o=e.index;n.xb(1),n.cc("id","heading-",o,""),n.xb(3),n.cc("href","#faq",o,"",n.ic),n.xb(3),n.nc(" ",t.display_name," "),n.xb(1),n.bc("id","faq"+o),n.xb(3),n.ac("innerHTML",t.html,n.hc)}}let s=(()=>{class t{constructor(t){this.wknFaqService=t,this.faqs=null,this.wknFaqService.getFaqs().then(t=>{console.log(t),this.faqs=t.records}).catch(t=>{console.log("errors"+t)})}ngOnInit(){}clickToggle(t){console.log("clickeando"),t.target.classList.contains("rotate-img")?(t.target.classList.add("reverse-rotate-img"),t.target.classList.remove("rotate-img")):(t.target.classList.add("rotate-img"),t.target.classList.remove("reverse-rotate-img"))}}return t.\u0275fac=function(e){return new(e||t)(n.Ib(i))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-faq-list"]],decls:7,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-12","text-center"],[1,"faq","m-2","text-white","p-2"],["id","accordion","role","tablist","aria-multiselectable","true"],["class","row p-2",4,"ngFor","ngForOf"],[1,"row","p-2"],["role","tab",1,"col-12","header-item-faq",3,"id"],[1,"row","m-2","p-0"],[1,"col-2","pl-1","pr-1","my-auto"],["data-toggle","collapse","aria-expanded","false",3,"href","click"],["src","assets/img/right-triangle.png",1,"img-item"],[1,"col-10","text-center","text-white"],["data-parent","#accordion","role","tabpanel",1,"collapse",3,"id"],[1,"card-body"],[1,"row","m-0","p-0"],[1,"col-12",3,"innerHTML"]],template:function(t,e){1&t&&(n.Lb(0,"div",0),n.Lb(1,"div",1),n.Lb(2,"div",2),n.Lb(3,"div",3),n.lc(4,"Preguntas Frecuentes"),n.Kb(),n.Kb(),n.Kb(),n.Lb(5,"div",4),n.kc(6,c,12,5,"div",5),n.Kb(),n.Kb()),2&t&&(n.xb(6),n.ac("ngForOf",e.faqs))},directives:[r.k],styles:[".faq[_ngcontent-%COMP%]{font-size:1.25em}.faq[_ngcontent-%COMP%], .header-item-faq[_ngcontent-%COMP%]{background-color:#f762ad;font-family:AronGrotesque-Black;border-radius:5px}.header-item-faq[_ngcontent-%COMP%]{font-size:.8em}.rotate-img[_ngcontent-%COMP%]{transform:rotate(90deg)}.reverse-rotate-img[_ngcontent-%COMP%]{transform:rotate(0deg)}.img-item[_ngcontent-%COMP%]{width:12px}"]}),t})();var l=o("tyNb");const d=[{path:"",component:s}];let b=(()=>{class t{}return t.\u0275mod=n.Gb({type:t}),t.\u0275inj=n.Fb({factory:function(e){return new(e||t)},imports:[[r.b,l.e.forChild(d)]]}),t})()}}]);