module.exports = {
    meta: {
        messages: {
            avoidName: "Avoid using variables named '{{ name }}'"
        }
    },
    create(context) {
        return {
            Identifier(node) {
                if (node.name === "count" || node.name=="flag" ) {
                    context.report({
                        node,
                        messageId: "avoidName",
                        data: {
                            name: node.name,
                        }
                    });
                }
              
                if(node.name.length==1){
                    let isLoop=false;
                    let x=node;
                    let isBlockStatement=false;
                    let r="";
                   while(node.type.localeCompare('Program')!==0){
                      r=r.concat(node.type," ");
                   if(node.type.localeCompare('ForStatement')===0){
                       isLoop=true;
                       break;
                   }
                   if(node.type.localeCompare('BlockStatement')===0){
                       isBlockStatement=true;
                   }
                   node=node.parent;
                   }

                    

                  //  if(0!==(y.type).localeCompare('ForStatement'))
                 if((isLoop || isBlockStatement)){

                    if(isLoop==true && isBlockStatement==false){

                    }
                    else{
                    context.report({
                        node,
                        messageId: "avoidName",
                        data: {

                            name: r+" "+x.name,
                        }
                    });
                }
               }
                }
            }
            
        };
    }
};