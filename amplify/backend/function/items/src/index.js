/**
 *
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const mysql = require('mysql2');

exports.handler = async (event) => {
    let connection;
    let result;

    try {
        console.log("🟢 Intentando conectar a MySQL...");

        connection = mysql.createConnection({
            host: 'recuperamacionmyorderdb-cluster.cluster-ctulrcqrkejd.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: 'admin123456',
            database: 'myorder'
        });

        console.log("✅ Conexión exitosa");

        let queryMySql = `SELECT * FROM Item`;

        if (event.queryStringParameters?.categories !== undefined) {
            queryMySql = `SELECT * FROM Category ORDER BY CategoryID ASC;`;
        }
        else if (event.queryStringParameters?.search !== undefined) {
            queryMySql = `SELECT * FROM Item WHERE title LIKE "%${event.queryStringParameters.search}%"`;
        }
        else if (event.queryStringParameters?.fetchItemPeopleInTable !== undefined) {
            queryMySql = `SELECT id_item AS ItemID, title, orderNumberID, id_peopleInTable, numberTable, quantity, price, state, date 
                          FROM Item_peopleInTable 
                          JOIN Item ON Item_peopleInTable.id_item = Item.ItemID 
                          WHERE Item_peopleInTable.id_peopleInTable = ${JSON.stringify(event.queryStringParameters.fetchItemPeopleInTable)} 
                          ORDER BY date DESC`;
        }
        else if (event.queryStringParameters?.itemsAcordingCategory !== undefined) {
            queryMySql = `SELECT ItemID, title, description, price 
                          FROM Category 
                          JOIN Item ON CategoryID = Item.id_category 
                          WHERE CategoryID=${event.queryStringParameters.itemsAcordingCategory}`;
        }
        else if (event.queryStringParameters?.makeDelivered !== undefined) {
            queryMySql = `UPDATE Item_peopleInTable SET state = "delivered" WHERE ItemPeopleInTableID = ${JSON.stringify(event.pathParameters.proxy.slice(0, 36))};`;
        }
        else if (event.queryStringParameters?.deleteItem !== undefined) {
            queryMySql = `DELETE FROM Item_peopleInTable WHERE OrderNumberID = ${JSON.stringify(event.queryStringParameters.deleteItem)};`;
        }

        if (!connection) {
            throw new Error("🔴 No se pudo establecer conexión con la base de datos");
        }

        console.log("🔵 Ejecutando query:", queryMySql);

        const promiseQuery = new Promise((resolve, reject) => {
            connection.query(queryMySql, function (error, results) {
                if (error) reject(error);
                else resolve(results);
            });
        });

        result = await promiseQuery;
        console.log("🟢 Query ejecutada con éxito");

    }
    catch (err) {
        console.error("🔴 Error en la consulta:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Database query failed", details: err.message })
        };
    } finally {
        if (connection) {
            console.log("🟡 Cerrando conexión...");
            connection.destroy();
        }
    }

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(result),
    };
};