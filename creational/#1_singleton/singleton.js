class Database {
     constructor(data) {
         if (Database.instance) {
             return Database.instance
         }

         Database.instance = this
         this.data = data
     }

     getData() {
         console.log(this.data);
     }
}

const mongo = new Database('mongo')
const mysql = new Database('mysql')

mongo.getData()
mysql.getData()