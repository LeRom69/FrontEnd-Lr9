

//////////////////////////////////////////2///////////////////////////////////////////////

class Slider {
    constructor() {
      this.currentSlide = 0;
      this.slides = document.querySelector('.slides');
      this.slideWidth = document.querySelector('.slide').offsetWidth;
      this.prevButton = document.querySelector('.prev');
      this.nextButton = document.querySelector('.next');

      this.prevButton.addEventListener('click', this.prevSlide.bind(this));
      this.nextButton.addEventListener('click', this.nextSlide.bind(this));
    }

    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.updateSlidePosition();
      }
    }

    nextSlide() {
      if (this.currentSlide < this.slides.children.length - 1) {
        this.currentSlide++;
        this.updateSlidePosition();
      }
    }

    updateSlidePosition() {
      const newTranslateValue = -this.currentSlide * this.slideWidth;
      this.slides.style.transform = `translateX(${newTranslateValue}px)`;
    }
  }

  const mySlider = new Slider();

///////////////////////////////////4///////////////////////////////////////////

class Form {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.createForm();
    }

    createForm() {
        const form = document.createElement('form');
        const input1 = document.createElement('input');
        input1.type = 'text';

        const input2 = document.createElement('input');
        input2.type = 'text';

        const submitButton = document.createElement('button');
        submitButton.type = 'button';
        submitButton.textContent = 'Відправити';

        form.appendChild(input1);
        form.appendChild(input2);
        form.appendChild(submitButton);

        submitButton.addEventListener('click', () => this.handleSubmit(input1.value));
        submitButton.addEventListener('click', () => this.handleSubmit(input2.value));

        this.container.appendChild(form);
    }

    handleSubmit(data) {
        if (this.validateData(data)) {
            alert(data);
        } else {
            alert('Введіть дані');
        }
    }

    validateData(data) {

        return data.trim() !== ''; 
    }
}

const myForm = new Form('form-container');

///////////////////////////////////////5////////////////////////////////////////////////////////

class Tab {
    constructor() {
        this.tabs = [];
        this.contents = [];
    }

    addTab(tabTitle, tabContent) {
        this.tabs.push(tabTitle);
        this.contents.push(tabContent);
    }

    render() {
        const tabsList = document.querySelector('.tabs-list');
        const tabsContent = document.querySelector('.tabs-content');

        this.tabs.forEach((tabTitle, index) => {
            const tab = document.createElement('li');
            tab.textContent = tabTitle;
            tab.addEventListener('click', () => this.toggleTab(index));
            tabsList.appendChild(tab);
        });

        this.contents.forEach((tabContent, index) => {
            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = tabContent;
            contentDiv.style.display = index === 0 ? 'block' : 'none';
            tabsContent.appendChild(contentDiv);
        });
    }

    toggleTab(index) {
        const tabsList = document.querySelector('.tabs-list');
        const tabsContent = document.querySelector('.tabs-content');
        const tabs = tabsList.getElementsByTagName('li');
        const contents = tabsContent.getElementsByTagName('div');

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
            contents[i].style.display = 'none';
        }

        tabs[index].classList.add('active');
        contents[index].style.display = 'block';
    }
}

const myTabs = new Tab();
myTabs.addTab('Tab 1', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maiores!</p>');
myTabs.addTab('Tab 2', '<p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>');
myTabs.addTab('Tab 3', '<p>Lorem ipsum dolor. Et, maiores!</p>');
myTabs.render();


///////////////////////////////6/////////////////////////////////////////////

class Notification {
    static show(message, style) {
        const notification = document.createElement('div');
        notification.className = `notification ${style}`;
        notification.textContent = message;

        notification.addEventListener('click', () => {
            this.close(notification);
        });

        document.body.appendChild(notification);

        setTimeout(() => {
            this.close(notification);
        }, 1000);
    }

    static close(notification) {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }
}

function createNotification(style) {
    if (style === 'notis1') {
        Notification.show('Сповіщення 1', 'notis1');
    } else if (style === 'notis2') {
        Notification.show('Сповіщення 2', 'notis2');
    }
   
}

