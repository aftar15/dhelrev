import{r as u,T as _,o as h,f as y,a as t,u as e,h as x,b as o,d,e as k,i as g,v as L,n as m,j as C,k as S,w as p,t as V,Z as N,l as c}from"./app-c6bec88b.js";/* empty css                                                    */import{_ as v}from"./InputError-d228827b.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const D={class:"login-page"},M={class:"right-section"},T={class:"login-container"},q={class:"form-group"},B={class:"input-wrapper"},E={class:"form-group"},G={class:"input-wrapper"},U=["type"],j=["src"],F={class:"form-group checkbox-group"},R={class:"checkbox-label"},z=["disabled"],A={class:"register-link"},H={__name:"Login",setup(I){const i=u(!1),r=u(!1),l=_({email:"",password:"",remember:!1}),f=async()=>{r.value=!0;try{await l.post(route("login"),{onFinish:()=>l.reset("password")})}catch(n){console.error("Login error:",n)}finally{r.value=!1}},w=()=>{window.location.href=route("auth.google")},b=()=>{i.value=!i.value};return(n,s)=>(h(),y("div",D,[t(e(N),{title:"Log in"}),s[14]||(s[14]=x('<div class="left-section" data-v-078a6116><div class="school-logo" data-v-078a6116><div class="logo-container" data-v-078a6116><img src="/img/logo.jpg" alt="School Logo" class="logo-img" data-v-078a6116></div><div class="school-name" data-v-078a6116><h1 data-v-078a6116>Surigao City National High School</h1></div></div></div>',1)),o("div",M,[o("div",T,[s[13]||(s[13]=o("h2",null,[d("Welcome "),o("span",{class:"highlight"},"Students")],-1)),o("form",{onSubmit:k(f,["prevent"])},[o("button",{type:"button",onClick:w,class:"google-login"},s[3]||(s[3]=[o("img",{src:"/img/google.svg",alt:"Google",class:"google-icon"},null,-1),o("span",null,"Login with Google",-1)])),s[12]||(s[12]=o("div",{class:"divider"},[o("div",{class:"line"}),o("span",null,"OR"),o("div",{class:"line"})],-1)),o("div",q,[s[5]||(s[5]=o("label",{for:"email"},"Email",-1)),o("div",B,[s[4]||(s[4]=o("img",{src:"/img/email.svg",alt:"Email",class:"input-icon"},null,-1)),g(o("input",{id:"email",type:"email","onUpdate:modelValue":s[0]||(s[0]=a=>e(l).email=a),placeholder:"example@gmail.com",class:m({error:e(l).errors.email}),required:""},null,2),[[L,e(l).email]])]),t(v,{message:e(l).errors.email},null,8,["message"])]),o("div",E,[s[7]||(s[7]=o("label",{for:"password"},"Password",-1)),o("div",G,[s[6]||(s[6]=o("img",{src:"/img/lock.svg",alt:"Password",class:"input-icon"},null,-1)),g(o("input",{id:"password",type:i.value?"text":"password","onUpdate:modelValue":s[1]||(s[1]=a=>e(l).password=a),placeholder:"••••••••",class:m({error:e(l).errors.password}),required:""},null,10,U),[[C,e(l).password]]),o("button",{type:"button",onClick:b,class:"toggle-password"},[o("img",{src:i.value?"/img/eye-off.svg":"/img/eye.svg",alt:"Toggle password",class:"toggle-icon"},null,8,j)])]),t(v,{message:e(l).errors.password},null,8,["message"])]),o("div",F,[o("label",R,[g(o("input",{type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=a=>e(l).remember=a),class:"checkbox"},null,512),[[S,e(l).remember]]),s[8]||(s[8]=o("span",null,"Remember me",-1))]),t(e(c),{href:n.route("password.request"),class:"forgot-password"},{default:p(()=>s[9]||(s[9]=[d(" Forgot Password? ")])),_:1},8,["href"])]),o("button",{type:"submit",class:"login-btn",disabled:r.value},V(r.value?"Logging in...":"Login"),9,z),o("div",A,[s[11]||(s[11]=d(" Don't have an account? ")),t(e(c),{href:n.route("register"),class:"text-blue-600 hover:text-blue-700 font-semibold"},{default:p(()=>s[10]||(s[10]=[d(" Create Account ")])),_:1},8,["href"])])],32)])])]))}},J=P(H,[["__scopeId","data-v-078a6116"]]);export{J as default};