<template>
	<div class="answerpage">
			<ul class="answerbox" :style="{color:ftcol}">
				<li v-for="(list,index) in cardlist.list"  :style="{zIndex:cardlist.list.length-index,bottom:-0.08*index+'rem',backgroundImage:'url('+cardbg+')'}" class="card">
					<div class="padbox">
						<h4 ><span><em :style="{color:redcol}">{{ index+1 }}</em>/{{ cardlist.list.length }}</span>{{ cardlist.card_tt }}</h4>
						<p class="answername">{{ list.answerName }}</p>
						<div class="gobook">
							<p :style="{color:redcol}">{{ tipnum[index] }}%的人在《{{ list.bookname }}》1-5章找到答案</p>
							<div class="btn_gobook" :style="styleObj.btnstyle" @touchstart.stop="touchStart($event)" @touchend.stop="touchEnd(list.bid,$event)">书中找答案，再答题</div>
						</div>
						<P class="title">立即答题：</p>
						<ul class="ansewerlist">
							<li v-for="list in list.answerResult" @click="selected($event)"><div :style="styleObj.radioStyle"></div>{{ list.answer }}</li>
						</ul>
						<div class="nextanser">
							<p :style="{color:redcol}">每道题只有1次答题机会，错过无奖励哦！</p>
							<div class="btn_next" :style="styleObj.nextStyle" @touchend.stop="tonextAns($event)">{{ index!=(cardlist.list.length-1)?'下一题':'完成答题'}}</div>
						</div>
					</div>
					
				</li>
		   </ul>
	</div>
</template>
<style lang="less" scoped>
.answerpage{ position: fixed; z-index: 111; left: 0; top: 0; width: 100%; height: 100%;}
.answerbox{position: absolute; left: .3rem; top: .7rem; right: .3rem; bottom: 1rem; }
.answerbox .card{ position: absolute; left: 0; bottom: 0; z-index: 10; width: 100%; height: 100%; box-shadow: 0 1px 18px rgba(47,26,41,.36);background-repeat:repeat-y; background-size:100% auto;border-radius: .1rem;-webkit-transform-origin:100% 0;}
.answerbox .card.flyout{-webkit-animation:flyout 2s forwards;}
@keyframes flyout {
  0%{ -webkit-transform:rotate(0);}
  10%{-webkit-transform:translate(0) rotate(45deg);}
  100%{-webkit-transform:translate(-1000px) rotate(45deg);}
}
/*.answerbox .card:nth-child(2){ z-index: 9; bottom: -.08rem;}
.answerbox .card:nth-child(3){ z-index: 8; bottom: -.16rem;}
.answerbox .card:nth-child(4){ z-index: 7; bottom: -.24rem;}
.answerbox .card:nth-child(5){ z-index: 6; bottom: -.3rem;}*/
.answerbox .card .padbox{padding: .4rem .28rem .4rem;}
.answerbox .card h4{ position: relative; z-index: 1; font-size: .28rem; line-height: .48rem; height: .48rem; text-align: center;}
.answerbox .card h4 span{position: absolute; display: block; right: 0.28rem; top: 0; height: .48rem; line-height: .48rem; font-size: .24rem;}
.answerbox .card .answername{ font-size: .28rem; line-height: .48rem; margin:.1rem 0 .1rem;}
.gobook p,.nextanser p{ font-size: .2rem; text-align: center; line-height: .6rem;}
.btn_gobook{ width: 5.98rem; height: .76rem; margin: 0 auto .5rem; line-height: .76rem; text-align: center; font-size: .36rem; background-repeat: no-repeat; background-size: 100% auto;}
.title{ font-size: .28rem ;line-height: .6rem; font-weight: bold;}
.ansewerlist li{position: relative; z-index: 1; padding-left: .6rem; line-height: .4rem; font-size: .28rem; margin: .24rem 0;/*display: -webkit-box;-webkit-line-clamp: 1;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;*/}
.ansewerlist li div{ display: block; position:absolute; left:0; top: 0; width: .3rem; height: .3rem; border-radius: 100%; border:0.02rem solid;}
.nextanser{position:absolute; bottom: .4rem; left: 0; right: 0;}
.btn_next{ width: 4.44rem; height: 1.04rem; margin: 0 auto; text-align: center; line-height: 1.04rem;background-repeat: no-repeat; background-size: 100% auto; font-size: .28rem;}
</style>
<script>
	module.exports = {
		props:['show','cardlist','cardbg','ftcol','redcol','answernum','resultshow'],
		data: function(){
			return {
				tips:''
			}
		},
		computed:{
			styleObj:function(){
				return {
					cardStyle:{
						backgroundImage:"url("+this.cardbg+")"
					},
					btnstyle:{
						color:this.cardlist.btntobook.ftcol,
						backgroundImage:"url("+this.cardlist.btntobook.btnbg+")"
					},
					radioStyle:{
						borderColor: this.cardlist.radio_bordcol,
                        //backgroundColor: this.cardlist.radio_bgcol
					},
					nextStyle:{
						color:this.cardlist.nextbtn.ftcol,
						backgroundImage:"url("+this.cardlist.nextbtn.btnbg+")",
						backgroundPosition:'0 -2.2rem'
					},
					moveStyle:{

					}
				};
			},
			tipnum:function(){
				let self=this;
				let len=self.cardlist.list.length;
				let arr=[];
				for(let i=0;i<len;i++){
					arr.push(Math.floor(Math.random()*11)+87);
				}
				return arr;
			}
		},
		methods: {
			touchStart: function(e){
                let $cur = $(e.currentTarget);
                let self=this;
                $cur.css("background-position","0 -1rem");
                
            },
            touchEnd: function(bid,e){
                var $cur = $(e.currentTarget);
                let self=this;
                $cur.css("background-position","0 0");
                console.log(bid);
            },
            selected:function(e){
            	let $cur = $(e.currentTarget);
                let self=this;
                let ind=$cur.index();
                $(".ansewerlist li").children('div').css("background","transparent");
                $cur.children('div').css("background",this.cardlist.radio_bgcol);
                $cur.addClass("onact").siblings().removeClass('onact');
                $(".btn_next").css("background-position",'0 0');
                $(".btn_next").on('touchstart',function(){
                	$(this).css("background-position",'0 -1.1rem');
                });
                self.cardlist.tonext=true;
            },
            tonextAns:function(e){
            	let $cur = $(e.currentTarget);
                let self=this;
                let num=$cur.parent().parent().parent().index();
            	$cur.css("background-position",'0 0');
            	if(self.cardlist.tonext){
            		let ind=$(".onact").index();
            		self.cardlist.selresulte.push(ind);
            		console.log(self.cardlist.selresulte);
            		self.toNextQuestion(num);
            		self.cardlist.tonext=false;
            	}
            },
            toNextQuestion:function(ind){
            	let self=this;
            	let len=self.cardlist.list.length-1;
            	$(".answerbox>li").eq(ind).addClass('flyout');
            	$(".ansewerlist li").removeClass('onact');
            	//self.status=num;
            	console.log(ind);
            	let timer=null;
            	if(ind==len){
            		console.log("go resulte");
            		timer=setTimeout(()=>{
            			self.$parent.answer=false;
            			timer=null;
            		}, 1000)
            		
            	}
            }
		}
	}
</script>
