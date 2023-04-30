const fs = require('fs');
 
 fs.readFile(__dirname+'/public/sample.csv', "utf-8",(err,data)=>{
  if (err) throw err;
  const ArrayObj = [];
  const tmp = data.split("\n");
  const keys = tmp[0].split(',');
  for(let i=1;i<tmp.length;++i){
    const values = tmp[i].split(',');
    const setObj = {}
    keys.forEach((keyName,index) => {
      const key = keyName.replace(/\r|\s/g, '');
      const value = values[index].replace(/\r/g, '');
      setObj[key] = value;
    });
		ArrayObj.push(setObj)
  }
    fs.writeFile(__dirname+'/dist/sample.json',JSON.stringify(ArrayObj),(err,data)=>{
      if(err) console.log(err);
      else console.log('write end')
    })
});
