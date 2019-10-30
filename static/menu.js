const { Menu,app,BrowserWindow} = require('electron');
const path = require('path');
// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
// let mainWindowChild;
let template = [{
        label: '关于',
        submenu: [{
                label: '关于trial',
                click: () => {
                    const { shell } = require('electron')
                    shell.openExternal('http://www.taimeitech.com/')
                }
            },
            { type: 'separator' },
            {
                label: '隐藏',
                role: 'hide'
            },
            {
                label: '隐藏其他',
                role: 'hideothers'
            },
            {
                label: '显示所有',
                role: 'unhide'
            },

            { type: 'separator' },
            {
                label: '退出',
                role: 'quit'
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// let windowConfig = {  
//     width:800,  
//     height:600  
// }; 
// function createWindowChild () {

//   //创建浏览器窗口,宽高自定义具体大小你开心就好
//   mainWindowChild = new BrowserWindow(windowConfig)
//   // 加载应用--- 通过环境判断
//   mainWindowChild.loadURL(`file://${path.join(__dirname, '../template/productlist.html')}`);
//   mainWindowChild.setMenu(null);
//   mainWindowChild.on('close',function(){
//       mainWindowChild=null;
//   })
// }