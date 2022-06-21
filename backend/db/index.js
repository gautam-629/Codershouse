import mongose from 'mongoose'
const  connectDb=async(DB_URL)=>{
    try {
        await mongose.connect(DB_URL,{dbName:'Codershouse'});
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;