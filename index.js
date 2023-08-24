const dbConection = require("./mongodb")


const main = async () => {
    let data = await dbConection();
    data = await data.find().toArray();

    console.warn(data)
}
main()


