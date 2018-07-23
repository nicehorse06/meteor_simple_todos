meteor 版本為 1.7.0

位於 ~/.meteor/

建構檔案指令
```
meteor create simple-todos
```

在建構的檔案底下跑一個執行於 http://localhost:3000/ 的 hot loading server
```
meteor
```

目錄結構：
client/main.js        # a JavaScript entry point loaded on the client
client/main.html      # an HTML file that defines view templates
client/main.css       # a CSS file to define your app's styles
server/main.js        # a JavaScript entry point loaded on the server
package.json          # a control file for installing NPM packages
package-lock.json     # Describes the NPM dependency tree
.meteor               # internal Meteor files
.gitignore            # a control file for git