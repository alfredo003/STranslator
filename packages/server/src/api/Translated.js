const dotenv = require('dotenv').config();
const {Configuration,OpenAIApi} = require('openai');


const translator = ((req,res)=>{
  const {languange,text} = req.body;

  const openai = new OpenAIApi(new Configuration({
    apiKey:"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"
  }))
  
  openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages:[{role:"user",content:`Traduz para ${languange} :${text}` }]
  }).then(t=>{
    const response = t.data.choices[0].message.content;
    res.status(200).json({Response:{
      text:text,
      transaction:response,
    }}); 
  })

});


module.exports = {translator};