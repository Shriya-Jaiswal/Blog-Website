import mongoose from "mongoose";


const Connection = async (username , password) =>{
    const URL = `mongodb://${username}:${password}@blog-webdesk-shard-00-00.lk39j.mongodb.net:27017,blog-webdesk-shard-00-01.lk39j.mongodb.net:27017,blog-webdesk-shard-00-02.lk39j.mongodb.net:27017/?ssl=true&replicaSet=atlas-bmgkhh-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser : true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connection with the database ' , error.message);
    }
}

export default Connection; 