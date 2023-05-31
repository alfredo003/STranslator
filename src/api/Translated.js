

const translator = ((req,res)=>{
  const {languange,text} = req.body;
  res.json();

});


module.exports = {translator};