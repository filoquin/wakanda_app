(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{IKdg:function(e,r,o){"use strict";o.d(r,"a",(function(){return d}));var a=o("fXoL"),t=o("xzt6");let d=(()=>{class e{constructor(e){this.odooRPC=e}getCategoriesPrices(){return this.odooRPC.searchRead("product.category",[["wkn_publish","=",!0]],["name","display_name","user_price","final_price"])}getSaleRank(){return this.odooRPC.searchRead("sale.rank",[["rank","<=",5]],["wkn_categ_id","category_name","name","product_id","rank"])}getCategories(){return this.odooRPC.searchRead("product.category",[["wkn_publish","=",!0]],["name","display_name","wkn_categ_image"])}getProducts(e){return this.odooRPC.searchRead("product.template",[["wak_published","=",!0],["categ_id","child_of",e]],["default_code","name","display_name","qty_available","list_price","final_price","user_price"])}createSaleOrder(e){return this.odooRPC.call("sale.order","wkn_create",[e],{})}getPromos(e){return this.odooRPC.call("sale.order","read_promos",[[e]],{})}selectPromo(e){return this.odooRPC.call("sale.order.promo","add_promo_read_promos",[[e]],{})}getCarriers(e){return this.odooRPC.call("sale.order","read_delivery_methods",[[e]],{})}deliveryConfirm(e,r,o){return this.odooRPC.call("sale.order","wkn_delivery_confirm",[[e],r,o],{})}getOrder(e){return this.odooRPC.call("sale.order","read",[[e],["name","display_name","date_order","amount_total"]],{})}getOrderLines(e){return this.odooRPC.searchRead("sale.order.line",[["order_id","=",e]],["name","product_id","product_uom_qty","price_total"])}getMyOrders(){return this.odooRPC.searchRead("sale.order",[],["name","display_name","state","date_order","amount_total"],50,0,{},"create_date desc")}}return e.\u0275fac=function(r){return new(r||e)(a.Sb(t.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);