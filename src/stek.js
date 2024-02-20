
export class Stek {
    btnAdd = null;
    btnDelete = null;
    btnFind = null;
    btnPrintAll = null;
    n = 5;
    arrayStek = new Array(this.n);
    top = 0;
    constructor() {
        this.btnAdd = document.getElementById('add');
        this.btnAdd.onclick = () => {
            this.addElem();
            console.log(this.arrayStek);
        }
        this.btnDelete = document.getElementById('delete');
        this.btnDelete.onclick = () => {
            this.deleteElem();
            console.log(this.arrayStek);
        }
        this.btnFind = document.getElementById('find');
        this.btnFind.onclick = () => {
            this.findElem();
            console.log(this.arrayStek);
        }
        this.btnPrintAll = document.getElementById('printAll');
        this.btnPrintAll.onclick = () => {
            this.printAllElem();
        }
    }

    addElem() {
        if(this.top === this.n){
            console.log("Overflow");
            return;
        }
        this.arrayStek[this.top] = +prompt('Введите число');
        this.top++;
    }

    deleteElem() {
        if(this.top === 0) {
            console.log("Underflow");
            return;
        }
        delete this.arrayStek[this.top - 1];
        this.top--;
    }

    findElem() {
        let elem = +prompt('Введите число');
        if(this.arrayStek.indexOf(elem) >= 0) {
            alert('Элемент найдет!');
        } else {
            alert('Элемент не найдет!');
        }
    }

    printAllElem() {
        console.log(this.arrayStek);
    }
}