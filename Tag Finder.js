const _0x375129=_0x29e7;function _0x7c58(){const _0x56d039=['virtualList','scroll','height','createElement','filter','onload','toLowerCase','error','<span\x20class=\x22highlight\x22>$1</span>','createDocumentFragment','\x0a\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#121212;\x20/*\x20Dark\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#e0e0e0;\x20/*\x20Light\x20text\x20color\x20for\x20contrast\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20320px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.search-bar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.search-bar\x20input\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#1e1e1e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#e0e0e0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scrolling-frame\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20400px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#1e1e1e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scrolling-frame::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x208px;\x20/*\x20Shrink\x20the\x20scrollbar\x20size\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scrolling-frame::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#1e1e1e;\x20/*\x20Dark\x20scrollbar\x20track\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scrolling-frame::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#444;\x20/*\x20Darker\x20scrollbar\x20handle\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scrolling-frame::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#555;\x20/*\x20Slightly\x20lighter\x20on\x20hover\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.virtual-list\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.virtual-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2095%;\x20/*\x20Slightly\x20shrink\x20the\x20lighter\x20gray\x20width\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x202.5%;\x20/*\x20Center\x20align\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px;\x20/*\x20Reduced\x20padding\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#e0e0e0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background\x200.3s;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.virtual-item:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#444;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.virtual-item\x20span.highlight\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#444;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffcc00;\x20/*\x20Highlighted\x20text\x20color\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20}\x0a','1188731QZruJq','className','scrolling-frame','10UPSTxs','length','searchInput','text','365IaPdiE','includes','input','Error\x20fetching\x20or\x20parsing\x20the\x20CSV\x20data:','slice','appendChild','trim','24444068Goqrlx','div','6609702hppukW','min','scrollingFrame','top','floor','getElementById','6253144fJeumm','replace','18764QgQIWK','search-bar','type','ceil','3uFQSiI','value','138393gTMsFU','addEventListener','body','textContent','1939414FRcgQa','style','7hWGTYi','innerHTML','container','virtual-list','oninput','Search\x20tags...','split'];_0x7c58=function(){return _0x56d039;};return _0x7c58();}(function(_0x273a8e,_0x2c8bed){const _0x4dd489=_0x29e7,_0xc9a203=_0x273a8e();while(!![]){try{const _0x5cd759=-parseInt(_0x4dd489(0x1c5))/0x1+parseInt(_0x4dd489(0x1e7))/0x2*(-parseInt(_0x4dd489(0x1e1))/0x3)+parseInt(_0x4dd489(0x1dd))/0x4*(parseInt(_0x4dd489(0x1cc))/0x5)+parseInt(_0x4dd489(0x1d5))/0x6*(parseInt(_0x4dd489(0x1e9))/0x7)+-parseInt(_0x4dd489(0x1db))/0x8+parseInt(_0x4dd489(0x1e3))/0x9*(-parseInt(_0x4dd489(0x1c8))/0xa)+parseInt(_0x4dd489(0x1d3))/0xb;if(_0x5cd759===_0x2c8bed)break;else _0xc9a203['push'](_0xc9a203['shift']());}catch(_0x5479e1){_0xc9a203['push'](_0xc9a203['shift']());}}}(_0x7c58,0xad886));const style=document[_0x375129(0x1f3)]('style');style[_0x375129(0x1e6)]=_0x375129(0x1c4),document['head'][_0x375129(0x1d1)](style);const container=document['createElement']('div');container['className']=_0x375129(0x1eb);const searchBar=document['createElement'](_0x375129(0x1d4));searchBar[_0x375129(0x1c6)]=_0x375129(0x1de);const input=document[_0x375129(0x1f3)](_0x375129(0x1ce));input[_0x375129(0x1df)]=_0x375129(0x1cb),input['id']=_0x375129(0x1ca),input['placeholder']=_0x375129(0x1ee),input[_0x375129(0x1ed)]=()=>filterAndRender(),searchBar['appendChild'](input);const scrollingFrame=document['createElement'](_0x375129(0x1d4));scrollingFrame[_0x375129(0x1c6)]=_0x375129(0x1c7),scrollingFrame['id']='scrollingFrame';const virtualList=document[_0x375129(0x1f3)]('div');virtualList[_0x375129(0x1c6)]=_0x375129(0x1ec),virtualList['id']=_0x375129(0x1f0),scrollingFrame['appendChild'](virtualList),container['appendChild'](searchBar),container[_0x375129(0x1d1)](scrollingFrame),document[_0x375129(0x1e5)][_0x375129(0x1d1)](container);let cachedTags=[],filteredTags=[];function _0x29e7(_0x591a41,_0x256185){const _0x7c58a=_0x7c58();return _0x29e7=function(_0x29e78f,_0x584a3d){_0x29e78f=_0x29e78f-0x1c1;let _0x1a8422=_0x7c58a[_0x29e78f];return _0x1a8422;},_0x29e7(_0x591a41,_0x256185);}const itemHeight=0x32,buffer=0x5,csvUrl='https://raw.githubusercontent.com/BetaDoggo/danbooru-tag-list/main/danbooru-12-10-24-dash.csv';async function loadTags(){const _0x37a96a=_0x375129;try{const _0x59990c=await fetch(csvUrl),_0x32d894=await _0x59990c[_0x37a96a(0x1cb)]();cachedTags=parseCSV(_0x32d894),filteredTags=cachedTags,renderVirtualizedList();}catch(_0x17cd98){console[_0x37a96a(0x1c1)](_0x37a96a(0x1cf),_0x17cd98);}}function parseCSV(_0x2097f3){const _0x1df575=_0x375129,_0x456db4=_0x2097f3[_0x1df575(0x1ef)]('\x0a');return _0x456db4[_0x1df575(0x1d0)](0x1)['map'](_0x7a1ea3=>_0x7a1ea3['split'](',')[0x0]?.[_0x1df575(0x1d2)]())[_0x1df575(0x1f4)](Boolean);}function renderVirtualizedList(){const _0x50d021=_0x375129,_0x46e925=document[_0x50d021(0x1da)](_0x50d021(0x1d7)),_0x24338e=document[_0x50d021(0x1da)]('virtualList');_0x24338e[_0x50d021(0x1e8)][_0x50d021(0x1f2)]=filteredTags[_0x50d021(0x1c9)]*itemHeight+'px',_0x46e925[_0x50d021(0x1e4)](_0x50d021(0x1f1),()=>updateVisibleItems(_0x46e925,_0x24338e)),updateVisibleItems(_0x46e925,_0x24338e);}function updateVisibleItems(_0x5b0ee3,_0x4e3dff){const _0x74b5f4=_0x375129,_0x22db30=_0x5b0ee3['scrollTop'],_0x449e68=_0x5b0ee3['clientHeight'],_0x443d5b=Math['max'](0x0,Math[_0x74b5f4(0x1d9)](_0x22db30/ itemHeight)-buffer),_0x3aa927=Math[_0x74b5f4(0x1d6)](filteredTags[_0x74b5f4(0x1c9)],Math[_0x74b5f4(0x1e0)]((_0x22db30+_0x449e68)/ itemHeight)+buffer),_0x5c8e9b=document[_0x74b5f4(0x1c3)]();for(let _0x30c16e=_0x443d5b;_0x30c16e<_0x3aa927;_0x30c16e++){const _0x4daec5=document[_0x74b5f4(0x1f3)](_0x74b5f4(0x1d4));_0x4daec5['className']='virtual-item',_0x4daec5[_0x74b5f4(0x1e8)][_0x74b5f4(0x1d8)]=_0x30c16e*itemHeight+'px',_0x4daec5['innerHTML']=highlightText(filteredTags[_0x30c16e],document[_0x74b5f4(0x1da)](_0x74b5f4(0x1ca))[_0x74b5f4(0x1e2)]),_0x5c8e9b[_0x74b5f4(0x1d1)](_0x4daec5);}_0x4e3dff[_0x74b5f4(0x1ea)]='',_0x4e3dff[_0x74b5f4(0x1d1)](_0x5c8e9b);}function highlightText(_0x3229c2,_0x7fcedb){const _0x349854=_0x375129;if(!_0x7fcedb)return _0x3229c2;const _0x27d9d6=new RegExp('('+_0x7fcedb+')','gi');return _0x3229c2[_0x349854(0x1dc)](_0x27d9d6,_0x349854(0x1c2));}function filterAndRender(){const _0x48af6d=_0x375129,_0xfae971=document['getElementById'](_0x48af6d(0x1ca))[_0x48af6d(0x1e2)][_0x48af6d(0x1f6)]();filteredTags=cachedTags[_0x48af6d(0x1f4)](_0x1a1b64=>_0x1a1b64[_0x48af6d(0x1f6)]()[_0x48af6d(0x1cd)](_0xfae971)),renderVirtualizedList();}window[_0x375129(0x1f5)]=loadTags;