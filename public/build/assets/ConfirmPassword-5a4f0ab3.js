import{T as n,o as l,c as d,w as t,a as e,u as a,Z as p,b as r,d as f,n as u,e as c}from"./app-c6bec88b.js";import{_}from"./GuestLayout-03851d63.js";import{_ as w}from"./InputError-d228827b.js";import{_ as b,a as x}from"./TextInput-585fbcf7.js";import{_ as g}from"./PrimaryButton-16529521.js";/* empty css                                                    */const V={class:"mt-4 flex justify-end"},T={__name:"ConfirmPassword",setup(v){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(y,o)=>(l(),d(_,null,{default:t(()=>[e(a(p),{title:"Confirm Password"}),o[2]||(o[2]=r("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),r("form",{onSubmit:c(i,["prevent"])},[r("div",null,[e(b,{for:"password",value:"Password"}),e(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=m=>a(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),e(w,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),r("div",V,[e(g,{class:u(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>o[1]||(o[1]=[f(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};