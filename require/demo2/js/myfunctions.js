require.config({
    baseUrl: "./js",
    paths: {
        square: "helper/square",
        cube: "helper/square/cube",
        add: "helper/add",
        helper: "helper"
    },
    //waitSeconds: 15
  });

define(['add', 'helper/sub', 'helper/mul','helper/div', 'square/square'], function(add, sub, mul, div){
    return {
        getresult: function(option, opa, opb){
            switch(option){
                case "add": return add.add(opa, opb);
                case "sub": return sub.sub(opa, opb);
                case "mul": return mul.mul(opa, opb);
                case "div": return div.div(opa, opb);
            }
        }
        
    }

})


define(['add', 'helper/sub', 'helper/mul','helper/div'], function(add, sub, mul, div){
    return {
        getresult2: function(option, opa, opb){
            switch(option){
                case "add": return add.add(opa, opb);
                case "sub": return sub.sub(opa, opb);
                case "mul": return mul.mul(opa, opb);
                case "div": return div.div(opa, opb);
            }
        }
        
    }

})