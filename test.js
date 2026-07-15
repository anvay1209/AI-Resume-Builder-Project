const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://anvay:kxR1e7DMp08hPDwH@interview-ai-cluster.ehauojs.mongodb.net/?appName=interview-ai-cluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("not connected",error);
  } finally {
    await client.close();
  }
}

run();