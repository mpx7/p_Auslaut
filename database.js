const hanjaset = [
	{
		shengfu: "甲",
		hanjaList:  "甲匣岬押鴨狎",
		hangulList: "갑갑갑압압압"
	},
	{
		shengfu: "劦",
		hanjaList:  "脇脅協",
		hangulList: "협협협"		
	},
	{
		shengfu: "合",
		hanjaList:  "合恰答塔搭給",
		hangulList: "합흡답탑탑급"		
	},
	{
		shengfu: "夾",
		hanjaList:  "夾頰狹挾峽莢鋏",
		hangulList: "협협협협협협협"		
	},
	{
		shengfu: "立",
		hanjaList:  "立粒笠拉泣妾接",
		hangulList: "립립립랍읍첩접"		
	},
	{
		shengfu: "集",
		hanjaList:  "集雜",
		hangulList: "집잡"		
	},
	{
		shengfu: "及",
		hanjaList:  "及扱汲級急吸",
		hangulList: "급급급급급흡"		
	},
	{
		shengfu: "葉",
		hanjaList:  "葉蝶牒諜",
		hangulList: "엽접첩첩"		
	},
	{
		shengfu: "去",
		hanjaList:  "怯劫法業",
		hangulList: "겁겁법업"		
	},
	{
		shengfu: "占",
		hanjaList:  "貼帖",
		hangulList: "첩첩"		
	},
	{
		shengfu: "十",
		hanjaList:  "十汁什",
		hangulList: "십즙집"		
	},
	{
		shengfu: "巤",
		hanjaList:  "獵蠟臘鑞",
		hangulList: "렵랍랍랍"		
	},
	
	/*
	{
		shengfu: "",
		hanjaList:  "",
		hangulList: ""		
	},
	*/
]

const misc = {
	hanjaList:  "壓入邑澁插涉攝濕襲習執輯捷踏納逼乏",
	hangulList: "압입읍삽삽섭섭습습습집집첩답납핍핍"	
}

const tableWrapper = document.getElementById("table-wrapper")
const miscellaneousness = document.getElementById("misc")

const dlGenerator = function(sf){
	const tdl = document.createElement('dl')
	for( let i = 0; i < sf.hanjaList.length; ++i ){
		const tdt = document.createElement('dt')
		tdt.appendChild(document.createTextNode(sf.hanjaList[i]))
		const tdd = document.createElement('dd')
		tdd.appendChild(document.createTextNode(sf.hangulList[i]))
		tdl.appendChild(tdt)
		tdl.appendChild(tdd)
	}
	return tdl;
}
	
for( const sf of hanjaset ){
	const tdiv = document.createElement('div')
	const th2 = document.createElement('h2')
	th2.appendChild(document.createTextNode(sf.shengfu))
	tdiv.appendChild(th2)
	const tdl = dlGenerator(sf)
	tdiv.appendChild(tdl)
	tableWrapper.appendChild(tdiv)
}

(() => {
	const tdiv = document.createElement('div')
	const tdl = dlGenerator(misc)
	tdiv.appendChild(tdl)
	miscellaneousness.appendChild(tdiv)
})()