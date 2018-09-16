
class Sorter {
	constructor() {
		// your implementation
		this.arr = [];
		this.comparator = function(a, b){
      return a - b;
    }
		}

	add(element) {
		// your implementation
		this.arr.push(element);
	}

	at(index) {
		// your implementation
		return this.arr[index];
	}

	get length() {
		// your implementation
		return this.arr.length;
	}

	toArray() {
		// your implementation
		return this.arr;
	}

	sort(indices) {
		// your implementation
		let array = [];
		indices.sort((a, b) => a - b);
		for(let i = 0; i < indices.length; i++){
			array.push(this.arr[indices[i]]);
		}
		array.sort(this.comparator);
			for(let i = 0; i < indices.length; i++){
				this.arr[indices[i]] = array[i]; 
			}
		}

	setComparator(compareFunction) {
		// your implementation
		this.comparator = compareFunction;
	}
}

module.exports = Sorter;