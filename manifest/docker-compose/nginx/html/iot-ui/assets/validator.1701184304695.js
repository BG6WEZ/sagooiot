const t=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,n=(r,u,e)=>{if(!u)return e();t.test(u)||e(new Error("\u8BF7\u586B\u5199\u6B63\u786E\u624B\u673A\u53F7"))},o=(r="\u4E0D\u80FD\u4E3A\u7A7A",u="blur")=>({required:!0,message:r,trigger:u});export{n as p,o as r};