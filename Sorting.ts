
class merge {
    collection_1: number[];
    collection_2: number[];
    collection_3: number[];
    mergeResult: number[];

    constructor(collection_1: number[], collection_2: number[], collection_3: number[]) {
        this.collection_1 = collection_1;
        this.collection_2 = collection_2;
        this.collection_3 = collection_3;
        this.mergeResult = this.sorting();
    }

    sorting(): number[] {

        let result: number[] = this.quickSort([...this.collection_1, ...this.collection_2, ...this.collection_3]);

        return result;
    }

    quickSort(array: number[]): number[] {
        if (array.length <= 1) {
            return array;
        }

        let pivot = array[array.length - 1];
        let left: number[] = [];
        let right: number[] = [];

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }

        return [...this.quickSort(left), pivot, ...this.quickSort(right)];
    }

}

let col1 = [1, 2, 3, 9, 10];
let col2 = [19, 17, 10, 8, 6];
let col3 = [11, 12, 13, 14, 15];

const result = new merge(col1, col2, col3);

console.log(result.mergeResult);