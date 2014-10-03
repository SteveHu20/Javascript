  function getShortMessages(messages) {
      // SOLUTION GOES HERE
        var temp=messages.map(function map(arrElement){
                return arrElement['message'];
        });
        var result=temp.filter(function filter(element){
        	return element.length<50
        });
        return result;
    }
    
    module.exports = getShortMessages