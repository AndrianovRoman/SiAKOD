

export class Dek {
    btnAddRight = null;
    btnAddLeft = null;
    btnDeleteRight = null;
    btnDeleteLeft = null;
    btnFind = null;
    btnPrintAll = null;
    n = 5;
    arrayDek = new Array(this.n);
    size = 0;
    front = 0;
    rear = -1;
    end = this.n;
    constructor() {
        this.btnAddRight = document.getElementById('addRight');
        this.btnAddRight.onclick = () => {
            this.addElemRight();
            this.printAllElem();
        }
        this.btnAddLeft = document.getElementById('addLeft');
        this.btnAddLeft.onclick = () => {
            this.addElemLeft();
            this.printAllElem();
        }
        this.btnDeleteRight = document.getElementById('deleteRight');
        this.btnDeleteRight.onclick = () => {
            this.deleteElemRight();
            this.printAllElem();
        }
        this.btnDeleteLeft = document.getElementById('deleteLeft');
        this.btnDeleteLeft.onclick = () => {
            this.deleteElemLeft();
            this.printAllElem();
        }
        this.btnFind = document.getElementById('find');
        this.btnFind.onclick = () => {
            this.findElem();
        }
        this.btnPrintAll = document.getElementById('printAll');
        this.btnPrintAll.onclick = () => {
            this.printAllElem();
        }
    }

    addElemRight() {
        if(this.size === this.n){
            console.log("Overflow");
            return;
        }
        this.front = this.front === 0 ? this.n - 1 : this.front - 1;
        this.arrayDek[this.front] = +prompt('Введите число');
        this.size++;
    }

    addElemLeft() {
        if(this.size === this.n){
            console.log("Overflow");
            return;
        }
        this.rear = (this.rear + 1) % this.n;
        this.arrayDek[this.rear] = +prompt('Введите число');
        this.size++;
    }

    deleteElemRight() {
        if(this.size === 0) {
            console.log("Underflow");
            return;
        }
        delete this.arrayDek[this.front];
        this.front = (this.front + 1) % this.n;
        this.size--;
    }

    deleteElemLeft() {
        if(this.size === 0) {
            console.log("Underflow");
            return;
        }
        delete this.arrayDek[this.rear];
        this.rear = this.rear === 0 ? this.n - 1 : this.rear - 1;
        this.size--;
    }

    findElem() {
        let elem = +prompt('Введите число');
        if(this.arrayDek.indexOf(elem) >= 0) {
            alert('Элемент найдет!');
        } else {
            alert('Элемент не найдет!');
        }
    }

    printAllElem() {
        let a = this.rear;
        let arr = [];
        for (let i = 0; i < this.n; i++) {
            if(a === -1){
                a = this.n-1;
            }
            arr.push(this.arrayDek[a]);
            a--;
        }
        console.log(arr);
    }

}