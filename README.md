# parallel-topics-server

```npx sequelize-cli db:migrate```  
```npx sequelize-cli model:generate --name User --attributes name:string,password:string,email:string```  

```
pm2 delete -s app || :
pm2 start ./index.js --name=app
```  

Install Error: Can't find Python executable:  
``` npm --add-python-to-path='true' --debug install --global windows-build-tools ```  
