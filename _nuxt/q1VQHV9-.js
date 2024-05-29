import{h as E,g as q,j,i as R,k as O,l as V,m as I,n as Z,q as A,r as w,s as H,v as P,u as $,x as J,y as Y,_ as Q,z as K,c as b,a as v,t as z,F as N,A as X,B as k,o as C,b as tt,p as et,f as it}from"./DYC1qdqE.js";import{u as st}from"./-QgHXzZt.js";async function ot(t,e){return await at(e).catch(i=>(console.error("Failed to get image meta for "+e,i+""),{width:0,height:0,ratio:0}))}async function at(t){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((e,s)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};e(o)},i.onerror=o=>s(o),i.src=t})}function D(t){return e=>e?t[e]||e:t.missingValue}function nt({formatter:t,keyMap:e,joinWith:s="/",valueMap:i}={}){t||(t=(n,a)=>`${n}=${a}`),e&&typeof e!="function"&&(e=D(e));const o=i||{};return Object.keys(o).forEach(n=>{typeof o[n]!="function"&&(o[n]=D(o[n]))}),(n={})=>Object.entries(n).filter(([r,l])=>typeof l<"u").map(([r,l])=>{const d=o[r];return typeof d=="function"&&(l=d(n[r])),r=typeof e=="function"?e(r):r,t(r,l)}).join(s)}function u(t=""){if(typeof t=="number")return t;if(typeof t=="string"&&t.replace("px","").match(/^\d+$/g))return Number.parseInt(t,10)}function rt(t=""){if(t===void 0||!t.length)return[];const e=new Set;for(const s of t.split(" ")){const i=Number.parseInt(s.replace("x",""));i&&e.add(i)}return Array.from(e)}function ct(t){if(t.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function lt(t){const e={};if(typeof t=="string")for(const s of t.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?e["1px"]=i[0].trim():e[i[0].trim()]=i[1].trim()}else Object.assign(e,t);return e}function dt(t){const e={options:t},s=(o,n={})=>L(e,o,n),i=(o,n={},a={})=>s(o,{...a,modifiers:O(n,a.modifiers||{})}).url;for(const o in t.presets)i[o]=(n,a,r)=>i(n,a,{...t.presets[o],...r});return i.options=t,i.getImage=s,i.getMeta=(o,n)=>ht(e,o,n),i.getSizes=(o,n)=>pt(e,o,n),e.$img=i,i}async function ht(t,e,s){const i=L(t,e,{...s});return typeof i.getMeta=="function"?await i.getMeta():await ot(t,i.url)}function L(t,e,s){var d,p;if(e&&typeof e!="string")throw new TypeError(`input must be a string (received ${typeof e}: ${JSON.stringify(e)})`);if(!e||e.startsWith("data:"))return{url:e};const{provider:i,defaults:o}=gt(t,s.provider||t.options.provider),n=ut(t,s.preset);if(e=E(e)?e:q(e),!i.supportsAlias)for(const m in t.options.alias)e.startsWith(m)&&(e=j(t.options.alias[m],e.substr(m.length)));if(i.validateDomains&&E(e)){const m=R(e).host;if(!t.options.domains.find(y=>y===m))return{url:e}}const a=O(s,n,o);a.modifiers={...a.modifiers};const r=a.modifiers.format;(d=a.modifiers)!=null&&d.width&&(a.modifiers.width=u(a.modifiers.width)),(p=a.modifiers)!=null&&p.height&&(a.modifiers.height=u(a.modifiers.height));const l=i.getImage(e,a,t);return l.format=l.format||r||"",l}function gt(t,e){const s=t.options.providers[e];if(!s)throw new Error("Unknown provider: "+e);return s}function ut(t,e){if(!e)return{};if(!t.options.presets[e])throw new Error("Unknown preset: "+e);return t.options.presets[e]}function pt(t,e,s){var g,S,M,F,x;const i=u((g=s.modifiers)==null?void 0:g.width),o=u((S=s.modifiers)==null?void 0:S.height),n=lt(s.sizes),a=(M=s.densities)!=null&&M.trim()?rt(s.densities.trim()):t.options.densities;ct(a);const r=i&&o?o/i:0,l=[],d=[];if(Object.keys(n).length>=1){for(const h in n){const f=T(h,String(n[h]),o,r,t);if(f!==void 0){l.push({size:f.size,screenMaxWidth:f.screenMaxWidth,media:`(max-width: ${f.screenMaxWidth}px)`});for(const _ of a)d.push({width:f._cWidth*_,src:B(t,e,s,f,_)})}}mt(l)}else for(const h of a){const f=Object.keys(n)[0];let _=T(f,String(n[f]),o,r,t);_===void 0&&(_={size:"",screenMaxWidth:0,_cWidth:(F=s.modifiers)==null?void 0:F.width,_cHeight:(x=s.modifiers)==null?void 0:x.height}),d.push({width:h,src:B(t,e,s,_,h)})}ft(d);const p=d[d.length-1],m=l.length?l.map(h=>`${h.media?h.media+" ":""}${h.size}`).join(", "):void 0,y=m?"w":"x",c=d.map(h=>`${h.src} ${h.width}${y}`).join(", ");return{sizes:m,srcset:c,src:p==null?void 0:p.src}}function T(t,e,s,i,o){const n=o.options.screens&&o.options.screens[t]||Number.parseInt(t),a=e.endsWith("vw");if(!a&&/^\d+$/.test(e)&&(e=e+"px"),!a&&!e.endsWith("px"))return;let r=Number.parseInt(e);if(!n||!r)return;a&&(r=Math.round(r/100*n));const l=i?Math.round(r*i):s;return{size:e,screenMaxWidth:n,_cWidth:r,_cHeight:l}}function B(t,e,s,i,o){return t.$img(e,{...s.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},s)}function mt(t){var s;t.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let e=null;for(let i=t.length-1;i>=0;i--){const o=t[i];o.media===e&&t.splice(i,1),e=o.media}for(let i=0;i<t.length;i++)t[i].media=((s=t[i+1])==null?void 0:s.media)||""}function ft(t){t.sort((s,i)=>s.width-i.width);let e=null;for(let s=t.length-1;s>=0;s--){const i=t[s];i.width===e&&t.splice(s,1),e=i.width}}const vt=nt({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(t,e)=>I(t)+"_"+I(e)}),wt=(t,{modifiers:e={},baseURL:s}={},i)=>{e.width&&e.height&&(e.resize=`${e.width}x${e.height}`,delete e.width,delete e.height);const o=vt(e)||"_";return s||(s=j(i.options.nuxt.baseURL,"/_ipx")),{url:j(s,o,V(t))}},kt=!0,_t=!0,yt=Object.freeze(Object.defineProperty({__proto__:null,getImage:wt,supportsAlias:_t,validateDomains:kt},Symbol.toStringTag,{value:"Module"})),G={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};G.providers={ipxStatic:{provider:yt,defaults:{}}};const U=()=>{const t=Z(),e=A();return e.$img||e._img||(e._img=dt({...G,nuxt:{baseURL:t.app.baseURL}}))};function bt(t){var e;(e=performance==null?void 0:performance.mark)==null||e.call(performance,"mark_feature_usage",{detail:{feature:t}})}const zt={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:t=>["lazy","eager"].includes(t)},crossorigin:{type:[Boolean,String],default:void 0,validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)},decoding:{type:String,default:void 0,validator:t=>["async","auto","sync"].includes(t)},nonce:{type:[String],default:void 0}},Ct=t=>{const e=w(()=>({provider:t.provider,preset:t.preset})),s=w(()=>({width:u(t.width),height:u(t.height),alt:t.alt,referrerpolicy:t.referrerpolicy,usemap:t.usemap,longdesc:t.longdesc,ismap:t.ismap,crossorigin:t.crossorigin===!0?"anonymous":t.crossorigin||void 0,loading:t.loading,decoding:t.decoding,nonce:t.nonce})),i=U(),o=w(()=>({...t.modifiers,width:u(t.width),height:u(t.height),format:t.format,quality:t.quality||i.options.quality,background:t.background,fit:t.fit}));return{options:e,attrs:s,modifiers:o}},jt={...zt,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},St=H({name:"NuxtImg",props:jt,emits:["load","error"],setup:(t,e)=>{const s=U(),i=Ct(t),o=P(!1),n=P(),a=w(()=>s.getSizes(t.src,{...i.options.value,sizes:t.sizes,densities:t.densities,modifiers:{...i.modifiers.value,width:u(t.width),height:u(t.height)}})),r=w(()=>{const c={...i.attrs.value,"data-nuxt-img":""};return(!t.placeholder||o.value)&&(c.sizes=a.value.sizes,c.srcset=a.value.srcset),c}),l=w(()=>{let c=t.placeholder;if(c===""&&(c=!0),!c||o.value)return!1;if(typeof c=="string")return c;const g=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return s(t.src,{...i.modifiers.value,width:g[0],height:g[1],quality:g[2]||50,blur:g[3]||3},i.options.value)}),d=w(()=>t.sizes?a.value.src:s(t.src,i.modifiers.value,i.options.value)),p=w(()=>l.value?l.value:d.value);if(t.preload){const c=Object.values(a.value).every(g=>g);$({link:[{rel:"preload",as:"image",nonce:t.nonce,...c?{href:a.value.src,imagesizes:a.value.sizes,imagesrcset:a.value.srcset}:{href:p.value},...typeof t.preload!="boolean"&&t.preload.fetchPriority?{fetchpriority:t.preload.fetchPriority}:{}}]})}const y=A().isHydrating;return J(()=>{if(l.value){const c=new Image;c.src=d.value,t.sizes&&(c.sizes=a.value.sizes||"",c.srcset=a.value.srcset),c.onload=g=>{o.value=!0,e.emit("load",g)},bt("nuxt-image");return}n.value&&(n.value.complete&&y&&(n.value.getAttribute("data-error")?e.emit("error",new Event("error")):e.emit("load",new Event("load"))),n.value.onload=c=>{e.emit("load",c)},n.value.onerror=c=>{e.emit("error",c)})}),()=>Y("img",{ref:n,...r.value,...e.attrs,class:t.placeholder&&!o.value?[t.placeholderClass]:void 0,src:p.value})}}),Mt={link:"https://chat.whatsapp.com/JrAixaQ8yAnCGj15keTOMx",disc:"Создание совместных проектов, изучение доп. IT знаний",logo:"MPD.jpg",disc_kz:"Бірлескен жобаларды құру, қосымша IT білімді зерттеу"},Ft={link:"https://chat.whatsapp.com/GVTQe942PZmH02OXlwu1Ee",disc:"Развитие политической грамотности и ораторского мастерства. Также возможность, подтянуть уровень английского языка",logo:"MUN.jpg",disc_kz:"Саяси сауаттылық пен шешендік шеберлікті дамыту. Сондай-ақ, ағылшын тілінің деңгейін көтеру мүмкіндігі"},xt={link:"https://chat.whatsapp.com/CUIwW8aX5QLAZTaLNw035n",disc:"Подготовка к научному турниру IYNT",logo:"SYNT.jpg",disc_kz:"Iynt ғылыми турниріне дайындық"},Et={link:"https://chat.whatsapp.com/J5xGdmr1RjkAh0HGaJNYf3",disc:"Интеллектуальные игры разного формата,Рубрика интересных фактов ,Не напряжённые встречи",logo:"Evrima.jpg",disc_kz:"Әр түрлі форматтағы интеллектуалды ойындар ,қызықты фактілер айдары, стресстік кездесулер емес"},W={MPD:Mt,"The Creators Club":{link:"https://chat.whatsapp.com/JXRPG4M5NoZ8lpnmQvhRSf",disc:"Обучение рисованию и совместное создание проектов,пополнение портфолио",logo:"TheCreatorsClub.jpg",disc_kz:"Сурет салуды үйрену және жобаларды бірлесіп құру, портфолионы толықтыру"},MUN:Ft,"Chess Club":{link:"https://chat.whatsapp.com/FPb0ZIuCFR60Uk0AlhlkJI",disc:" Совместная игра и обучение в шахматы",logo:"Chess.jpg",disc_kz:"Бірлескен ойын және шахмат жаттығулары"},"Дебатный клуб":{link:"https://chat.whatsapp.com/FMZOxeqqZpA7nxtZKhLBfG",disc:"Организация и участие в турнирах, проведение встреч и собраний с спикерами. Развитие ораторского искусства",logo:"debate.jpg",disc_kz:"Турнирлерді ұйымдастыру және қатысу, спикерлермен кездесулер мен жиналыстар өткізу. Шешендік өнерді дамыту"},"Volunteering Club":{link:"https://chat.whatsapp.com/EyMgr9UkgyfFWyyS6Sk47q",disc:"Наш клуб занимается продвижением волонтерских проектов, волонтерской поддержкой внутри и внешкольных ивентов",logo:"VolunteeringClub.jpg",disc_kz:"Біздің клуб волонтерлік жобаларды ілгерілетумен, волонтерлік қолдаумен және мектептен тыс іс-шаралармен айналысады"},"Лига Плохих Шуток":{link:"https://chat.whatsapp.com/LABcohhUxDkFRrwiCvT14i",disc:"Проводить КВН, юмористические шоу и т.п.",logo:"LBJ.jpg",disc_kz:"КВН, әзіл-оспақ шоуларын және т. б. өткізу."},"Agro Club":{link:"https://chat.whatsapp.com/FgpCPEOlVqDAapEmYPVfdd",disc:"Выращивание зелени",logo:"AgroClub.jpg",disc_kz:"Жасыл өсіру"},"Finance Club":{link:"https://chat.whatsapp.com/DVPgtXIo9f13KmEwZc2l2L",disc:"Подготовка к олимпиадам по экономике/финансам/бизнесу и инвестиционным соревнованиям. Финансовая грамотность ",logo:"FinanceClub.jpg",disc_kz:"Экономика/қаржы/бизнес және инвестициялық жарыстар бойынша олимпиадаларға дайындық. Қаржылық сауаттылық "},"Research Club":{link:"https://chat.whatsapp.com/FsM9kucBnJN96ehtCfJgMI",disc:"Проведение общих анализов проектов, научных выставок и Написание научных исследовательских работ ",logo:"ResearchClub.jpg",disc_kz:"Жобаларға, ғылыми көрмелерге жалпы талдау жүргізу және ғылыми зерттеу жұмыстарын жазу "},"Tennis Club":{link:"https://chat.whatsapp.com/FSEicCjOhJMCPpwe78l87e",disc:"Для тех, кто любит играть в настольный теннис",logo:"TennisClub.jpg",disc_kz:"Үстел теннисін ойнағанды ұнататындар үшін"},"Peer to Peer":{link:"https://chat.whatsapp.com/D4yPK21aVPo6qxpMejc2nO",disc:"Просвещаем молодежь через интерактивные тренинги и рассказываем о табуированных темах в Казахстане",logo:"PeertoPeer.jpg",disc_kz:"Біз жастарды интерактивті тренингтер арқылы оқытамыз және Қазақстандағы тыйым салынған тақырыптар туралы айтамыз"},"Math Club":{link:"https://chat.whatsapp.com/Bq4692v76D41lOVTD7pvbL",disc:"Изучение олимпиадной математики, разборы сложных задач.",logo:"MathClub.jpg",disc_kz:"Олимпиадалық математиканы зерттеу, күрделі мәселелерді талдау."},"Fizmat Writers":{link:"https://chat.whatsapp.com/L1D9oQjkvd128wal58dCfW",disc:"Развитие уровня грамматики и речи, а так же написание эссе",logo:"FizmatWriters.jpg",disc_kz:"Грамматика мен сөйлеу деңгейін дамыту, сонымен қатар эссе жазу"},"Fizmat Talks":{link:"https://chat.whatsapp.com/HKW3ialTCNmLWw3kR4MtTP",disc:"Звать спикеров и выступать самим",logo:"FizmatTalks.jpg",disc_kz:"Спикерлерді шақырыңыз және өзіңіз сөйлеңіз"},"Space Odyssey":{link:"https://chat.whatsapp.com/BDLjo7BC11v9sFaVIlOczf",disc:"Клуб для тех кто хочет увидеть звезды!",logo:"SpaceOdyssey.jpg",disc_kz:"Жұлдыздарды көргісі келетіндерге арналған Клуб!"},SYNT:xt,"Воллейбольный клуб":{link:"https://chat.whatsapp.com/GYqkUtmuZBBB8LQU0pqvVZ",disc:"Улучшение игровых навыков, организация матчей среди школьников.",logo:"volebal.jpg",disc_kz:"Ойын дағдыларын жетілдіру, оқушылар арасында матчтар ұйымдастыру."},"Fizmat News":{link:"https://chat.whatsapp.com/KI790nGaqvCEZAJxw7lat9",disc:"Школьная организация СМИ",logo:"News.jpg",disc_kz:"Мектеп Бақ ұйымы"},"Fizmat Hub":{link:"https://chat.whatsapp.com/BekYE6r5rO53rD6ETxxe9a",disc:"Стать центром развития инновационных стартап и социальных проектов",logo:"FizmatHub.jpg",disc_kz:"Инновациялық стартап және әлеуметтік жобаларды дамыту орталығына айналу инновациялық стартап және әлеуметтік жобаларды дамыту орталығына айналу"},"Fizmat Event Club":{link:"https://chat.whatsapp.com/FgvsBCCyvb95BCL5zsXtGk",disc:"Организация мероприятий",logo:"FizmatEventClub.jpg",disc_kz:"Іс-шараларды ұйымдастыру"},"Fizmat Challengers":{link:"https://chat.whatsapp.com/F1z2gGSreF0K1oSffQhFti",disc:"Каждую встречу участники будут получать вызов. И в течении недели мы обсуждаем прогресс выполнения цели",logo:"Challengers.jpg",disc_kz:"Әр кездесуде қатысушылар қиындыққа тап болады. Бір апта ішінде біз мақсаттың орындалу барысын талқылаймыз"},Evrima:Et,"Entomology Club":{link:"https://chat.whatsapp.com/Bt4mYnJLP7CBZyP0JN2Mo2",disc:"Углубленное изучение насекомых и пауков в целом и их содержания в домашних условиях",logo:"Entomology.jpg",disc_kz:"Жалпы жәндіктер мен өрмекшілерді және оларды үйде ұстауды терең зерттеу"},Алға:{link:"https://chat.whatsapp.com/CBpZBW5my0GB1zZjlxx63S",disc:"Изучение казахского языка. Развитие речи и письма на казаском языке",logo:"Алға.jpg",disc_kz:"Қазақ тілін үйрену. Қазақ тілінде сөйлеу мен жазуды дамыту"},"Be Curious":{link:"https://chat.whatsapp.com/Gr8T1MKxnsaCVNyWVj3EoT",disc:"Клуб для тех кто хочет больше знать!!!",logo:"Curious.jpg",disc_kz:"Көбірек білгісі келетіндерге арналған Клуб!!!"},"BESTE FREUNDE":{link:"https://chat.whatsapp.com/DEjT3BmwWpH0cVvE3M1Cah",disc:"Изучение Немецкого языка, для тех, кто хочет поступать заграницу",logo:"BESTEFREUNDE.jpg",disc_kz:"Шетелге барғысы келетіндер үшін неміс тілін үйрену"},"Dance Club":{link:"https://chat.whatsapp.com/F5R0qy2Y57p7WKUkNkC4ZM",disc:"Клуб, где люди могут проявить себя в танцах разного жанра",logo:"Dance.jpg",disc_kz:"Адамдар әртүрлі жанрдағы билерде өзін көрсете алатын Клуб"},"GameDev Club":{link:"https://chat.whatsapp.com/ETLBIPNjSdlKVvdu5EPnDO",disc:"Создаем игры и развиваем сферы Game Developing!",logo:"GameDev.jpg",disc_kz:"Біз ойындар жасаймыз және Game Developing салаларын дамытамыз!"},"Girls Code Club":{link:"https://t.me/+zc2klUguD58yNjRi",disc:"Для девочек, которые хотят кодить",logo:"GCC.jpg",disc_kz:"Кодтағысы келетін қыздарға арналған"},"Scince Club":{link:"https://t.me/+9Pfj9jTCk7gxNjQ6",disc:"Проводим совместные, интересные и веселые опыты/эксперементы",logo:"Scince.jpg",disc_kz:"Бірлескен, қызықты және көңілді тәжірибелер/эксперименттер өткіземіз"},"The English Club":{link:"https://chat.whatsapp.com/C2mIgeslZUfGzHJ8MbhcfB",disc:"Углубленное о совместное изучение англиского языка",logo:"TheEnglishClub.jpg",disc_kz:"Ағылшын тілін бірлесіп үйрену туралы тереңдетілген"},"Philosophy Club":{link:"https://chat.whatsapp.com/HsWchEeOlwu1PeqrJZvFXM",disc:"Выражаем и формулируем мысли, делимся идеями. Дискутируем и пишем эссе",logo:"Philosophy.jpg",disc_kz:"Біз ойларды білдіреміз және тұжырымдаймыз, идеялармен бөлісеміз. Талқылау және эссе жазу"},"Science From Nothing":{link:"https://chat.whatsapp.com/IBTVsxY1vlxIWwaE45OOpM",disc:"Клуб Инженерии, Экспериментальной Физики и Химии",logo:"Science.jpg",disc_kz:"Инженерлік, эксперименттік физика және химия клубы"}},It=t=>(et("data-v-8713897b"),t=t(),it(),t),Pt=It(()=>v("h1",{class:"text-center mt-10"},"Fizmat Clubs",-1)),Nt={class:"text-center"},Dt={id:"all-cards"},Tt={class:"main-images"},Bt=["href"],Wt={class:"shoe-details",style:{"text-align":"center",width:"100%"}},Ot=["href"],At={itemprop:"description",style:{color:"black"},class:"shoe-detail-paragraph"},$t={__name:"clubs",setup(t){const e=K("lang");$({title:"Fizmat Clubs | Все клубы физмата | MPD Club",meta:[{name:"description",content:"Расписание занятий РФМШ! Удобный просмотр расписания школы Fizmat для учеников!"},{name:"keywords",content:"РФМШ расписание уроки Fizmat mpd MPD FIZMAT Schedule кесте"}]}),st({title:"Fizmat Clubs | Все клубы физмата | MPD Club",ogTitle:"🐧 Расписание FizMat MPD",description:"Расписание занятий РФМШ! Удобный просмотр расписания школы Fizmat для учеников!",ogDescription:"Расписание занятий РФМШ! Удобный просмотр расписания школы Fizmat для учеников!",ogImage:"mpd/img/fav.png"});const s=W,i=Object.keys(W);return(o,n)=>{const a=St;return C(),b(N,null,[Pt,v("h3",Nt,z(o.$t("clubs-label")),1),v("div",Dt,[(C(!0),b(N,null,X(k(i),r=>(C(),b("div",{key:r,itemscope:"",itemtype:"https://schema.org/EducationalOrganization",class:"product-card"},[v("div",Tt,[v("a",{href:k(s)[r].link,target:"_blank"},[tt(a,{itemprop:"logo",format:"webp",src:`/clubsLogos/${k(s)[r].logo}`,alt:`${r} fizmat club`,loading:"lazy"},null,8,["src","alt"])],8,Bt)]),v("div",Wt,[v("a",{itemprop:"name",href:k(s)[r].link,class:"link-to-group",target:"_blank"},z(r),9,Ot),v("p",At,z(k(e)=="ru"?k(s)[r].disc:k(s)[r].disc_kz),1)])]))),128))])],64)}}},Ut=Q($t,[["__scopeId","data-v-8713897b"]]);export{Ut as default};
