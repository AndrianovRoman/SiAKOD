
export class Ochered {
    btnAdd = null;
    btnDelete = null;
    btnFind = null;
    btnPrintAll = null;
    n = 5;
    arrayOchered = new Array(this.n);
    front = 0;
    rear = -1;
    size = 0;
    constructor() {
        this.btnAdd = document.getElementById('add');
        this.btnAdd.onclick = () => {
            this.addElem();
            console.log(this.arrayOchered);
        }
        this.btnDelete = document.getElementById('delete');
        this.btnDelete.onclick = () => {
            this.deleteElem();
            console.log(this.arrayOchered);
        }
        this.btnFind = document.getElementById('find');
        this.btnFind.onclick = () => {
            this.findElem();
            console.log(this.arrayOchered);
        }
        this.btnPrintAll = document.getElementById('printAll');
        this.btnPrintAll.onclick = () => {
            this.printAllElem();
        }
    }

    addElem() {
        if(this.size === this.n){
            console.log("Overflow");
            return;
        }
        this.rear = (this.rear + 1) % this.n;
        this.arrayOchered[this.rear] = +prompt('Введите число');
        this.size++;
    }

    deleteElem() {
        if(this.size === 0) {
            console.log("Underflow");
            return;
        }
        delete this.arrayOchered[this.front];

        // for (let i = 0; i < this.size - 1; i++){
        //     let elem = this.arrayOchered[i + 1];
        //     this.arrayOchered[i + 1] = this.arrayOchered[i];
        //     this.arrayOchered[i] = elem;
        // }

        this.front = (this.front + 1) % this.n;
        this.size--;
    }

    findElem() {
        let elem = +prompt('Введите число');
        if(this.arrayOchered.indexOf(elem) >= 0) {
            alert('Элемент найдет!');
        } else {
            alert('Элемент не найдет!');
        }
    }

    printAllElem() {
        console.log(this.arrayOchered);
    }
}