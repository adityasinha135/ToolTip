const {pool} = require('../config/database_pg');

const toolTipButtonHandler = async (req, res) => {
    try{
        const result = await pool.query('SELECT message, position FROM toolkit');
        const toolTipButtonMessage = result.rows[0].message;
        const toolTipButtonPosition = result.rows[0].position;
        res.send({data : {mess : toolTipButtonMessage, pos : toolTipButtonPosition}});
    }
    catch(error){
        console.log('error fetching', error.stack);
        res.status(500).json({message : error.stack});
    }
}

const toolTipImage1Handler = async (req, res) => {
    try{
        const result = await pool.query('SELECT message, position FROM toolkit');
        const toolTipImage1Message = result.rows[1].message
        const toolTipImage1Position = result.rows[1].position
        res.send({data : {mess : toolTipImage1Message, pos : toolTipImage1Position}});
    }
    catch(error){
        console.log('error fetching', error.stack);
        res.status(500).json({error : error.stack});
    }
}


const toolTipImage2Handler = async (req, res) => {
    try{
        const result = await pool.query('SELECT message, position FROM toolkit');
        const toolTipImage2Message = result.rows[2].message
        const toolTipImage2Position = result.rows[2].position
        res.send({data : {mess : toolTipImage2Message, pos : toolTipImage2Position}});
    }
    catch(error){
        console.log('error fetching', error.stack);
        res.status(500).json({message : error.stack});
    }
}

const toolTipImage3Handler = async (req, res) => {
    try{
        const result = await pool.query('SELECT message, position FROM toolkit');
        const toolTipImage3Message = result.rows[3].message
        const toolTipImage3Position = result.rows[3].position
        res.send({data : {mess : toolTipImage3Message, pos : toolTipImage3Position}});
    }
    catch(error){
        console.log('error fetching', error);
        res.status(500).json({message : error.stack});
    }
}
module.exports = {toolTipButtonHandler, toolTipImage1Handler, toolTipImage2Handler, toolTipImage3Handler};