const BadResponse = (res,err,name,action)=>{
        if(res.status(300)){
            res.status(300).send({message:`The webserver trying to redirect, maybe the server change`});
            console.log(300);
        }
        if(res.status(400)){
            res.status(400).send({message:`You have some problem with this ${name}! trying to ${action}`});
            console.log(400);
        }
        if(res.status(500)){
            res.status(500).send({message:`The request return some problem with the server`});
            console.log(500);
        }
        console.log(err);
}
const GodResponse = (res,name,action,datacode=0,value)=>{
    if(datacode==1){
        if(res.status(200)){
            res.status(200).send(value);
            console.log(200,"returned value");
        }
    }else{
        if(res.status(200)){
            res.status(200).send([{message:`You have ${action} a ${name}.`}]);
            console.log(200,`You have ${action} a ${name}.`);
        }
    }
}
        
module.exports = {BadResponse,GodResponse};