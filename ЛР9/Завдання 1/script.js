
//////////////////////////////////////////1///////////////////////////////////////////////

class Modal {
    constructor() {
        this.modal = document.querySelector('.modal');
        this.modalHeader = document.querySelector('.modal-header');
        this.modalContent = document.querySelector('.modal-content');

        this.draggable = false;
        this.dragOffset = { x: 0, y: 0 };

        this.modalHeader.addEventListener('mousedown', this.startDrag.bind(this));
        document.addEventListener('mouseup', this.stopDrag.bind(this));
        document.addEventListener('mousemove', this.drag.bind(this));
    }

    open() {
        this.modal.style.display = 'block';
    }

    close() {
        this.modal.style.display = 'none';
    }

    setContent(content) {
        this.modalContent.innerHTML = content;
    }

    startDrag(e) {
        if (e.target.classList.contains('modal-header')) {
            this.draggable = true;
            this.dragOffset.x = e.clientX - this.modal.offsetLeft;
            this.dragOffset.y = e.clientY - this.modal.offsetTop;
        }
    }

    stopDrag() {
        this.draggable = false;
    }

    drag(e) {
        if (this.draggable) {
            this.modal.style.left = e.clientX - this.dragOffset.x + 'px';
            this.modal.style.top = e.clientY - this.dragOffset.y + 'px';
        }
    }
}

const modal = new Modal();

document.querySelector('.openModalBtn').addEventListener('click', () => {
    modal.open();
    modal.setContent('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, perspiciatis culpa doloremque ducimus, quis optio explicabo, aspernatur animi facilis iste rem dicta incidunt dignissimos possimus dolorem quidem. Deleniti, qui soluta.</p>');
});

