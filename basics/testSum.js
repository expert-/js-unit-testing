function assert (val, desc){
	if(!val){
		throw new Error(desc)
	}
}
function testSum(){
	var answer = sum (6,5)
	assert(answer === 9, '4 and 5 is not 9!');
}