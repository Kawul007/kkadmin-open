var f=(o,r,n)=>new Promise((l,a)=>{var u=e=>{try{t(n.next(e))}catch(s){a(s)}},i=e=>{try{t(n.throw(e))}catch(s){a(s)}},t=e=>e.done?l(e.value):Promise.resolve(e.value).then(u,i);t((n=n.apply(o,r)).next())});import{B as h,u as b}from"./useTable.08c46d4f.js";import{T as g}from"./useForm.6f0a4935.js";import{u as T}from"./index.20bdd26b.js";import{M as _,c as C,s as B}from"./MenuDrawer.57b35804.js";import{p as w}from"./friend.e50f3427.js";import{_ as D}from"./index.31054725.js";import{B as E,a1 as c,D as F,F as S,w as m,a6 as p,ae as R}from"./vendor.bf608252.js";import"./index.cf8cc264.js";import"./index.e7d3a80a.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.3b7ca8d1.js";/* empty css               *//* empty css               *//* empty css               */import"./index.9ecfcd63.js";/* empty css                */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css              *//* empty css               */import"./index.e108d676.js";import"./download.7a967f74.js";/* empty css               */import"./index.86a47463.js";const k=E({name:"FriendTagList",components:{BasicTable:h,MenuDrawer:_,TableAction:g},setup(){const[o,{openDrawer:r}]=T(),[n,{reload:l}]=b({title:"\u53CB\u94FE\u6807\u7B7E\u5217\u8868",api:w,columns:C,formConfig:{labelWidth:120,schemas:B},isTreeTable:!1,pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!0,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function a(){r(!0,{isUpdate:!1})}function u(e){r(!0,{record:e,isUpdate:!0})}function i(e){return f(this,null,function*(){t()})}function t(){l()}return{registerTable:n,registerDrawer:o,handleCreate:a,handleEdit:u,handleDelete:i,handleSuccess:t}}}),y=R(" \u65B0\u589E\u6807\u7B7E ");function v(o,r,n,l,a,u){const i=c("a-button"),t=c("TableAction"),e=c("BasicTable"),s=c("MenuDrawer");return F(),S("div",null,[m(e,{onRegister:o.registerTable},{toolbar:p(()=>[m(i,{type:"primary",onClick:o.handleCreate},{default:p(()=>[y]),_:1},8,["onClick"])]),action:p(({record:d})=>[m(t,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,d)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,d)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),m(s,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var re=D(k,[["render",v]]);export{re as default};
