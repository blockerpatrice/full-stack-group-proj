const express = require("express");
const chatRouter = express.Router();

chatRouter.route("/") 

.post((request, response)=> {
    const newChat = new Chat(request.body);
    newChat.save((err,new_destination) =>{
        if(err) return response.status(500).send(err)
        return response.send(new_destination)
    })

})


