import notion from "../utils.js/notionAPI.js";


//this 
export const getStatus = async( req, res ) => {
    try {
        const databaseId = process.env.NOTION_DB_API;
        const response = await notion.databases.retrieve({ database_id: databaseId });
        console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

//this gives us page id, we extract the content using block content apis. and then display that content
export const getAllPagesInDB = async( req, res ) => {

    const statusType = req.params.type;
    console.log(statusType);
    const databaseId = process.env.NOTION_DB_API;
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        select: {
          equals: statusType,
        }
    }
    });
    // console.log(response);
    return res.status(200).json(response);
  };
        
     


