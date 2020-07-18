const orm = require("../connect_db/orm.js");

class Department {
    selectAll(){
        return orm.selectAll("department")
    }

    update(){
        return orm.update("department", colVals, value)
    }
}

const test = new Department

test.selectAll()
.then(res => console.table(res))
.catch(err => console.error(err))