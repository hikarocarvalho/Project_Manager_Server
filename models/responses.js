const BadResponse = (res,err,name,action)=>{
        if(res.status(300)){
            res.status(300).send({message:`The webserver trying to redirect, maybe the server change`});
            console.log(300);
        }
        if(res.status(304)){
            res.status(304).send({message:`The webserver trying to redirect to cach, because anything change`});
            console.log(304);
        }
        if(res.status(400)){
            res.status(400).send({message:`You have some problem with this ${name}! trying to ${action}`});
            console.log(400);
        }
        if(res.status(401)){
            res.status(401).send({message:`The request has ben fail`});
            console.log(401);
        }
        if(res.status(403)){
            res.status(403).send({message:`The server refuse the connection`});
            console.log(403);
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
            console.log(200,`You have ${action} a ${name}.`+ res.status());
        }
        if(res.status(201)){
            res.status(201).send([{message:`You have ${action} a ${name}.`}]);
            console.log(201,`You have ${action} a ${name}.`+ res.status());
        }
        if(res.status(204)){
            res.status(204).send([{message:`You have ${action} a ${name}.`}]);
            console.log(204,`You have ${action} a ${name}.`+ res.status());
        }
    }
}
        
module.exports = {BadResponse,GodResponse};