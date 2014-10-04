 function checkUsersValid(goodUsers) {
      return function(submittedUsers) {
          return submittedUsers.every(function isBelongTo(item){
               return goodUsers.some(function isBelongingTo(e){
               	    return e['id']==item['id']
               })
          })
      };
    }
    
    module.exports = checkUsersValid