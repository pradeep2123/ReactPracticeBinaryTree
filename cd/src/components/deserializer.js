import Tree  from "./Tree";

export default deserialize = function(data) {
	 
    data = data.split(',');
    var index = 0;
    function deserializer(data) {
       if(index > data.length || data[index] === '#'){
       	return null;
       }
       
       var node = new Tree(parseInt(data[index]));
       index++;
       node.left = deserializer(data,index);
       index++;
       node.right = deserializer(data, index);
       return node;
    }
    
    return deserializer(data);
};