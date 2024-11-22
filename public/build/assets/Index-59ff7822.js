import{r as u,o as a,f as o,a as n,u as c,w as p,F as i,Z as h,b as t,i as b,v as g,q as m,t as l}from"./app-c6bec88b.js";import{A as x}from"./AuthenticatedLayout-cf5da756.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={class:"min-h-screen bg-gray-100 p-6"},f={class:"bg-white shadow-md rounded-lg p-4"},y={class:"flex mb-4"},w={class:"relative flex-grow"},_={class:"overflow-x-auto"},A={class:"w-full text-left"},S={key:0},k={class:"p-2"},B={class:"p-2"},L={class:"p-2"},N={class:"p-2"},D={class:"p-2"},C={__name:"Index",props:{students:{type:Array,default:()=>[]}},setup(r){const d=u("");return(E,e)=>(a(),o(i,null,[n(c(h),{title:"Students"}),n(x,null,{default:p(()=>[t("div",v,[t("div",f,[e[5]||(e[5]=t("div",{class:"flex justify-between items-center mb-4"},[t("h1",{class:"text-2xl font-bold"},"Students"),t("button",{class:"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"}," Add Student ")],-1)),t("div",y,[t("div",w,[b(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>d.value=s),type:"text",placeholder:"Search for a student by name or email",class:"w-full px-4 py-2 pr-10 border rounded"},null,512),[[g,d.value]]),e[1]||(e[1]=t("span",{class:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1))])]),t("div",_,[t("table",A,[e[4]||(e[4]=t("thead",null,[t("tr",{class:"bg-gray-200"},[t("th",{class:"p-2"},"Name"),t("th",{class:"p-2"},"Section"),t("th",{class:"p-2"},"Year Level"),t("th",{class:"p-2"},"Email address"),t("th",{class:"p-2"},"Gender"),t("th",{class:"p-2"},"Action")])],-1)),t("tbody",null,[r.students.length===0?(a(),o("tr",S,e[2]||(e[2]=[t("td",{colspan:"6",class:"text-center p-4 text-gray-500"}," No students found ",-1)]))):(a(!0),o(i,{key:1},m(r.students,s=>(a(),o("tr",{key:s.email,class:"border-b hover:bg-gray-50"},[t("td",k,l(s.name),1),t("td",B,l(s.section),1),t("td",L,l(s.yearLevel),1),t("td",N,l(s.email),1),t("td",D,l(s.gender),1),e[3]||(e[3]=t("td",{class:"p-2"},[t("button",{class:"bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"}," Edit "),t("button",{class:"bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"}," Delete ")],-1))]))),128))])])])])])]),_:1})],64))}};export{C as default};
