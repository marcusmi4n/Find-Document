const client = new MongoClient("mongodb://localhost:27017");
await client.connect();

const db = client.db("school");
const result = await db.collection("students").findOne({ name: "Mark" });
console.log(result);
