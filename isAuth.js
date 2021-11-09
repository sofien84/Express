const path = require('path');
const isAuth=(request,response,next)=>{
    
    const d = new Date();
    if( (d.getDay() == 0 || d.getDay() == 4) && (d.getHours() >9 || d.getHours()<17) ){
       
        return response.sendFile(path.join(__dirname+'/public/closed.html'));
    }else{next()}
    }
module.exports= isAuth;