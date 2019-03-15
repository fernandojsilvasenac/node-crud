var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectId;

function conectar(callback){
    mongoClient.connect("mongodb://localhost:27017", function(err, conn){
            if(err) return console.log(err);

            global.conn = conn.db("aula03");
            callback();
    })
}

function findAll(callback){  
    global.conn.collection("clientes").find({}).toArray(callback);
}

function findCliente(id, callback){
    global.conn.collection("clientes").findOne({_id: objectId(id)}, callback)
}

function insertCliente(cliente, callback){
    global.conn.collection("clientes").insert(cliente, callback);
}
function updateCliente(id, cliente, callback){
    global.conn.collection("clientes").update({_id: objectId(id) }, cliente, callback);
}
function deleteCliente(id, callback){
    global.conn.collection("clientes").remove({_id: objectId(id) }, callback)
}

module.exports = { conectar, findAll, findCliente, insertCliente, updateCliente, deleteCliente }
            
