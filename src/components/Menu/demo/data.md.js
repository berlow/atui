webpackJsonp([96,192],{435:function(n,e){"use strict";n.exports={content:{"zh-CN":[["p","\u5982\u679c\u4f60\u7684menu\u662f\u52a8\u6001\u751f\u6210\u7684\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7ed9menu\u7ec4\u4ef6\u7ed1\u5b9a\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\u6765\u52a8\u6001\u81ea\u52a8\u6e32\u67d3\uff0c\u8be6\u7ec6\u7684\u6570\u636e\u7ed3\u6784\u53c2\u8003\u4e0b\u9762\u7684\u6587\u6863"]],"en-US":[]},meta:{order:3,title:{"zh-CN":"\u7ed1\u5b9a\u6570\u636e\u81ea\u52a8\u6e32\u67d3","en-US":"Type"},filename:"src/components/Menu/demo/data.md",id:"src-components-Menu-demo-data"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>v<span class="token operator">-</span>menu @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"click"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"menuData"</span><span class="token operator">></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu</span><span class="token punctuation">></span></span>'}],preview:'<v-menu @click.native="click" v-model="menuData">\n</v-menu>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vMenu: atui.Menu,\n    vMenuItem: atui.Menu.MenuItem,\n    vMenuItemGroup: atui.Menu.MenuItemGroup,\n    vSubMenu: atui.Menu.SubMenu\n  },\n  data: {\n    menuData: [\n      {\n        type: 'SubMenu',\n        uuid: 'sub1',\n        title: '\u5bfc\u822a\u4e00',\n        children: [\n          {\n            type: 'MenuItemGroup',\n            title: '\u5206\u7ec41',\n            uuid: 'sub1',\n            children: [\n              {\n                type: 'MenuItem',\n                uuid: '1',\n                content: '\u9009\u98791'\n              },\n              {\n                type: 'MenuItem',\n                uuid: '2',\n                content: '\u9009\u98792'\n              }\n            ]\n          },\n          {\n            type: 'MenuItemGroup',\n            title: '\u5206\u7ec42',\n            uuid: 'sub2',\n            children: [\n              {\n                type: 'MenuItem',\n                uuid: '3',\n                content: '\u9009\u98793'\n              },\n              {\n                type: 'MenuItem',\n                uuid: '4',\n                content: '\u9009\u98794'\n              }\n            ]\n          }\n        ]\n      },\n      {\n        type: 'SubMenu',\n        title: '\u5bfc\u822a\u4e8c',\n        uuid: 'sub2',\n        children: [\n          {\n            type: 'MenuItem',\n            uuid: '5',\n            content: '\u9009\u98795'\n          },\n          {\n            type: 'MenuItem',\n            uuid: '6',\n            content: '\u9009\u98796'\n          },\n          {\n            type: 'SubMenu',\n            uuid: 'sub3',\n            title: '\u4e09\u7ea7\u5bfc\u822a',\n            children: [\n              {\n                type: 'MenuItem',\n                uuid: '7',\n                content: '\u9009\u98797'\n              },\n              {\n                type: 'MenuItem',\n                uuid: '8',\n                content: '\u9009\u98798'\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  methods: {\n    click(e,d) {\n      console.log('menu-click',e,d)\n    }\n  }\n})"}}});