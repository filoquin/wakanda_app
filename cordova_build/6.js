(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{fAJX:function(t,e,o){"use strict";o.r(e),o.d(e,"routes",(function(){return _})),o.d(e,"OrdersModule",(function(){return C}));var r=o("ofXK"),c=o("fXoL"),i=o("IKdg");function n(t,e){if(1&t&&(c.Ob(0,"div",29),c.Ob(1,"div",30),c.Ob(2,"small"),c.tc(3),c.Nb(),c.Nb(),c.Ob(4,"div",31),c.Ob(5,"small"),c.tc(6),c.Nb(),c.Nb(),c.Ob(7,"div",32),c.Ob(8,"small"),c.tc(9),c.Yb(10,"currency"),c.Nb(),c.Nb(),c.Nb()),2&t){const t=e.$implicit;c.xb(3),c.vc("",t.product_id[1]," "),c.xb(3),c.uc(t.product_uom_qty),c.xb(3),c.vc(" ",c.bc(10,3,t.price_total,"$",!0,"2.0"),"")}}function d(t,e){if(1&t&&(c.Ob(0,"div"),c.sc(1,n,11,8,"div",28),c.Nb()),2&t){const t=c.Xb().$implicit;c.xb(1),c.ec("ngForOf",t.orderLines)}}function s(t,e){if(1&t){const t=c.Pb();c.Ob(0,"div",12),c.Ob(1,"div",13),c.Ob(2,"div"),c.Ob(3,"div",14),c.Ob(4,"a",15),c.Vb("click",(function(o){c.lc(t);const r=e.$implicit;return c.Xb().clickToggle(o,r)})),c.Kb(5,"img",16),c.Nb(),c.Nb(),c.Ob(6,"div",17),c.tc(7),c.Yb(8,"date"),c.Nb(),c.Ob(9,"div",18),c.tc(10),c.Nb(),c.Ob(11,"div",19),c.tc(12),c.Yb(13,"currency"),c.Nb(),c.Nb(),c.Nb(),c.Ob(14,"div",20),c.Ob(15,"div",21),c.Ob(16,"div",22),c.Ob(17,"div",3),c.Ob(18,"div",2),c.Ob(19,"div",23),c.Ob(20,"h6"),c.Ob(21,"strong"),c.Ob(22,"u"),c.tc(23,"Resumen del Pedido"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(24,"div",24),c.Ob(25,"div",25),c.Ob(26,"strong"),c.tc(27,"Producto"),c.Nb(),c.Nb(),c.Ob(28,"div",10),c.Ob(29,"strong"),c.tc(30,"Cantidad"),c.Nb(),c.Nb(),c.Kb(31,"div",26),c.Nb(),c.sc(32,d,2,1,"div",27),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()}if(2&t){const t=e.$implicit,o=e.index,r=e.odd;c.xb(1),c.gc("id","heading-",o,""),c.xb(1),c.Ab("row  p-0  ",r?"odd":"even",""),c.xb(2),c.gc("href","#order",o,"",c.oc),c.xb(3),c.vc(" ",c.ac(8,10,t.date_order,"dd/MM/yyyy")," "),c.xb(3),c.vc(" ",t.display_name," "),c.xb(2),c.vc(" ",c.bc(13,13,t.amount_total,"$",!0,"2.0")," "),c.xb(2),c.fc("id","order"+o),c.xb(18),c.ec("ngIf",t.orderLines)}}let b=(()=>{class t{constructor(t){this.saleOrderService=t,this.orders=[]}ngOnInit(){this.saleOrderService.getMyOrders().then(t=>{console.log(t),this.orders=t.records}).catch(t=>{console.log("errors"+t)})}clickToggle(t,e){console.log("clickeando"),t.target.classList.contains("rotate-img")?(t.target.classList.add("reverse-rotate-img"),t.target.classList.remove("rotate-img")):(t.target.classList.add("rotate-img"),t.target.classList.remove("reverse-rotate-img"),this.saleOrderService.getOrderLines(e.id).then(t=>{console.log(t),e.orderLines=t.records}).catch(t=>{console.log("errors"+t)}),console.log(e))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(i.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-order-list"]],decls:21,vars:1,consts:[[1,"fill","container-main"],[1,"container","mb-5"],[1,"row"],[1,"col-12"],["id","accordion","role","tablist","aria-multiselectable","true",1,"mt-2","mb-5"],[1,"col-12","text-center"],[1,"order","m-2","text-white","p-2"],[1,"col-1","text-center"],[1,"col-3","text-center"],[1,"text-white","p-2"],[1,"col-5","text-center"],["class","pt-2 pb-2",4,"ngFor","ngForOf"],[1,"pt-2","pb-2"],["role","tab",1,"col-12",3,"id"],[1,"col-1","pl-1","pr-1","my-auto"],["data-toggle","collapse","aria-expanded","false",3,"href","click"],["src","assets/img/right-triangle.png",1,"img-item"],[1,"col-3","text-center","text-white"],[1,"col-5","text-center","text-white"],[1,"col-3","text-right","text-white"],["data-parent","#accordion","role","tabpanel",1,"collapse",3,"id"],[1,"card-body","m-1"],[1,"row","m-0","p-0"],[1,"col-12","mt-2"],[1,"row","mt-2","mb-2"],[1,"col-5"],[1,"col-2"],[4,"ngIf"],["ngClass","row ",4,"ngFor","ngForOf"],["ngClass","row "],[1,"col-6","text-left"],[1,"col-2","text-center"],[1,"col-4","text-right"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Ob(3,"div",3),c.Ob(4,"div",4),c.Ob(5,"div",2),c.Ob(6,"div",5),c.Ob(7,"div",6),c.tc(8,"Mis pedidos"),c.Nb(),c.Nb(),c.Nb(),c.Ob(9,"div",2),c.Kb(10,"div",7),c.Ob(11,"div",8),c.Ob(12,"div",9),c.tc(13,"Fecha"),c.Nb(),c.Nb(),c.Ob(14,"div",10),c.Ob(15,"div",9),c.tc(16,"Productos"),c.Nb(),c.Nb(),c.Ob(17,"div",8),c.Ob(18,"div",9),c.tc(19,"Total"),c.Nb(),c.Nb(),c.Nb(),c.sc(20,s,33,18,"div",11),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.xb(20),c.ec("ngForOf",e.orders))},directives:[r.k,r.l,r.j],pipes:[r.e,r.c],styles:[".container-main[_ngcontent-%COMP%]{background-color:#ffd3f2!important;margin-bottom:60px}.order[_ngcontent-%COMP%]{font-size:1.25em}.header-item-order[_ngcontent-%COMP%], .order[_ngcontent-%COMP%]{background-color:#ff5dbc;font-family:AronGrotesque-Black;border-radius:5px}.header-item-order[_ngcontent-%COMP%]{font-size:.8em}.rotate-img[_ngcontent-%COMP%]{transform:rotate(90deg)}.reverse-rotate-img[_ngcontent-%COMP%]{transform:rotate(0deg)}.img-item[_ngcontent-%COMP%]{width:12px}.card-body[_ngcontent-%COMP%]{padding:5px;background-color:#ffbce4;border-radius:15px;margin-bottom:60px;color:#fff;bottom:0;left:0;right:0;font-size:.9em}.odd[_ngcontent-%COMP%]{background-color:#ff88cf}.even[_ngcontent-%COMP%]{background-color:#ff6fc4}#accordion[_ngcontent-%COMP%]{background-color:#ff5dbc;border-radius:15px}"]}),t})();var a=o("tyNb"),l=o("3Pt+"),g=o("5eHb");function m(t,e){if(1&t&&(c.Ob(0,"div",22),c.Ob(1,"div",23),c.tc(2),c.Nb(),c.Ob(3,"div",12),c.tc(4),c.Nb(),c.Ob(5,"div",24),c.tc(6),c.Yb(7,"currency"),c.Nb(),c.Nb()),2&t){const t=e.$implicit;c.gc("ngClass","row  ",e.odd?"odd":"even",""),c.xb(2),c.vc(" ",t.qty_select," "),c.xb(2),c.vc(" ",t.name," "),c.xb(2),c.vc(" ",c.Zb(7,4,t.user_price)," ")}}function f(t,e){if(1&t&&(c.Ob(0,"div",20),c.sc(1,m,8,6,"div",21),c.Nb()),2&t){const t=e.$implicit;c.xb(1),c.ec("ngForOf",t.productsSelected)}}function u(t,e){if(1&t&&(c.Ob(0,"div",15),c.Ob(1,"div",2),c.Ob(2,"div",16),c.tc(3," Cantidad "),c.Nb(),c.Ob(4,"div",17),c.tc(5," Producto "),c.Nb(),c.Ob(6,"div",18),c.tc(7," Precio "),c.Nb(),c.Nb(),c.sc(8,f,2,1,"div",19),c.Nb()),2&t){const t=c.Xb();c.xb(8),c.ec("ngForOf",t.order)}}function p(t,e){if(1&t){const t=c.Pb();c.Ob(0,"div",12),c.Ob(1,"div",13),c.Ob(2,"div",2),c.Ob(3,"div",14),c.tc(4),c.Nb(),c.Ob(5,"div",15),c.Ob(6,"a",10),c.Ob(7,"img",16),c.Vb("click",(function(){c.lc(t);const o=e.$implicit;return c.Xb(2).removeProductPromoQty(o)})),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"div",15),c.Ob(9,"strong"),c.tc(10),c.Nb(),c.Nb(),c.Ob(11,"div",15),c.Ob(12,"a",10),c.Ob(13,"img",17),c.Vb("click",(function(){c.lc(t);const o=e.$implicit;return c.Xb(2).addProductPromoQty(o)})),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(14,"div",18),c.Ob(15,"a",19),c.Vb("click",(function(){c.lc(t);const o=e.$implicit;return c.Xb(2).selectPromo(o)})),c.tc(16,"Elegir"),c.Nb(),c.Nb(),c.Nb()}if(2&t){const t=e.$implicit,o=c.Xb(2);c.gc("ngClass","row  ",o.odd?"odd":"even",""),c.xb(4),c.vc(" ",t.product_id[1]," "),c.xb(6),c.vc("(",t.qty_select,")")}}function O(t,e){if(1&t&&(c.Ob(0,"div",8),c.Ob(1,"div",2),c.Ob(2,"div",9),c.Ob(3,"strong"),c.tc(4," \xa1Tenes Promos dis\u1e55onibles con tu pedido!"),c.Nb(),c.Nb(),c.Nb(),c.Ob(5,"div",10),c.sc(6,p,17,3,"div",11),c.Nb(),c.Nb()),2&t){const t=c.Xb();c.xb(6),c.ec("ngForOf",t.promos)}}function v(t,e){if(1&t){const t=c.Pb();c.Ob(0,"div",11),c.Ob(1,"div",12),c.tc(2),c.Nb(),c.Ob(3,"div",13),c.tc(4),c.Yb(5,"currency"),c.Nb(),c.Ob(6,"div",14),c.Ob(7,"a",15),c.Vb("click",(function(){c.lc(t);const o=e.$implicit;return c.Xb(2).selectCarrier(o)})),c.tc(8,"Elegir"),c.Nb(),c.Nb(),c.Nb()}if(2&t){const t=e.$implicit;c.gc("ngClass","row  ",e.odd?"odd":"even"," pt-1 pb-1"),c.xb(2),c.vc(" ",t.display_name," "),c.xb(2),c.vc(" ",c.Zb(5,3,t.amount)," ")}}function h(t,e){if(1&t&&(c.Ob(0,"div",8),c.Ob(1,"div",2),c.Ob(2,"div",3),c.Ob(3,"strong"),c.tc(4,"Eleg\xed como recibir tu producto."),c.Nb(),c.Nb(),c.Nb(),c.Ob(5,"div",9),c.sc(6,v,9,5,"div",10),c.Nb(),c.Nb()),2&t){const t=c.Xb();c.xb(6),c.ec("ngForOf",t.carriers)}}function x(t,e){if(1&t&&(c.Ob(0,"div",15),c.Ob(1,"div",16),c.tc(2),c.Nb(),c.Ob(3,"div",17),c.tc(4),c.Nb(),c.Ob(5,"div",18),c.tc(6),c.Yb(7,"currency"),c.Nb(),c.Nb()),2&t){const t=e.$implicit;c.gc("ngClass","row  ",e.odd?"odd":"even",""),c.xb(2),c.vc(" ",t.product_uom_qty," "),c.xb(2),c.wc(" ",t.product_id[1]," ",t.discount," "),c.xb(2),c.vc(" ",c.Zb(7,5,t.price_total)," ")}}function N(t,e){if(1&t&&(c.Ob(0,"div",13),c.sc(1,x,8,7,"div",14),c.Nb()),2&t){const t=c.Xb(2);c.xb(1),c.ec("ngForOf",t.orderLines)}}function y(t,e){if(1&t&&(c.Ob(0,"div",8),c.Ob(1,"div",2),c.Ob(2,"div",3),c.Ob(3,"strong"),c.tc(4),c.Nb(),c.Nb(),c.Nb(),c.Ob(5,"div",9),c.Ob(6,"div",10),c.tc(7," Muchas gracias por tu pedido, nos prondremos en contacto con vos por whatsapp dentro de las proximas 72hs habiles para coordinar la entrega"),c.Kb(8,"br"),c.Kb(9,"br"),c.Nb(),c.Nb(),c.Ob(10,"div",2),c.Ob(11,"div",11),c.tc(12),c.Yb(13,"date"),c.Nb(),c.Ob(14,"div",11),c.tc(15),c.Yb(16,"currency"),c.Nb(),c.Nb(),c.sc(17,N,2,1,"div",12),c.Nb()),2&t){const t=c.Xb();c.xb(4),c.vc("Tu orden de pedido tiene el numero ",t.order.display_name,". "),c.xb(8),c.vc(" Fecha: ",c.ac(13,4,t.order.date_order,"dd/MM/yyyy")," "),c.xb(3),c.vc(" Total ",c.Zb(16,7,t.order.amount_total)," "),c.xb(2),c.ec("ngIf",t.orderLines)}}const _=[{path:"",component:b},{path:"summary",component:(()=>{class t{constructor(t,e,o,r){this.saleOrderService=t,this.router=e,this.formBuilder=o,this.toasterService=r,this.order=null,this.total=0,this.lines=[],this.code="",this.isSubmitted=!1,this.order=JSON.parse(localStorage.getItem("tmpOrder")),this.order.forEach(t=>{t.productsSelected.forEach(t=>{this.lines.push({id:t.id,qty:t.qty_select}),this.total+=t.qty_select*t.user_price})})}ngOnInit(){this.editForm=this.formBuilder.group({disc_code:[""]})}get formControls(){return this.editForm.controls}saveOrder(){this.saleOrderService.createSaleOrder(this.lines,this.editForm.controls.disc_code.value).then(t=>{if(console.log(t),t){let e=t[0].id;this.router.navigate(t[0].show_promos?["/orders/promos/"+e]:["/orders/delivery/"+e]),localStorage.removeItem("tmpOrder")}}).catch(t=>{this.toasterService.warning("La orden no cumple con el minimo o el codigo de descuento no es valido")})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(i.a),c.Jb(a.c),c.Jb(l.b),c.Jb(g.b))},t.\u0275cmp=c.Db({type:t,selectors:[["app-order-sumary"]],decls:21,vars:5,consts:[[1,"fill","container-main"],[1,"container","pt-1","text-center"],[1,"row"],[1,"col-12","text-center"],[1,"product-title","m-2","text-uppercase","text-white"],["class","summary",4,"ngIf"],[1,"row","order-total","mx-auto","w-100"],[1,"col-6"],[3,"formGroup"],["type","text","placeholder","Codigo de descuento","formControlName","disc_code",1,"form-control","disc_code",3,"ngSubmit"],[1,"col-6","text-right"],[1,"row","order-actions","mx-auto","w-100"],[1,"col-6","text-left"],["routerLink","/products",1,"btn","btn-wkn","btn-sm","text-uppercase","pull-left"],[1,"btn","btn-wkn","btn-sm","text-uppercase","pull-right",3,"click"],[1,"summary"],[1,"col-2","text-center"],[1,"col-6","text-center"],[1,"col-4","text-center"],["class","",4,"ngFor","ngForOf"],[1,""],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"col-2","text-right"],[1,"col-4","text-right"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Ob(3,"div",3),c.Ob(4,"h5",4),c.tc(5,"Resumen del pedido"),c.Nb(),c.Nb(),c.Nb(),c.sc(6,u,9,1,"div",5),c.Nb(),c.Ob(7,"div",6),c.Ob(8,"div",7),c.Ob(9,"form",8),c.Ob(10,"input",9),c.Vb("ngSubmit",(function(){return e.saveOrder()})),c.Nb(),c.Nb(),c.Nb(),c.Ob(11,"div",10),c.tc(12),c.Yb(13,"currency"),c.Nb(),c.Nb(),c.Ob(14,"div",11),c.Ob(15,"div",12),c.Ob(16,"a",13),c.tc(17," volver"),c.Nb(),c.Nb(),c.Ob(18,"div",10),c.Ob(19,"a",14),c.Vb("click",(function(){return e.saveOrder()})),c.tc(20,"siguiente"),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.xb(6),c.ec("ngIf",e.order),c.xb(3),c.ec("formGroup",e.editForm),c.xb(3),c.vc(" Total : ",c.Zb(13,3,e.total)," "))},directives:[r.l,l.m,l.g,l.d,l.a,l.f,l.c,a.d,r.k,r.j],pipes:[r.c],styles:[".order-actions[_ngcontent-%COMP%]{position:fixed;bottom:65px}.order-total[_ngcontent-%COMP%]{position:fixed;bottom:95px}.container-main[_ngcontent-%COMP%]{background-color:#ffd3f2!important;margin-bottom:60px}.btn-product[_ngcontent-%COMP%]{background-color:#ff5dbc;color:#fff}.product-title[_ngcontent-%COMP%]{background-color:#ff5dbc;font-family:AronGrotesque-Regular;font-size:1.25em;border-radius:5px}.summary[_ngcontent-%COMP%]{padding:5px;background-color:#ff99d6;border-radius:15px;margin-bottom:60px;color:#fff;bottom:0;left:0;right:0;font-size:.9em}.odd[_ngcontent-%COMP%]{color:#eee}.disc_code[_ngcontent-%COMP%]{background-color:#ffbce4;font-weight:700}[_ngcontent-%COMP%]::placeholder{font-size:.8em;font-weight:500}"]}),t})()},{path:"promos/:id",component:(()=>{class t{constructor(t,e,o){this.actRoute=t,this.saleOrderService=e,this.router=o,this.promos=[]}ngOnInit(){this.orderId=Number(this.actRoute.snapshot.paramMap.get("id")),this.loadPromos(this.orderId)}loadPromos(t){this.saleOrderService.getPromos(t).then(t=>{0==t.length&&this.router.navigate(["/orders/delivery/"+this.orderId]),t.forEach(t=>{t.qty_select=0}),this.promos=t}).catch(t=>{console.log("errors"+t)})}selectPromo(t){this.saleOrderService.selectPromo(t.id,t.qty_select).then(t=>{0==t.length&&this.router.navigate(["/orders/delivery/"+this.orderId]),t.forEach(t=>{t.qty_select=0}),this.promos=t}).catch(t=>{console.log("errors"+t)})}removeProductPromoQty(t){t.qty_select>0&&(t.qty_select-=1)}addProductPromoQty(t){t.qty_select<t.product_qty&&(t.qty_select+=1)}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(a.a),c.Jb(i.a),c.Jb(a.c))},t.\u0275cmp=c.Db({type:t,selectors:[["app-order-promos"]],decls:10,vars:1,consts:[[1,"fill","container-main"],[1,"container","pt-1","text-center"],[1,"row"],[1,"col-9","mx-auto"],[1,"product-title","m-2","text-uppercase","text-white"],["class","summary",4,"ngIf"],[1,"col-6"],[1,"row","order-actions","mx-auto","w-100"],[1,"summary"],[1,"col-12","text-center"],[1,""],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"col-8","text-left"],[1,"col-9"],[1,"col-1","m-0","p-0","text-center","my-auto"],["src","assets/img/minus.png",1,"img-fluid",3,"click"],["src","assets/img/plus.png",1,"img-fluid",3,"click"],[1,"col-4","text-center"],[1,"btn","btn-wkn","btn-sm","text-uppercase","pull-right",3,"click"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Ob(3,"div",3),c.Ob(4,"h5",4),c.tc(5,"Promociones"),c.Nb(),c.Nb(),c.Nb(),c.sc(6,O,7,1,"div",5),c.Nb(),c.Ob(7,"div",2),c.Kb(8,"div",6),c.Nb(),c.Kb(9,"div",7),c.Nb()),2&t&&(c.xb(6),c.ec("ngIf",e.promos))},directives:[r.l,r.k,r.j],styles:[".order-actions[_ngcontent-%COMP%]{position:fixed;bottom:65px}.container-main[_ngcontent-%COMP%]{background-color:#ffd3f2!important;margin-bottom:60px}.btn-product[_ngcontent-%COMP%]{background-color:#ff5dbc;color:#fff}.product-title[_ngcontent-%COMP%]{background-color:#ff5dbc;font-family:AronGrotesque-Regular;font-size:1.25em;border-radius:5px}.summary[_ngcontent-%COMP%]{padding:5px;background-color:#ff99d6;border-radius:15px;margin-bottom:60px;color:#fff;bottom:0;left:0;right:0;font-size:.9em}.odd[_ngcontent-%COMP%]{color:#eee}"]}),t})()},{path:"delivery/:id",component:(()=>{class t{constructor(t,e,o){this.actRoute=t,this.saleOrderService=e,this.router=o,this.carriers=[]}ngOnInit(){this.orderId=Number(this.actRoute.snapshot.paramMap.get("id")),this.getCarriers(this.orderId)}getCarriers(t){this.saleOrderService.getCarriers(t).then(t=>{console.log(t),this.carriers=t}).catch(t=>{console.log("errors"+t)})}selectCarrier(t){this.saleOrderService.deliveryConfirm(this.orderId,t.id,t.amount).then(t=>{this.router.navigate(["/orders/confirm/"+this.orderId])}).catch(t=>{console.log("errors"+t)})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(a.a),c.Jb(i.a),c.Jb(a.c))},t.\u0275cmp=c.Db({type:t,selectors:[["app-order-delivery"]],decls:10,vars:1,consts:[[1,"fill","container-main"],[1,"container","pt-1","text-center"],[1,"row"],[1,"col-12","text-center"],[1,"product-title","m-2","text-uppercase","text-white"],["class","summary",4,"ngIf"],[1,"col-6"],[1,"row","order-actions","mx-auto","w-100"],[1,"summary"],[1,""],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"col-6","text-left"],[1,"col-2","text-right"],[1,"col-4","text-center"],[1,"btn","btn-wkn","btn-sm","text-uppercase","pull-right",3,"click"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Ob(3,"div",3),c.Ob(4,"h5",4),c.tc(5,"Envio"),c.Nb(),c.Nb(),c.Nb(),c.sc(6,h,7,1,"div",5),c.Nb(),c.Ob(7,"div",2),c.Kb(8,"div",6),c.Nb(),c.Kb(9,"div",7),c.Nb()),2&t&&(c.xb(6),c.ec("ngIf",e.carriers))},directives:[r.l,r.k,r.j],pipes:[r.c],styles:[".order-actions[_ngcontent-%COMP%]{position:fixed;bottom:65px}.container-main[_ngcontent-%COMP%]{background-color:#ffd3f2!important;margin-bottom:60px}.btn-product[_ngcontent-%COMP%]{background-color:#ff5dbc;color:#fff}.product-title[_ngcontent-%COMP%]{background-color:#ff5dbc;font-family:AronGrotesque-Regular;font-size:1.25em;border-radius:5px}.summary[_ngcontent-%COMP%]{padding:5px;background-color:#ff99d6;border-radius:15px;margin-bottom:60px;color:#fff;bottom:0;left:0;right:0;font-size:.9em}.odd[_ngcontent-%COMP%]{color:#eee}"]}),t})()},{path:"confirm/:id",component:(()=>{class t{constructor(t,e,o,r){this.actRoute=t,this.saleOrderService=e,this.router=o,this.toasterService=r}ngOnInit(){this.orderId=Number(this.actRoute.snapshot.paramMap.get("id")),this.getOrder(this.orderId)}getOrder(t){this.saleOrderService.getOrder(t).then(t=>{this.order=t[0]}).catch(t=>{console.log("errors"+t),this.toasterService.warning("La orden no esta disponible")}),this.saleOrderService.getOrderLines(t).then(t=>{this.orderLines=t.records}).catch(t=>{this.toasterService.warning("La orden no esta disponible"),console.log("errors"+t)})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(a.a),c.Jb(i.a),c.Jb(a.c),c.Jb(g.b))},t.\u0275cmp=c.Db({type:t,selectors:[["app-order-confirm"]],decls:11,vars:1,consts:[[1,"fill","container-main"],[1,"container","pt-1","text-center"],[1,"row"],[1,"col-12","text-center"],[1,"product-title","m-2","text-uppercase","text-white"],["class","summary","id","order",4,"ngIf"],[1,"row","order-actions","mx-auto","w-100"],["routerLink","/",1,"btn","btn-wkn","btn-sm","text-uppercase","pull-left"],["id","order",1,"summary"],[1,"row","justify-content-center"],["id","msgend",1,"col-10","text-left","my-auto","d-flex"],[1,"col-6"],["id","line",4,"ngIf"],["id","line"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"col-2","text-right"],[1,"col-6","text-left"],[1,"col-4","text-right"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Ob(3,"div",3),c.Ob(4,"h5",4),c.tc(5,"Orden finalizada"),c.Nb(),c.Nb(),c.Nb(),c.sc(6,y,18,9,"div",5),c.Ob(7,"div",6),c.Ob(8,"div",3),c.Ob(9,"a",7),c.tc(10,"Cerrar"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.xb(6),c.ec("ngIf",e.order))},directives:[r.l,a.d,r.k,r.j],pipes:[r.e,r.c],styles:[".order-actions[_ngcontent-%COMP%]{position:fixed;bottom:65px}.container-main[_ngcontent-%COMP%]{background-color:#ffd3f2!important;margin-bottom:60px}.btn-product[_ngcontent-%COMP%]{background-color:#ff5dbc;color:#fff}.product-title[_ngcontent-%COMP%]{background-color:#ff5dbc;font-family:AronGrotesque-Regular;font-size:1.25em;border-radius:5px}.summary[_ngcontent-%COMP%]{padding:5px;background-color:#ff99d6;border-radius:15px;margin-bottom:60px;color:#fff;bottom:0;left:0;right:0;font-size:.9em}.odd[_ngcontent-%COMP%]{color:#eee}#msgend[_ngcontent-%COMP%]{margin-bottom:15px!important}"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[r.b,a.e.forChild(_),l.i]]}),t})()}}]);