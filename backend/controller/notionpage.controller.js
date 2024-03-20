import notion from "../utils.js/notionAPI.js";

// export const getPage = async( req, res ) => {
   
//     try {
//         const pageId = 'bb9444e56c5b464b9738d58885f9eb41';
//         const response = await notion.pages.retrieve({ page_id: pageId });
//         console.log(response);
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getPageContent = async( req, res ) => {
    try {
        const id = req.params.id
        const blockId = id;
        const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50,
        });
        // console.log(response);
        res.status(200).json(response);

    } catch (error) {
        console.log(error)
    }
}


export const getPageProperties = async( req, res ) => {
    try {
        const pageId = '59833787-2cf9-4fdf-8782-e53db20768a5';
        const response = await notion.pages.retrieve({ page_id: pageId });
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

