
export default serializer = function(node, output) {
	if(!node){
		output.push('#');
		return;
	}
	output.push(node.val);
	serializer(node.left, output);
	serializer(node.right, output);
}