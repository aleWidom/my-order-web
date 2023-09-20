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
        queryMySql = `select * from Category`
    }
    else if (event.queryStringParameters?.search !== undefined) {
        queryMySql = `select * from Item where title like "%${event.queryStringParameters.search}%"`
    }
    else if (event.queryStringParameters?.ranking !== undefined) {
        queryMySql = `SELECT * FROM Item WHERE id IN(2,61,83)`
    }
    else if (event.queryStringParameters?.dayPlates!== undefined) {
        queryMySql = `SELECT * FROM Item WHERE id IN(37,85,81,111)`
    }
    else if (event.queryStringParameters?.specials!== undefined) {
        queryMySql = `SELECT * FROM Item WHERE id IN(47,72,89)`
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