
//////////////////////////////////////////3///////////////////////////////////////////////
const ExNameElement = document.createElement('h1');
ExNameElement.textContent = "Завдання 3";

  class Table {
    constructor() {
        this.rows = [];
    }

    addRow(data) {
        this.rows.push(data);
    }

    addColumn(header, data) {
        this.rows.forEach((row, index) => {
            if (!this.rows[index].columns) {
                this.rows[index].columns = {};
            }
            this.rows[index].columns[header] = data[index];
        });
    }

    generateHTML() {
        const tableElement = document.createElement('table');

        
        const headerRow = document.createElement('tr');
        for (const header in this.rows[0].columns) {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        }
        tableElement.appendChild(headerRow);

       
        this.rows.forEach(row => {
            const tr = document.createElement('tr');
            for (const header in row.columns) {
                const td = document.createElement('td');
                td.textContent = row.columns[header];
                tr.appendChild(td);
            }
            tableElement.appendChild(tr);
        });

        return tableElement;
    }
}

const myTable = new Table();
myTable.addRow({ columns: { Column11: 'Lorem', Column12: 'Lorem', Column13: 'Lorem' } });
myTable.addRow({ columns: { Column21: 'Lorem', Column22: 'Lorem', Column23: 'Lorem' } });




const ExName = document.body.appendChild(ExNameElement);
const tableContainer = document.body.appendChild(myTable.generateHTML());

