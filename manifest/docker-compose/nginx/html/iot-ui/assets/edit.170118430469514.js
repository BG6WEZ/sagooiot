import{_ as N,b as F,E as B}from"./index.1701184304695.js";import{p as U}from"./validator.1701184304695.js";import{L as I,h as A,a2 as $,ab as z,a as b,_ as e,T as u,e as R,ai as s,o as f,b as h,Y as C,Z as _,X as q,F as T,a8 as j,S as M}from"./vue.1701184304695.js";const v={parentId:-1,name:"",orderNum:0,leader:"",phone:"",email:"",status:1},P=I({name:"systemEditDept",setup(l,{emit:a}){const c=A(null),g=A([]),t=$({isShowDialog:!1,ruleForm:{...v},deptData:[],rules:{name:[{required:!0,message:"\u7EC4\u7EC7\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],leader:[{required:!0,message:"\u8D1F\u8D23\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],phone:[{validator:U,trigger:"blur"}],email:[{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u90AE\u7BB1",trigger:"blur"}]}});F.user.getAllList({}).then(r=>{g.value=r});const D=r=>{i(),F.org.getList({status:1}).then(p=>{t.deptData=p||[]}),r&&typeof r=="object"?t.ruleForm=r:r&&typeof r=="number"&&(t.ruleForm.parentId=r),t.isShowDialog=!0},d=()=>{t.isShowDialog=!1},n=()=>{d()},m=()=>{const r=R(c);!r||r.validate(p=>{p&&(t.ruleForm.parentId||(t.ruleForm.parentId=-1),t.ruleForm.id?F.org.edit(t.ruleForm).then(()=>{B.success("\u4FEE\u6539\u6210\u529F"),d(),a("deptList")}):F.org.add(t.ruleForm).then(()=>{B.success("\u6DFB\u52A0\u6210\u529F"),d(),a("deptList")}))})},i=()=>{t.ruleForm={...v}};return{openDialog:D,userList:g,closeDialog:d,onCancel:n,onSubmit:m,formRef:c,...z(t)}}}),W={class:"system-edit-dept-container"},X={key:0},Y={class:"dialog-footer"},Z=C("\u53D6 \u6D88");function x(l,a,c,g,t,D){const d=s("el-cascader"),n=s("el-form-item"),m=s("el-col"),i=s("el-input"),r=s("el-option"),p=s("el-select"),k=s("el-input-number"),y=s("el-switch"),S=s("el-row"),w=s("el-form"),E=s("el-button"),L=s("el-dialog");return f(),b("div",W,[e(L,{title:(l.ruleForm.id?"\u4FEE\u6539":"\u6DFB\u52A0")+"\u533A\u57DF",modelValue:l.isShowDialog,"onUpdate:modelValue":a[7]||(a[7]=o=>l.isShowDialog=o),width:"769px"},{footer:u(()=>[h("span",Y,[e(E,{onClick:l.onCancel,size:"default"},{default:u(()=>[Z]),_:1},8,["onClick"]),e(E,{type:"primary",onClick:l.onSubmit,size:"default"},{default:u(()=>[C(_(l.ruleForm.id?"\u4FEE \u6539":"\u6DFB \u52A0"),1)]),_:1},8,["onClick"])])]),default:u(()=>[e(w,{ref:"formRef",model:l.ruleForm,rules:l.rules,size:"default","label-width":"90px"},{default:u(()=>[e(S,{gutter:35},{default:u(()=>[e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:u(()=>[e(n,{label:"\u4E0A\u7EA7\u533A\u57DF"},{default:u(()=>[e(d,{options:l.deptData,props:{checkStrictly:!0,emitPath:!1,value:"id",label:"name"},placeholder:"\u8BF7\u9009\u62E9\u533A\u57DF",clearable:"",class:"w100",modelValue:l.ruleForm.parentId,"onUpdate:modelValue":a[0]||(a[0]=o=>l.ruleForm.parentId=o)},{default:u(({node:o,data:V})=>[h("span",null,_(V.name),1),o.isLeaf?q("",!0):(f(),b("span",X," ("+_(V.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[e(n,{label:"\u533A\u57DF\u540D\u79F0",prop:"name"},{default:u(()=>[e(i,{modelValue:l.ruleForm.name,"onUpdate:modelValue":a[1]||(a[1]=o=>l.ruleForm.name=o),placeholder:"\u8BF7\u8F93\u5165\u533A\u57DF\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[e(n,{label:"\u8D1F\u8D23\u4EBA",prop:"leader"},{default:u(()=>[e(p,{modelValue:l.ruleForm.leader,"onUpdate:modelValue":a[2]||(a[2]=o=>l.ruleForm.leader=o),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA",filterable:"",clearable:""},{default:u(()=>[(f(!0),b(T,null,j(l.userList,o=>(f(),M(r,{value:o.userNickname,label:o.userNickname,key:o.id},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[e(n,{label:"\u624B\u673A\u53F7",prop:"phone"},{default:u(()=>[e(i,{modelValue:l.ruleForm.phone,"onUpdate:modelValue":a[3]||(a[3]=o=>l.ruleForm.phone=o),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[e(n,{label:"\u90AE\u7BB1",prop:"email"},{default:u(()=>[e(i,{modelValue:l.ruleForm.email,"onUpdate:modelValue":a[4]||(a[4]=o=>l.ruleForm.email=o),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[e(n,{label:"\u6392\u5E8F"},{default:u(()=>[e(k,{modelValue:l.ruleForm.orderNum,"onUpdate:modelValue":a[5]||(a[5]=o=>l.ruleForm.orderNum=o),min:0,max:999,"controls-position":"right",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[e(n,{label:"\u7EC4\u7EC7\u72B6\u6001"},{default:u(()=>[e(y,{modelValue:l.ruleForm.status,"onUpdate:modelValue":a[6]||(a[6]=o=>l.ruleForm.status=o),"active-value":1,"inactive-value":0,"inline-prompt":"","active-text":"\u542F","inactive-text":"\u7981"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}var K=N(P,[["render",x]]);export{K as default};