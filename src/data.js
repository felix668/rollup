const data={
	name: '包月活动',//标题
	bodybg:'./images/bg.png',//背景图片
	banner: './images/banner.png',//banner图
	card_bg:'./images/card_bg.png',//中间块背景图
	ft_color:'#8a5519',
	red_ftcolor:'#fd7258',
	button:{//登录按钮
		btn_bg:'./images/btn_bg.png',//按钮背景图
		font_color:'#f9ebcd',//按钮字体颜色
	},
	rule: {
		rule_tt:'./images/rule_tt.png',//规则标题
		rule_suqfc:"#ffffff",//规则序列字体颜色
		rule_suqbg:"#6b4316",//规则序列背景色　
		text: [//规则
            '活动时间：2017年3月7日—3月13日；',
            '活动仅限包月VIP用户参与（体验卡开通、系统赠送的包月用户不算；',
            '用户做完题后，点击提交按钮，上传答案；每答对一题，获得5书券／阅券；',
            '活动期间，用户只能提交答案一次；',
            '安卓／iOS平台，奖励互通，不能重复领取。'
        ],
        priv_img:'./images/vipimg.jpg',
        priv_text:[
			'1.包月库内10万册书籍在线免费阅读','2.非包月库存内书籍、看书听书8折优惠'
        ]
	},
	card:{
		card_tt:'每答对1道题，送5书券',
		quannum:5,
		radio_bordcol:'#6b4316',
		radio_bgcol:'#fd7258',
		selresulte:[],
		tonext:false,
		btntobook:{
            btnbg:'./images/gobook.png',
            ftcol:'#f9ebcd'
		},
		list:[
			{
				bid:'121',
				bookname:'书名1',
				answerName:'1. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult:[{
					answer:'2016年7月7日15点—7月15日啊索朗'
				},{
					answer:'多吉哈萨克和打瞌睡叠好地为'
				},{
					answer:'阿拉山口参加啊深刻检查'
				},{
					answer:'阿安莎社卡刷卡后说'
				}],
			},
			{
				bid:'122',
				bookname:'书名2',
				answerName:'2. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult:[{
					answer:'2016年7月7日15点—7月15日啊索朗'
				},{
					answer:'多吉哈萨克和打瞌睡叠好地为'
				},{
					answer:'阿拉山口参加啊深刻检查'
				},{
					answer:'阿安莎社卡刷卡后说'
				}],
			},
			{
				bid:'123',
				bookname:'书名3',
				answerName:'3. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult:[{
					answer:'2016年7月7日15点—7月15日啊索朗'
				},{
					answer:'多吉哈萨克和打瞌睡叠好地为'
				},{
					answer:'阿拉山口参加啊深刻检查'
				},{
					answer:'阿安莎社卡刷卡后说'
				}],
			},
			{
				bid:'124',
				bookname:'书名4',
				answerName:'4. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult:[{
					answer:'2016年7月7日15点—7月15日啊索朗'
				},{
					answer:'多吉哈萨克和打瞌睡叠好地为'
				},{
					answer:'阿拉山口参加啊深刻检查'
				},{
					answer:'阿安莎社卡刷卡后说'
				}],
			}
		],
		nextbtn:{
            btnbg:'./images/nextbg.png',
            ftcol:'#f9ebcd'
		}
	},
	resultData:{
		rewardimg:['./images/quan.png','{}'],
		resulenum:3,
		qsbg:'./images/resulttt.png',
		qsftcol:'#fcefd4',
		bnamecol:'#000000',
		bauthorcol:'#786e5d',
		resultbooks:[{
			bid:'223',
			author:'银子浩',
			bookname:'丈量世界',
			bookface:'./images/bookface1.jpg'
		},{
			bid:'221',
			author:'言七',
			bookname:'旅行摄影圣经',
			bookface:'./images/bookface2.jpg'
		}]
	}
};
export default data;
