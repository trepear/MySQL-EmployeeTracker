const connection = require("./connection");

class ORM {
    constructor(connection) {
        this.connection = connection;
    }

    // This allows us not to have to use so many ?? when writing our db queries
    printQuestionMarks(numberOfValues) {
        const questionMarks = [];
        for (var i = 0; i < numberOfValues; i++) {
            questionMarks.push("?");
        }
        return questionMarks.join(', ');
    }

    create(table, columns, values) {
        const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`;
        console.log(queryString);
        
        return this.connection.query(queryString, [table, ...values])
    }

    selectAll(table) {
        const queryString = 'SELECT * FROM  ??';
        
    }

    update(table, colVals, id) {
        var queryString = `UPDATE ?? SET ? WHERE ?`;
        console.log(queryString);

        return this.connection.query(queryString, [table, colVals, id])
    }
    
}

module.exports = new ORM(connection)