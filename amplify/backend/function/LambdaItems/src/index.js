/**
 *
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


exports.handler = async (event) => {

    let mysql = require('mysql');

    let connection;

    let result;

    
 try {
     
     connection= mysql.createConnection({
        host: 'myorderdatabase.cluster-ctulrcqrkejd.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'admin123456',
        database: 'myorder'
     })
     
    let queryMySql = `select * from Item`
    
    if (event.queryStringParameters?.categories !== undefined) {  
        queryMySql = `SELECT * from Category ORDER BY CategoryID Asc;`
    }
    else if (event.queryStringParameters?.search !== undefined) {
        queryMySql = `select * from Item where title like "%${event.queryStringParameters.search}%"`
    }
    else if (event.queryStringParameters?.fetchItemPeopleInTable !== undefined) {
        queryMySql = `select id_item as ItemID, title, orderNumberID, numberTable , quantity, price,state, date from Item_peopleInTable , Item
        Where Item_peopleInTable.id_item = Item.ItemID AND Item_peopleInTable.id_peopleInTable = ${JSON.stringify(event.queryStringParameters.fetchItemPeopleInTable)} ORDER BY date DESC;`
    }
    else if (event.queryStringParameters?.itemsAcordingCategory !== undefined) {
        queryMySql = `select ItemID, title, description, price from Category , Item
        where CategoryID = Item.id_category AND CategoryID=${event.queryStringParameters.itemsAcordingCategory}`
    }
    else if (event.queryStringParameters?.makeDelivered !== undefined) {
        queryMySql = `Update Item_peopleInTable SET state = "delivered" where ItemPeopleInTableID = ${JSON.stringify(event.pathParameters.proxy.slice(0, 36))} ;`
    }

    const promiseQuery = new Promise((resolve) => {
        connection.query(`${queryMySql}`, function (error, results, fields) {
            resolve(results)
        });
    })
    result = await promiseQuery
}
 
    catch (err) {
    return err
  } finally {
    if (connection) await connection.end() 
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