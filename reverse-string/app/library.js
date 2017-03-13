module.exports = {
	reverseString: function (string) {

		if (string.length === 0) {
			return null;
		}

		var mArray = string.split('');
		var newArr = [];
		for (var i=0; i<mArray.length; i++){
			newArr.unshift(mArray[i]);
		}
		newArr = newArr.join('');

		if (newArr === string) {
			return true;
		}
		return newArr;
	}
}