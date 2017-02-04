// JavaScript Document
var arrColor = [
		"#64d6e2",
		"#ba94de",
		"#f68f6f",
		"#edb948",
		"#fdacb4",
		"#9b7ad5",
		"#9988cd",
		"#3ccad1",
		"#87c4a3",
		"#fdaed4",
		"#a0cadb",
		"#f4c3c5" 
		];
var arrshadow = [
			[//鲸鱼
			{
				"width":"58.3%",
				"height": "6%",
				"pos": "absolute",
				"left": "13.9%",
				"bottom": "11.8%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				'width':"58.3%",
				'height': "6%",
				"pos": "absolute",
				"left": "13.9%",
				"bottom": "11.8%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				'width':"18.3%",
				'height': "4%",
				"pos": "absolute",
				"left": "73.5%",
				"bottom": "12.4%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			}
			],
			// 鸟
			[
			{
				'width':"17.8%",
				'height': "4%",
				"pos": "absolute",
				"left": "11%",
				"bottom": "14%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			},
			{
				'width':"35.1%",
				'height': "6%",
				"pos": "absolute",
				"left": "25.9%",
				"bottom": "13.2%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			},
			{
				'width':"20.9%",
				'height': "4%",
				"pos": "absolute",
				"left": "61%",
				"bottom": "14%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			}
			],
			[//蜻蜓
			{
				'width':"47.7%",
				'height': "6%",
				"pos": "absolute",
				"left": "24.4%",
				"bottom": "13.7%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				'width':"47.7%",
				'height': "6%",
				"pos": "absolute",
				"left": "24.4%",
				"bottom": "13.7%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				'width':"47.7%",
				'height': "6%",
				"pos": "absolute",
				"left": "24.4%",
				"bottom": "13.7%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			}
			],
			[//穿山甲
			{
				'width':"12.9%",
				'height': "4%",
				"pos": "absolute",
				"left": "23.5%",
				"bottom": "15.2%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			},
			{
				'width':"30.3%",
				'height': "6%",
				"pos": "absolute",
				"left": "34.4%",
				"bottom": "15.2%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				'width':"7.1%",
				'height': "5%",
				"pos": "absolute",
				"left": "60.7%",
				"bottom": "15.2%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.1) 0, transparent 100%)"
			}
			],
			[//树懒
			{
				'width':"16.4%",
				'height': "5%",
				"pos": "absolute",
				"left": "14.1%",
				"bottom": "15.5%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			},
			{
				'width':"38.9%",
				'height': "6%",
				"pos": "absolute",
				"left": "29.5%",
				"bottom": "14.5%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				'width':"8.8%",
				'height': "4%",
				"pos": "absolute",
				"left": "73.4%",
				"bottom": "15.5%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.1) 0, transparent 100%)"
			},
			],
			
			//蝴蝶
			[
					{
				'width':"37.4%",
				'height': "6%",
				"pos": "absolute",
				"left": "24.7%",
				"bottom": "14.1%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				'width':"37.4%",
				'height': "6%",
				"pos": "absolute",
				"left": "24.7%",
				"bottom": "14.1%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				'width':"37.4%",
				'height': "6%",
				"pos": "absolute",
				"left": "24.7%",
				"bottom": "14.1%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			}
			],
			[// 海马
			{
				'width':"50%",
				'height': "5%",
				"pos": "absolute",
				"left": "37.4%",
				"bottom": "14.4%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			},
			{
				'width':"21.7%",
				'height': "5%",
				"pos": "absolute",
				"left": "47.8%",
				"bottom": "14.4%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				'width':"18.2%",
				'height': "4%",
				"pos": "absolute",
				"left": "73.1%",
				"bottom": "14.4%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			}
			],
			[//企鹅
			{
				'width':"9.9%",
				'height': "5%",
				"pos": "absolute",
				"left": "31%",
				"bottom": "11%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			},
			{
				'width':"23.5%",
				'height': "6.8%",
				"pos": "absolute",
				"left": "33%",
				"bottom": "15.4%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side,rgba(0, 0, 0, 0.35) 0,rgba(0, 0, 0, 0.14) 35%,transparent 100%)"
			},
			{
				'width':"7.9%",
				'height': "4%",
				"pos": "absolute",
				"left": "57%",
				"bottom": "15.8%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			}
			],
			[//熊
			{
				'width':"22.2%",
				'height': "4%",
				"pos": "absolute",
				"left": "39.3%",
				"bottom": "14%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.185) 35%, transparent 100%)"
			},
			{
				'width':"11%",
				'height': "4%",
				"pos": "absolute",
				"left": "60.5%",
				"bottom": "13.5%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.12) 0, transparent 100%)"
			},
			{
				'width':"33.2%",
				'height': "5%",
				"pos": "absolute",
				"left": "41.3%",
				"bottom": "14.8%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			}
			],
			//金狮吼
			[
			{
				"height": "3%",
    			"width": "18%",
				"pos": "absolute",
				"left": "27%",
   				"bottom": "15%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.30) 0, rgba(0, 0, 0, 0.10) 35%, transparent 100%)"
			},
			{

    			"width": "55%",
    			"height": "5%",
				"pos": "absolute",
				"left": "23%",
				"bottom": "14%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.18) 35%, transparent 100%)"


			},
			{
    			"width": "25%",
    			"height": "4%",
				"pos": "absolute",
    			"left": "58%",
    			"bottom": "14%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			}
			],
			//乌龟
			[
			{
				
				"height": "5%",
				"width": "55%",
				"pos": "absolute",
				"left": "20%",
				"bottom": "12.5%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.30) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				"height": "5%",
				"width": "55%",
				"pos": "absolute",
				"left": "22%",
				"bottom": "12.5%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				"height": "5%",
				"width": "25%",
				"pos": "absolute",
				"left": "65%",
				"bottom": "12.5%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.12) 0, transparent 100%)"
			}
			],
			//猞猁
			[
			{
				
				"height": "3.5%",
				"width": "40%",
				"pos": "absolute",
				"left": "32%",
				"bottom": "15%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.38) 0, rgba(0, 0, 0, 0.18) 35%, transparent 100%)"
			},
			{
				"height": "3.5%",
				"width": "45%",
				"pos": "absolute",
				"left": "34%",
				"bottom": "14%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient( closest-side, rgba(0, 0, 0, 0.35) 0, rgba(0, 0, 0, 0.14) 35%, transparent 100%)"
			},
			{
				"height": "5%",
				"width": "35%",
				"pos": "absolute",
				"left": "65%",
				"bottom": "15.5%",
				"border": "50%",
				"gradient": "-webkit-radial-gradient(closest-side, rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0.10) 35%, transparent 100%)"
			}
			]
		]
// 0 三十个三角形，组成圆  ，1 loge名，2 三十个三角随机排在整个页面
var arrLoad = [   
	[
		{
			"poly":"polygon(100% 50%, 98.9074% 60.3956%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(98.9074% 60.3956%, 95.6773% 70.3368%, 50% 50%)",
			"bc":"red"	
		},
		{
			"poly":"polygon(95.6773% 70.3368%, 90.4508% 79.3893%, 50% 50%)",
			"bc":"red"	
		},
		{
			"poly":"polygon(90.4508% 79.3893%, 83.4565% 87.1572%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(83.4565% 87.1572%, 75% 93.3013%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(75% 93.3013%, 65.4508% 97.5528%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(65.4508% 97.5528%, 55.2264% 99.7261%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(55.2264% 99.7261%, 44.7736% 99.7261%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(44.7736% 99.7261%, 34.5492% 97.5528%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(34.5492% 97.5528%, 25% 93.3013%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(25% 93.3013%, 16.5435% 87.1572%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(16.5435% 87.1572%, 9.54915% 79.3893%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(9.54915% 79.3893%, 4.32273% 70.3368%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(4.32273% 70.3368%, 1.09262% 60.3956%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(1.09262% 60.3956%, 0% 50%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(0% 50%, 1.09262% 39.6044%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(1.09262% 39.6044%, 4.32273% 29.6632%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(4.32273% 29.6632%, 9.54915% 20.6107%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(9.54915% 20.6107%, 16.5435% 12.8428%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(16.5435% 12.8428%, 25% 6.69873%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(25% 6.69873%, 34.5492% 2.44717%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(34.5492% 2.44717%, 44.7736% 0.273905%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(44.7736% 0.273905%, 55.2264% 0.273905%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(55.2264% 0.273905%, 65.4508% 2.44717%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(65.4508% 2.44717%, 75% 6.69873%, 50% 50%)",
			"bc":"red"	
		},
		{
			"poly":"polygon(75% 6.69873%, 83.4565% 12.8428%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(83.4565% 12.8428%, 90.4508% 20.6107%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(90.4508% 20.6107%, 95.6773% 29.6632%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(95.6773% 29.6632%, 98.9074% 39.6044%, 50% 50%)",
			"bc":"red"
		},
		{
			"poly":"polygon(98.9074% 39.6044%, 100% 50%, 50% 50%)",
			"bc":"red"
		}
	],
	[
		{
			"poly":"polygon(6.838% 29.324%, 13.337% 80.752%, 4.838% 68.324%)",
			"bc":"rgb(166, 4, 56)"
		},
		{
			"poly":"polygon(6.838% 29.324%, 19.637% 37.181%, 8.538% 42.895%)",
			"bc":"rgb(151, 7, 65)"
		},
		{
			"poly":"polygon(6.838% 29.324%, 21.75% 30.5%, 19.9% 37.4%)",
			"bc":"rgb(246, 7, 90)"
		},
		{
			"poly":"polygon(21.65% 30.609%, 18.05% 62.181%, 14.85% 54.181%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(14.9% 54.2%, 18.2% 62.181%, 10.35% 57.609%)",
			"bc":"rgb(151, 7, 65)"
		},
		{
			"poly":"polygon(27.6% 23.9%, 21.7% 58.2%, 23.5% 77.5%)",
			"bc":"rgb(172, 6, 52)"
		},
		{
			"poly":"polygon(27.6% 23.6%, 28.35% 73.181%, 23.35% 78.181%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(31.45% 42.181%, 39.75% 72.038%, 32.85% 83.467%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(31.35% 42.4%, 45.65% 36.181%, 45.65% 45.895%)",
			"bc":"rgb(246, 7, 90)"
		},
		{
			"poly":"polygon(31.5% 42.4%, 39.2% 44.181%, 34.1% 52.181%)",
			"bc":"rgb(151, 7, 65)"
		},
		{
			"poly":"polygon(34.2% 52.324%, 45.55% 55.467%, 36.3% 60.181%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(32.85% 83.324%, 39.65% 72.038%, 47.35% 73.181%)",
			"bc":"rgb(142, 7, 50)"
		},
		{
			"poly":"polygon(50.35% 14.609%, 56.05% 24.181%, 49.75% 79.181%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(50.45% 14.752%, 65.65% 26.324%, 55.95% 24.181%)",
			"bc":"rgb(246, 7, 90)"
		},
		{
			"poly":"polygon(49.65% 79.1%, 63.85% 75.3%, 68.85% 84.467%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(50.85% 68.895%, 57.45% 77.181%, 49.75% 79.181%)",
			"bc":"rgb(142, 7, 50)"
		},
		{
			"poly":"polygon(58.05% 70.467%, 60.55% 29.895%, 60.9% 66.752%)",
			"bc":"rgb(217, 36, 81)"
		},
		{
			"poly":"polygon(60.45% 29.839%, 67% 39.839%, 60.8% 67%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(60.55% 29.982%, 74.55% 38.696%, 66.95% 39.982%)",
			"bc":"rgb(246, 7, 90)"
		},
		{
			"poly":"polygon(64.75% 49.6%, 73.15% 52.982%, 62.95% 56.839%)",
			"bc":"rgb(217, 36, 81)"
		},
		{
			"poly":"polygon(63% 56.982%, 64.75% 66%, 60.65% 66.982%)",
			"bc":"rgb(151, 7, 65)"
		},
		{
			"poly":"polygon(60.65% 66.839%, 73.25% 73.696%, 58.05% 70.268%)",
			"bc":"rgb(142, 7, 50)"
		},
		{
			"poly":"polygon(60.7% 66.9%, 72.45% 64.268%, 73.25% 73.696%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(77.55% 33.268%, 91.95% 28.982%, 92.55% 37.696%)",
			"bc":"rgb(246, 7, 90)"},
		{
			"poly":"polygon(77.55% 33.3%, 92.55% 37.8%, 88.95% 33.839%)",
			"bc":"rgb(142, 7, 50)"},
		{
			"poly":"polygon(77.45% 33.268%, 83.45% 50.268%, 78.25% 58.125%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(83.35% 50.268%, 92.65% 51.696%, 78.35% 57.982%)",
			"bc":"rgb(217, 36, 81)"
		},
		{
			"poly":"polygon(86.6% 54.3%, 92.5% 51.65%, 95% 71.696%)",
			"bc":"rgb(151, 7, 65)"
		},
		{
			"poly":"polygon(79.25% 68.125%, 91.85% 65.125%, 95.05% 71.554%)",
			"bc":"rgb(200, 7, 65)"
		},
		{
			"poly":"polygon(79.35% 68.125%, 94.95% 71.554%, 80.55% 74.125%)",
			"bc":"rgb(142, 7, 50)"
		}
	],
	[
		{
			"poly":"polygon(12.762% 61.464%, 17.986% 76.893%, 21.367% 69.321%)",
			"bc":"rgb(40, 40, 42)"
		},
		{
			"poly":"polygon(78.188% 35.179%, 83.275% 54.179%, 85.792% 43.179%)",
			"bc":"rgb(17, 17, 17)"
		},
		{
			"poly":"polygon(83.584% 85.607%, 82.494% 97.893%, 89.503% 96.607%)",
			"bc":"rgb(51, 51, 51)"
		},
		{
			"poly":"polygon(69.013% 68.464%, 64.753% 77.036%, 70.342% 74.179%)",
			"bc":"rgb(34, 34, 34)"
		},
		{
			"poly":"polygon(18.5% 44.286%, 15.2% 42.286%, 15.9% 44.857%)",
			"bc":"rgb(18, 18, 18)"
		},
		{
			"poly":"polygon(28.027% 30.75%, 20.63% 44.75%, 30.912% 46.321%)",
			"bc":"rgb(40, 40, 42)"
		},
		{
			"poly":"polygon(30.5% 13.321%, 26.8% 10.321%, 31% 8.464%)",
			"bc":"rgb(17, 17, 17)"
		},
		{
			"poly":"polygon(60.5% 58.036%, 62.6% 64.179%, 62.6% 58.036%)",
			"bc":"rgb(51, 51, 51)"
		},
		{
			"poly":"polygon(13.4% 93.75%, 8.2% 93.464%, 12.7% 97.036%)",
			"bc":"rgb(34, 34, 34)"
		},
		{
			"poly":"polygon(25% 92%, 25.5% 92.5%, 26% 92%)",
			"bc":"rgb(18, 18, 18)"	
		},
		{
			"poly":"polygon(6.5% 17.893%, 6.9% 10.893%, 2.8% 19.464%)",
			"bc":"rgb(40, 40, 42)"
		},
		{
			"poly":"polygon(32.1% 84%, 34.1% 86.429%, 35.5% 81.714%)",
			"bc":"rgb(17, 17, 17)"
		},
		{
			"poly":"polygon(32.3% 34.607%, 31.3% 39.607%, 33.3% 36.036%)",
			"bc":"rgb(24, 24, 24)"
		},
		{
			"poly":"polygon(14.008% 88.179%, 18.023% 93.464%, 16.653% 89.321%)",
			"bc":"rgb(34, 34, 34)"
		},
		{
			"poly":"polygon(84.234% 7.893%, 90.231% 6.607%, 87.93% 5.75%)",
			"bc":"rgb(18, 18, 18)"
		},
		{
			"poly":"polygon(59.9% 94.714%, 60.4% 99.9%, 63.6% 98.714%)",
			"bc":"rgb(40, 40, 42)"
		},
		{
			"poly":"polygon(8.75% 52.607%, 6.123% 59.036%, 11.425% 57.321%)",
			"bc":"rgb(17, 17, 17)"
		},
		{
			"poly":"polygon(70% 92%, 71% 94%, 72% 93%)",
			"bc":"rgb(51, 51, 51)"
		},
		{
			"poly":"polygon(73.5% 18.857%, 76.3% 16.857%, 74.4% 14.429%)",
			"bc":"rgb(34, 34, 34)"
		},
		{
			"poly":"polygon(80% 92%, 81% 94%, 82% 93%)",
			"bc":"rgb(18, 18, 18)"
		},
		{
			"poly":"polygon(73.3% 30.429%, 75.5% 28.714%, 74.8% 27.857%)",
			"bc":"rgb(40, 40, 42)"
		},
		{
			"poly":"polygon(85% 27%, 86% 29%, 87% 28%)",
			"bc":"rgb(17, 17, 17)"
		},
		{
			"poly":"polygon(22.6% 35.571%, 19.8% 34.714%, 21.8% 32%)",
			"bc":"rgb(51, 51, 51)"
		},
		{
			"poly":"polygon(86.9% 44.643%, 90.5% 44.929%, 89.8% 41.786%)",
			"bc":"rgb(34, 34, 34)"
		},
		{
			"poly":"polygon(47.769% 99.732%, 48.769% 100%, 50.169% 98%)",
			"bc":"rgb(18, 18, 18)"
		},
		{
			"poly":"polygon(5.669% 36.589%, 4.769% 33.018%, 4.069% 36.304%)",
			"bc":"rgb(40, 40, 42)"
		},
		{
			"poly":"polygon(84.1% 69.857%, 85.5% 70.714%, 85.3% 69.286%)",
			"bc":"rgb(17, 17, 17)"
		},
		{
			"poly":"polygon(24% 95.732%, 27.769% 98%, 25.969% 99.161%)",
			"bc":"rgb(51, 51, 51)"
		},
		{
			"poly":"polygon(85% 80%, 85.5% 80.5%, 86% 80%)",
			"bc":"rgb(34, 34, 34)"
		},
		{
			"poly":"polygon(60.769% 12.875%, 64.769% 10.018%, 65.669% 14.875%)",
			"bc":"rgb(18, 18, 18)"
		}
	]
];

	var arr = [
	//鲸鱼
	[
	{
		"poly":"polygon(14.9% 45.7%, 17.8% 46.4%, 10.1% 58.3%)",
		"bc":"rgb(60, 70, 80)",
		"animat":"none 0s ease 0s 1 normal none running"  //正常不会反向执行
	},
	{
		"poly":"polygon(15.1% 54.6%, 17.8% 46.4%, 10.1% 58.3%)",
		"bc":"rgb(15, 22, 34)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(36.9% 35.1%, 14.9% 45.7%, 17.8% 46.4%)",
		"bc":"rgb(39, 53, 55)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(10.1% 58.3%, 15.1% 54.6%, 13.6% 58.6%)",
		"bc":"rgb(217, 234, 223)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(10.1% 58.3%, 9.9% 60.6%, 13.6% 58.6%)",
		"bc":"rgb(51, 69, 67)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(15.1% 54.6%, 13.6% 58.6%, 18.1% 56%)",
		"bc":"rgb(51, 60, 64)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(15.1% 54.6%, 17.8% 46.4%, 18.1% 56%)",
		"bc":"rgb(98, 130, 127)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(13.6% 58.6%, 9.9% 60.6%, 12.1% 61.6%)",
		"bc":"rgb(51, 60, 64)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(13.6% 58.6%, 18.1% 56%, 16.3% 58.9%)",
		"bc":"rgb(28, 37, 41)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(13.6% 58.6%, 12.1% 61.6%, 31.4% 60.9%)",
		"bc":"rgb(217, 235, 235)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(18.1% 56%, 16.3% 58.9%, 31.4% 60.9%)",
		"bc":"rgb(189, 208, 208)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(18.1% 56%, 34.2% 48.3%, 31.4% 60.9%)",
		"bc":"rgb(170, 199, 198)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(18.1% 56%, 34.2% 48.3%, 37.1% 40.7%)",
		"bc":"rgb(98, 130, 127)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(18.1% 56%, 17.8% 46.4%, 37.1% 40.7%)",
		"bc":"rgb(72, 100, 97)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(17.8% 46.4%, 42.1% 32.1%, 58.4% 35%)",
		"bc":"rgb(56, 78, 77)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(34.2% 48.3%, 31.4% 60.9%, 54.7% 61.6%)",
		"bc":"rgb(217, 235, 235)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(37.1% 40.7%, 34.2% 48.3%, 59.7% 51.3%)",
		"bc":"rgb(115, 153, 152)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(34.2% 48.3%, 59.7% 51.3%, 54.7% 61.6%)",
		"bc":"rgb(216, 226, 222)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(37.1% 40.7%, 55.7% 41.7%, 59.7% 51.3%)",
		"bc":"rgb(72, 100, 97)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(37.1% 40.7%, 58.4% 35%, 55.7% 41.7%)",
		"bc":"rgb(65, 85, 85)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(58.4% 35%, 55.7% 41.7%, 59.7% 51.3%)",
		"bc":"rgb(56, 78, 77)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(54.7% 61.6%, 59.7% 51.3%, 75% 48.7%)",
		"bc":"rgb(192, 219, 211)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(58.4% 35%, 59.7% 51.3%, 75% 48.7%)",
		"bc":"rgb(75, 99, 100)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(58.4% 35%, 75% 48.7%, 82.2% 42.4%)",
		"bc":"rgb(45, 59, 59)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(78.5% 42.7%, 86.1% 39.4%, 95.5% 40.1%)",
		"bc":"rgb(54, 82, 85)",
		"animat":"whale25 2s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(78.5% 42.7%, 88.2% 44.2%, 95.5% 40.1%)",
		"bc":"rgb(103, 135, 129)",
		"animat":"whale26 2s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(36.9% 35.1%, 47.3% 35.8%, 47.8% 23.8%)",
		"bc":"rgb(45, 59, 59)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(27.7% 56%, 39.4% 58.9%, 40.5% 64.8%)",
		"bc":"rgb(51, 69, 67)",
		"animat":"whale28 3s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(27.7% 56%, 45% 72.4%, 40.5% 64.8%)",
		"bc":"rgb(33, 40, 47)",
		"animat":"whale29 3s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(32.7% 60.9%, 26.7% 61.3%, 37% 68.4%)",
		"bc":"rgb(13, 20, 23)",
		"animat":"whale30 3s ease 2s infinite normal none running"
	}
	],
	//鸟
	[
	{
		"poly":"polygon(32.8% 58%, 38.4% 61.2%, 12.2% 81.5%)",
		"bc":"rgb(238, 229, 217)",
		"animat":"niao1 1.5s ease-out 2s infinite alternate none running" //改处1
	},
	{
		"poly":"polygon(21.9% 67.8%, 33.5% 57.9%, 26% 60.7%)",
		"bc":"rgb(50, 40, 29)",
		"animat":"niao2 1.5s ease-out 2s infinite alternate none running" //改处1
	},
	{
		"poly":"polygon(23.7% 62.9%, 39.2% 42.8%, 50.8% 49.8%)",
		"bc":"rgb(60, 51, 41)",
		"animat":"niao3 1.5s ease-out 2s infinite alternate none running" //改处1
	},
	{
		"poly":"polygon(33.3% 58.3%, 45.8% 57.1%, 45.3% 66.9%)",
		"bc":"rgb(221, 215, 201)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(38.6% 42.9%, 56.4% 33.8%, 49.9% 50.2%)",
		"bc":"rgb(75, 65, 59)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(32.3% 58.3%, 49% 49.9%, 61% 55.3%)", //改处1
		"bc":"rgb(48, 39, 23)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(45.6% 73.6%, 48.6% 70%, 49.3% 71.2%)",
		"bc":"rgb(147, 31, 0)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.5% 74.8%, 52.2% 78.4%, 50.7% 72.3%)",
		"bc":"rgb(116, 74, 15)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.5% 74.8%, 47.6% 65.8%, 45.7% 66.9%)",
		"bc":"rgb(214, 81, 0)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(47.5% 65.8%, 49% 64.6%, 54.7% 71.8%)",
		"bc":"rgb(174, 68, 28)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.9% 70.4%, 54.5% 74.8%, 54.5% 71.5%)",
		"bc":"rgb(147, 31, 0)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(45.5% 57.13%, 60.8% 55.3%, 44.5% 68.4%)",
		"bc":"rgb(244, 251, 243)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(60.7% 55.3%, 57.6% 57.7%, 46.6% 56.9%)",
		"bc":"rgb(238, 229, 217)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(49.7% 50.5%, 55.7% 34.3%, 68.5% 40.9%)",
		"bc":"rgb(86, 74, 66)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(43.4% 35.7%, 55.8% 34.3%, 36.9% 44.3%)",
		"bc":"rgb(86, 74, 66)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(49.7% 50.1%, 68.4% 40.8%, 61.36% 56.4%)",
		"bc":"rgb(75, 65, 59)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.4% 34.3%, 56.3% 21.7%, 59.9% 36.6%)",
		"bc":"rgb(48, 39, 23)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(56.3% 21.7%, 60.3% 19.5%, 59.8% 36.8%)",
		"bc":"rgb(75, 50, 37)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(57.6% 27.3%, 60.3% 19.2%, 59.9% 36.8%)",
		"bc":"rgb(164, 38, 19)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(60.3% 19.5%, 68.9% 24.8%, 59.85% 36.96%)",
		"bc":"rgb(195, 74, 42)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(64.8% 13.2%, 76.85% 14%, 72.5% 27.1%)",
		"bc":"rgb(203, 76, 58)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.4% 22.3%, 62.9% 11%, 67.63% 15.7%)",
		"bc":"rgb(68, 44, 30)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(60% 36.4%, 65.2% 29.8%, 68.5% 41%)",
		"bc":"rgb(210, 101, 73)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(64% 31.4%, 66.2% 28.3%, 68.5% 41%)",
		"bc":"rgb(207, 123, 91)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(60.3% 19.5%, 67.7% 15.5%, 72.6% 27.4%)",
		"bc":"rgb(217, 80, 50)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(66.3% 28.3%, 72.3% 27.2%, 68.9% 24.8%)",
		"bc":"rgb(186, 60, 10)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(68.27% 28.1%, 73.44% 26.6%, 73.3% 30.6%)",
		"bc":"rgb(202, 138, 90)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(72.5% 27.4%, 76.82% 14.1%, 75.4% 25.14%)",
		"bc":"rgb(227, 215, 133)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(72.5% 27.2%, 75.4% 24.3%, 80.1% 34.1%)",
		"bc":"rgb(220, 200, 120)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(72.6% 27.2%, 80.1% 34.05%, 71.3% 30.35%)",
		"bc":"rgb(228, 180, 84)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(39% 87.5%, 41.7% 76.4%, 43.4% 78.6%)",
		"bc":"rgb(58, 34, 40)"
	},
	{
		"poly":"polygon(41.5% 76.5%, 60% 63.7%, 43.3% 78.7%)",
		"bc":"rgb(74, 48, 66)"
	}
	],
	//蜻蜓
	[
	{
		"poly":"polygon(16.8% 56.143%, 21.4% 54.143%, 19.1% 60%)",
		"bc":"rgb(39, 39, 41)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(21.4% 54.143%, 24.8% 60.143%, 19% 60%)",
		"bc":"rgb(167, 42, 52)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(21.4% 54.143%, 27.5% 54.857%, 24.7% 60.286%)",
		"bc":"rgb(196, 51, 74)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(24.7% 60.143%, 27.5% 54.9%, 29.4% 59.429%)",
		"bc":"rgb(16, 31, 31)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(27.4% 54.8%, 34.3% 59.6%, 29.3% 59.4%)",
		"bc":"rgb(44, 41, 45)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(27.4% 54.857%, 32% 54.143%, 34.2% 59.8%)",
		"bc":"rgb(60, 58, 66)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(31.9% 54.143%, 37.8% 54.571%, 34.02% 59.6%)",
		"bc":"rgb(39, 39, 41)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(34% 59.571%, 37.6% 54.571%, 39.8% 58.857%)",
		"bc":"rgb(186, 34, 58)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(37.5% 54.571%, 43.9% 56.429%, 39.7% 58.857%)",
		"bc":"rgb(196, 48, 74)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(37.5% 54.571%, 48% 54.714%, 43.5% 56.571%)",
		"bc":"rgb(222, 76, 99)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(39.7% 58.857%, 43.5% 56.429%, 47.5% 59.429%)",
		"bc":"rgb(154, 42, 60)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(43.4% 56.429%, 47.99% 54.714%, 50.4% 56.6%)",
		"bc":"rgb(187, 41, 58)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(43.4% 56.286%, 50.4% 56.429%, 47.4% 59.571%)",
		"bc":"rgb(197, 47, 73)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(48% 54.714%, 56.1% 53.857%, 50.3% 56.571%)",
		"bc":"rgb(222, 76, 99)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(47.4% 59.429%, 50.3% 56.429%, 53.4% 58.714%)",
		"bc":"rgb(141, 35, 59)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(50.3% 56.429%, 56.1% 53.857%, 53.4% 58.857%)",
		"bc":"rgb(188, 45, 64)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(53.3% 58.7%, 56% 54%, 60.3% 58.714%)",
		"bc":"rgb(167, 42, 52)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.8% 54%, 64.3% 54.571%, 60.3% 58.714%)",
		"bc":"rgb(222, 60, 88)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(60.2% 58.714%, 64.2% 54.571%, 75.5% 59.2%)",
		"bc":"rgb(24, 27, 31)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(64.3% 54.65%, 65.6% 51.429%, 77.5% 54%)",
		"bc":"rgb(69, 66, 75)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(64% 54.6%, 78.3% 53.714%, 75.4% 59.26%)",
		"bc":"rgb(45, 44, 53)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(70.7% 59%, 71.5% 59.143%, 66.5% 71.143%)",
		"bc":"rgb(38, 38, 36)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(73.6% 59%, 74.9% 59.1%, 71.9% 68.714%)",
		"bc":"rgb(51, 62, 78)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(72.3% 67.429%, 79.4% 78.429%, 71.9% 68.857%)",
		"bc":"rgb(29, 33, 36)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(75.4% 56.286%, 76.4% 51.857%, 79.9% 54.143%)",
		"bc":"rgb(129, 41, 37)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(75.4% 56.143%, 79.9% 54.143%, 78.4% 58.429%)",
		"bc":"rgb(59, 15, 19)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(38.6% 19%, 69.5% 53.714%, 41.5% 30.857%)",
		"bc":"rgb(109, 155, 159)",
		"animat":"dragon1 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(57.4% 28.714%, 69.5% 53.857%, 62.4% 44.286%)",
		"bc":"rgb(154, 191, 194)",
		"animat":"dragon2 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(44.7% 29%, 51.5% 10%, 62.5% 44.429%)",
		"bc":"rgb(128, 177, 180)",
		"animat":"dragon3 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(44.7% 29%, 40% 9.857%, 51.6% 10.143%)",
		"bc":"rgb(154, 191, 194)",
		"animat":"dragon4 3.5s ease-out 2s infinite alternate none running"
	}
],
	//穿山甲
	[
	{	"poly":"polygon(16.45% 78.8%, 17.1% 72.9%, 22.75% 68.1%)",
		"bc":"rgb(98, 73, 66)",
		"animat":"monkey1 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(16.95% 73.5%, 20.95% 57.357%, 24.55% 57.786%)",
		"bc":"rgb(153, 129, 88)",
		"animat":"monkey2 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(16.95% 73.5%, 24.35% 57.5%, 22.75% 68.214%)",
		"bc":"rgb(122, 88, 82)",
		"animat":"monkey3 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(22.65% 68.071%, 24.25% 57.643%, 28.05% 72.786%)",
		"bc":"rgb(98, 73, 66)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(16.36% 78.8%, 22.7% 68.1%, 28.2% 72.8%)",
		"bc":"rgb(70, 56, 48)",
		"animat":"monkey5 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(17.95% 77.8%, 23.95% 74.929%, 19.65% 79.214%)",
		"bc":"rgb(36, 27, 2)",
		"animat":"monkey6 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(24.55% 59.071%, 27.75% 51.071%, 28.05% 72.786%)",
		"bc":"rgb(62, 55, 48)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(21.75% 57.214%, 26.45% 49.071%, 24.75% 63.071%)",
		"bc":"rgb(187, 163, 118)",
		"animat":"monkey8 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(31.65% 73.071%, 40.25% 73.214%, 26.75% 84.786%)",
		"bc":"rgb(89, 76, 63)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(42.65% 73.071%, 47.25% 69.929%, 46.95% 84.214%)",
		"bc":"rgb(109, 99, 90)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(27.95% 72.786%, 50.05% 67.929%, 44.45% 73.357%)",
		"bc":"rgb(226, 200, 124)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(27.55% 48.786%, 33.45% 72.3%, 27.9% 72.929%)",
		"bc":"rgb(170, 152, 115)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(27.55% 48.929%, 31.55% 41.643%, 33.45% 72.214%)",
		"bc":"rgb(196, 180, 146)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(31.65% 43.214%, 38.75% 70.929%, 33.35% 72.357%)",
		"bc":"rgb(159, 136, 98)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(31.65% 43.214%, 44.15% 71.071%, 38.55% 70.929%)",
		"bc":"rgb(170, 152, 115)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(31.65% 43.214%, 36.65% 37.357%, 44.1% 71%)",
		"bc":"rgb(195, 176, 141)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(36.65% 37.357%, 50.05% 67.643%, 44.15% 71.071%)",
		"bc":"rgb(159, 136, 98)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(37.35% 38.929%, 42.05% 33.786%, 49.25% 65.929%)",
		"bc":"rgb(145, 122, 91)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(42.35% 35.357%, 47.45% 31.5%, 49.35% 66.357%)",
		"bc":"rgb(171, 141, 110)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(47.5% 33.357%, 51.45% 31.214%, 49.4% 66.7%)",
		"bc":"rgb(194, 161, 120)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(51.25% 33.214%, 56.25% 31.786%, 49.45% 66.643%)",
		"bc":"rgb(208, 179, 131)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.75% 33.929%, 62.85% 33.929%, 49.45% 66.5%)",
		"bc":"rgb(216, 195, 155)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(62.05% 35.5%, 73.45% 41.071%, 50.95% 62.786%)",
		"bc":"rgb(214, 183, 129)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(50.95% 62.643%, 72.75% 41.786%, 80.05% 57.071%)",
		"bc":"rgb(197, 164, 122)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(51.05% 62.643%, 78.75% 57.214%, 54.75% 67.786%)",
		"bc":"rgb(171, 141, 110)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(54.65% 67.786%, 78.65% 57.214%, 80.25% 67.357%)",
		"bc":"rgb(158, 135, 98)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(54.55% 67.786%, 79.05% 67.357%, 79.95% 74.5%)",
		"bc":"rgb(126, 107, 76)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(54.65% 67.643%, 78.55% 74.071%, 72.35% 79.643%)",
		"bc":"rgb(98, 75, 65)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(56.75% 69.214%, 61.85% 73.071%, 59.35% 83.643%)",
		"bc":"rgb(81, 65, 58)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(54.65% 67.643%, 72.85% 79.071%, 72.25% 82.643%)",
		"bc":"rgb(198, 157, 94)",
		"animat":"none 0s ease 0s 1 normal none running"
	}
],
	//考拉
	[
	{
		"poly":"polygon(32.85% 53.714%, 47.55% 57.714%, 32.05% 70.429%)",
		"bc":"rgb(124, 95, 75)"
	},
	{
		"poly":"polygon(26.45% 49.286%, 34.65% 68.143%, 31.75% 73.143%)",
		"bc":"rgb(144, 123, 114)"
	},
	{
		"poly":"polygon(34.6% 68.03%, 52.3% 75.286%, 31.65% 73.143%)",
		"bc":"rgb(31, 29, 23)"
	},
	{
		"poly":"polygon(34.65% 68.143%, 47.45% 57.8%, 50.6% 65.6%)",
		"bc":"rgb(82, 69, 60)"
	},
	{
		"poly":"polygon(34.3% 68.1%, 50.6% 65.5%, 52.35% 75.429%)",
		"bc":"rgb(51, 49, 40)"
	},
	{
		"poly":"polygon(32.95% 54.143%, 52.15% 44%, 47.35% 58%)",
		"bc":"rgb(143, 106, 89)"
	},
	{
		"poly":"polygon(33.25% 53.857%, 31.65% 30%, 38.95% 47.857%)",
		"bc":"rgb(106, 94, 81)"
	},
	{
		"poly":"polygon(31.75% 55%, 42.3% 42.4%, 52.5% 44%)",
		"bc":"rgb(154, 117, 91)"
	},
	{
		"poly":"polygon(53.55% 39%, 63.25% 54.143%, 47.3% 57.99%)",
		"bc":"rgb(134, 96, 66)"
	},
	{
		"poly":"polygon(41.25% 42.286%, 52.2% 36.857%, 57.15% 44.857%)",
		"bc":"rgb(121, 88, 76)"
	},
	{
		"poly":"polygon(47.35% 57.8%, 63.3% 54%, 50.5% 65.714%)",
		"bc":"rgb(98, 76, 62)"
	},
	{
		"poly":"polygon(50.45% 65.571%, 63.25% 54%, 52.15% 75.429%)",
		"bc":"rgb(59, 55, 47)"
	},
	{
		"poly":"polygon(63.25% 53.9%, 68.35% 64.429%, 51.5% 76.571%)",
		"bc":"rgb(72, 66, 64)"
	},
	{
		"poly":"polygon(63.15% 53.857%, 74.85% 37%, 68.3% 64.4%)",
		"bc":"rgb(68, 57, 48)"
	},
	{
		"poly":"polygon(52.05% 36.857%, 60.2% 40.286%, 63.3% 54.3%)",
		"bc":"rgb(117, 76, 52)"
	},
	{
		"poly":"polygon(52.05% 37%, 52.25% 14.429%, 65.15% 42.286%)",
		"bc":"rgb(58, 44, 26)"
	},
	{
		"poly":"polygon(48.35% 17.714%, 52.25% 14.286%, 54.35% 25.143%)",
		"bc":"rgb(89, 79, 72)"
	},
	{
		"poly":"polygon(63.25% 54.143%, 58.15% 31.286%, 68.35% 25.286%)",
		"bc":"rgb(143, 113, 90)"
	},
	{
		"poly":"polygon(63.15% 54%, 68.35% 25.286%, 74.95% 37.143%)",
		"bc":"rgb(109, 82, 58)"
	},
	{
		"poly":"polygon(60.75% 34.429%, 67.45% 29.857%, 71.85% 37.429%)",
		"bc":"rgb(191, 176, 163)"
	},
	{
		"poly":"polygon(59.65% 36.571%, 66.45% 35%, 64.15% 49%)",
		"bc":"rgb(153, 134, 123)"
	},
	{
		"poly":"polygon(66.35% 35%, 72.35% 40.286%, 64.05% 48.857%)",
		"bc":"rgb(128, 109, 91)"
	},
	{
		"poly":"polygon(62.55% 37.429%, 66.45% 35.143%, 69.25% 39.429%)",
		"bc":"rgb(90, 93, 110)"
	},
	{
		"poly":"polygon(62.45% 37.429%, 69.25% 39.429%, 65.45% 40.857%)",
		"bc":"rgb(49, 52, 48)"
	},
	{
		"poly":"polygon(59.75% 36.571%, 63.35% 33%, 65.05% 35.429%)",
		"bc":"rgb(58, 46, 34)"
	},
	{
		"poly":"polygon(67.65% 36.143%, 70.25% 35.429%, 72.15% 40.143%)",
		"bc":"rgb(57, 45, 33)"
	},
	{
		"poly":"polygon(59.65% 36.571%, 60.85% 31.429%, 64.35% 32%)",
		"bc":"rgb(219, 174, 99)"
	},
	{
		"poly":"polygon(69.45% 33.571%, 72.25% 34.429%, 72.25% 40.286%)",
		"bc":"rgb(219, 174, 99)"
	},
	{
		"poly":"polygon(63.15% 54%, 80.35% 68.143%, 72.55% 69.4%)",
		"bc":"rgb(99, 85, 82)"
	},
	{
		"poly":"polygon(73.35% 69.3%, 81.75% 60.286%, 80.35% 68.143%)",//改处1
		"bc":"rgb(135, 108, 95)",
        "animat":"shulan27  1.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(19.85% 40%, 21.65% 43.714%, 19.15% 85%)",
		"bc":"rgb(77, 55, 61)"
	},
	{
		"poly":"polygon(20.3% 41%, 40.25% 29.3%, 21.6% 43.771%)",
		"bc":"rgb(31, 29, 23)"
	},
	{
		"poly":"polygon(20.35% 41%, 60.45% 12.714%, 63.45% 15.714%)",
		"bc":"rgb(77, 55, 61)"
	}
	],
	//蝴蝶
	[
	{
		"poly":"polygon(19.15% 16.5%, 37.25% 25.643%, 46.55% 47.929%)",
		"bc":"rgb(59, 45, 40)",
		"animat":"butterfly1 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(19.15% 16.5%, 26.9% 50.929%, 29.25% 34.3%)",
		"bc":"rgb(59, 45, 40)",
		"animat":"butterfly2 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(19.05% 16.5%, 29% 34.3%, 36.4% 27.5%)",
		"bc":"rgb(228, 110, 57)",
		"animat":"butterfly3 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(29% 34.214%, 36.3% 27.4%, 46.6% 48.2%)",
		"bc":"rgb(251, 145, 60)",
		"animat":"butterfly4 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(28.9% 34.1%, 46.55% 48.214%, 26.85% 50.929%)",
		"bc":"rgb(66, 60, 50)",
		"animat":"butterfly5 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(26.75% 50.786%, 46.55% 48.071%, 46.05% 52.643%)",
		"bc":"rgb(48, 32, 29)",
		"animat":"butterfly6 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(31.25% 52.5%, 45.95% 52.786%, 32.65% 64.786%)",
		"bc":"rgb(238, 133, 72)",
		"animat":"butterfly7 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(31.15% 52.5%, 45.95% 52.929%, 38.05% 57.643%)",
		"bc":"rgb(239, 186, 107)",
		"animat":"butterfly8 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(35.45% 60.5%, 36.45% 61.214%, 35.35% 62.071%)",
		"bc":"rgb(35, 38, 38)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(32.55% 64.643%, 45.85% 52.929%, 38.45% 70.214%)",
		"bc":"rgb(202, 101, 50)",
		"animat":"butterfly10 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(47.55% 46.786%, 50.15% 44.071%, 43.15% 67.071%)",
		"bc":"rgb(59, 45, 40)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(50.15% 44.071%, 50.35% 48.643%, 43.25% 66.643%)",
		"bc":"rgb(35, 18, 12)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(48.85% 48.071%, 48.25% 52.214%, 47.15% 51.643%)",
		"bc":"rgb(220, 176, 80)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(48.25% 46.214%, 48.25% 44.786%, 50.15% 44.071%)",
		"bc":"rgb(98, 86, 77)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(50.15% 44.071%, 51.25% 46.643%, 50.25% 47.786%)",
		"bc":"rgb(98, 86, 77)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(49.15% 44.357%, 46.75% 28.643%, 49.85% 44.214%)",
		"bc":"rgb(7, 4, 1)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(50.45% 44.643%, 62.15% 38.214%, 50.75% 45.357%)",
		"bc":"rgb(7, 4, 1)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(46.85% 57.357%, 42.95% 75.357%, 38.95% 72.643%)",
		"bc":"rgb(230, 161, 91)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(38.95% 72.643%, 42.95% 75.357%, 39.75% 77.071%)",
		"bc":"rgb(59, 45, 40)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(45.45% 56.5%, 46.95% 57.357%, 39.05% 72.643%)",
		"bc":"rgb(252, 204, 103)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(48.45% 54.214%, 58.95% 69.214%, 51.95% 76.214%)",
		"bc":"rgb(233, 130, 71)",
		"animat":"butterfly9 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(48.35% 54.214%, 58.95% 69.071%, 51.65% 65.786%)",
		"bc":"rgb(238, 185, 107)",
		"animat":"butterfly11 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(48.45% 54.214%, 51.95% 76.214%, 45.05% 74.214%)",
		"bc":"rgb(202, 101, 50)",
		"animat":"butterfly12 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(51.05% 70.071%, 51.85% 70.357%, 51.25% 71.929%)",
		"bc":"rgb(35, 38, 38)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(48.35% 54.214%, 50.35% 49.929%, 62.75% 72.786%)",
		"bc":"rgb(48, 32, 29)",
		"animat":"butterfly13 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(50.45% 50.071%, 67.85% 42.929%, 86.55% 53.929%)",
		"bc":"rgb(57, 44, 39)",
		"animat":"butterfly14 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(50.45% 50.071%, 67.75% 45.214%, 69.85% 57.5%)",
		"bc":"rgb(247, 143, 59)",
		"animat":"butterfly15 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(50.35% 50.071%, 69.85% 57.357%, 62.65% 72.786%)",
		"bc":"rgb(58, 53, 44)",
		"animat":"butterfly16 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(67.65% 45.357%, 86.55% 53.929%, 69.85% 57.5%)",
		"bc":"rgb(228, 110, 57)",
		"animat":"butterfly17 3.5s ease-out 2s infinite alternate none running"
	},
	{
		"poly":"polygon(69.75% 57.357%, 86.65% 53.929%, 62.65% 72.786%)",
		"bc":"rgb(59, 45, 40)",
		"animat":"butterfly18 3.5s ease-out 2s infinite alternate none running"
	}
	],
	//海马
	[
	{
		"poly":"polygon(28.8% 36.9%, 23.8% 40.1%, 24.1% 44.7%)",
		"bc":"rgb(79, 64, 83)",
	},
	{
		"poly":"polygon(24.1% 44.7%, 26% 50.4%, 28.8% 36.9%)",
		"bc":"rgb(57, 39, 61)",
	},
	{
		"poly":"polygon(24.1% 44.7%, 25.7% 49.5%, 22.3% 50.6%)",
		"bc":"rgb(72, 52, 72)",
		"animat":"haima3 3s linear 3s infinite alternate none running"
	},
	{
		"poly":"polygon(76.2% 64.3%, 74% 67.5%, 75.6% 67.9%)",
		"bc":"rgb(13, 10, 21)",
		"animat":"haima4 3s linear 1s infinite alternate none running"
	},
	{
		"poly":"polygon(78.3% 66.5%, 74% 67.5%, 77.8% 70.5%)",
		"bc":"rgb(73, 59, 68)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(77.8% 70.5%, 81.1% 63.5%, 78.7% 61.2%)",
		"bc":"rgb(52, 42, 56)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(81.1% 63.5%, 75.7% 53.6%, 73.4% 56.8%)",
		"bc":"rgb(65, 49, 59)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(75.4% 53.7%, 67.5% 71.3%, 61.2% 71.9%)",
		"bc":"rgb(65, 49, 59)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(67.2% 64.3%, 64.5% 60.5%, 61.2% 71.9%)",
		"bc":"rgb(19, 16, 31)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(64.8% 61.8%, 56.2% 65.8%, 61.2% 71.9%)",
		"bc":"rgb(31, 22, 25)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(65% 61.8%, 56.2% 65.9%, 60.1% 58.2%)",
		"bc":"rgb(36, 23, 35)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(59.6% 59.3%, 51% 59.5%, 56.3% 65.9%)",
		"bc":"rgb(43, 26, 45)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(51% 59.5%, 59.6% 59.4%, 57% 52.1%)",
		"bc":"rgb(55, 40, 60)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(51% 59.5%, 56.1% 53.4%, 43.5% 50%)",
		"bc":"rgb(70, 53, 74)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(56.1% 53.5%, 45% 50.5%, 52.2% 41.6%)",
		"bc":"rgb(81, 65, 84)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(51.3% 42.8%, 40.7% 41.6%, 44.5% 51.8%)",
		"bc":"rgb(76, 59, 77)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(51.3% 42.9%, 40.7% 41.7%, 49% 31.6%)",
		"bc":"rgb(81, 65, 84)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(40.7% 41.8%, 48.1% 32.8%, 34.3% 28.1%)",
		"bc":"rgb(78, 62, 78)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(48.1% 32.9%, 45.4% 23.4%, 34.3% 28.1%)",
		"bc":"rgb(83, 64, 84)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(61.2% 71.9%, 46.8% 53.8%, 40.4% 55.3%)",
		"bc":"rgb(79, 64, 83)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(40.4% 55.3%, 46.8% 53.8%, 36.7% 41.4%)",
		"bc":"rgb(110, 92, 113)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(34.3% 28.1%, 46.8% 53.8%, 36.7% 41.4%)",
		"bc":"rgb(98, 79, 97)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(34.3% 28.1%, 44.2% 24.1%, 41.4% 19%)",
		"bc":"rgb(89, 69, 88)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(34.3% 28.1%, 40.8% 19.9%, 34.2% 13.3%)",
		"bc":"rgb(96, 80, 101)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(34.3% 28.1%, 34.3% 14.8%, 26.3% 18.1%)",
		"bc":"rgb(86, 66, 85)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(34.3% 28.1%, 23.4% 30.2%, 26.3% 18.1%)",
		"bc":"rgb(72, 54, 74)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(23.4% 30.2%, 34.3% 28.1%, 28.8% 36.9%)",
		"bc":"rgb(52, 37, 56)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(23.4% 30.2%, 26.3% 18.1%, 19.4% 25.1%)",
		"bc":"rgb(87, 70, 99)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(19.4% 25.1%, 28.8% 36.9%, 21.7% 35.9%)",
		"bc":"rgb(72, 52, 72)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(21.7% 35.9%, 28.8% 36.9%, 23.8% 40.1%)",
		"bc":"rgb(58, 45, 62)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(62.4% 17.5%, 64.8% 16%, 77.4% 60.1%)",
		"bc":"rgb(104, 96, 42)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(68.2% 34.2%, 80% 65.4%, 78% 70%)",
		"bc":"rgb(67, 66, 39)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(79% 62.3%, 77.2% 85.7%, 80.5% 85.7%)",
		"bc":"rgb(67, 66, 39)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	],
	//企鹅
	[
	{
		"poly":"polygon(38.65% 66%, 40.75% 84.429%, 47.85% 70%)",
		"bc":"rgb(0, 0, 0)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(38.65% 66.143%, 47.85% 70%, 54.65% 46.286%)",
		"bc":"rgb(20, 20, 20)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(38.15% 57.857%, 33.65% 84.571%, 52.75% 51%)",
		"bc":"rgb(45, 45, 49)",
		"animat":"penguin3 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(44.65% 39.571%, 36.85% 59.429%, 52.85% 50.857%)",
		"bc":"rgb(55, 56, 58)",
		"animat":"penguin4 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(45.85% 41.4%, 52.75% 50.857%, 55.2% 38.286%)",
		"bc":"rgb(41, 41, 46)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(47.55% 27.143%, 41.25% 45.714%, 55.05% 38.429%)",
		"bc":"rgb(70, 70, 73)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(40.75% 84.571%, 52.35% 85%, 49.05% 89.857%)",
		"bc":"rgb(30, 29, 33)",
		"animat":"penguin7 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(46.95% 81.714%, 58.95% 81.143%, 55.75% 85.571%)",
		"bc":"rgb(30, 29, 33)",
		"animat":"penguin8 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(47.55% 27.143%, 61.15% 21.714%, 55.05% 38.429%)",
		"bc":"rgb(216, 216, 221)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(47.55% 27.143%, 48.25% 13.143%, 50.55% 25.857%)",
		"bc":"rgb(171, 171, 181)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(48.25% 13.143%, 53.85% 7.857%, 49.05% 17.714%)",
		"bc":"rgb(204, 206, 205)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(49.05% 17.714%, 52.15% 11.286%, 50.55% 25.857%)",
		"bc":"rgb(28, 28, 30)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.15% 11.286%, 53.65% 7.714%, 59.65% 10.571%)",
		"bc":"rgb(250, 249, 250)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.1% 11.4%, 59.8% 10.5%, 57.65% 15.7%)",
		"bc":"rgb(181, 128, 167)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.05% 11.286%, 60.55% 18%, 50.45% 25.857%)",
		"bc":"rgb(50, 50, 60)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(50.45% 25.857%, 60.45% 17.857%, 61.15% 21.714%)",
		"bc":"rgb(20, 20, 20)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(57.65% 15.714%, 59.75% 10.571%, 66.75% 14.571%)",
		"bc":"rgb(60, 54, 62)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(57.5% 15.6%, 66.75% 14.571%, 60.45% 18%)",
		"bc":"rgb(0, 0, 0)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.25% 41%, 57.05% 74.429%, 47.95% 69.857%)",
		"bc":"rgb(167, 166, 161)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(61.45% 15.143%, 62.95% 12.429%, 62.65% 15%)",
		"bc":"rgb(114, 102, 114)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(61.45% 15.143%, 62.65% 15%, 62.95% 16.571%)",
		"bc":"rgb(78, 67, 75)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(54.95% 38.429%, 61.15% 21.714%, 64.15% 32.429%)",
		"bc":"rgb(242, 242, 242)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.05% 38.286%, 64.05% 32.429%, 53.25% 48.143%)",
		"bc":"rgb(20, 20, 20)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.35% 45%, 64% 32.429%, 64% 37.143%)",
		"bc":"rgb(62, 60, 64)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.45% 45%, 64.05% 37%, 63.75% 51.286%)",
		"bc":"rgb(204, 206, 205)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.45% 44.857%, 63.75% 51.143%, 57.05% 74.429%)",
		"bc":"rgb(191, 194, 193)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(59.55% 65.714%, 63.05% 53.571%, 65.45% 73.429%)",
		"bc":"rgb(0, 0, 0)",
		"animat":"penguin27 5.5s ease 2s infinite normal none running"
	},
	{
		"poly":"polygon(59.65% 48.143%, 61.05% 49.143%, 59.95% 50.143%)",
		"bc":"rgb(41, 41, 46)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(40.65% 84.571%, 47.85% 69.714%, 57.2% 74.3%)",
		"bc":"rgb(132, 129, 125)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(40.85% 84.5%, 57.1% 74.2%, 51.75% 81.857%)",
		"bc":"rgb(117, 110, 96)",
		"animat":"none 0s ease 0s 1 normal none running"
	}
	],
	//猩猩
	[
	{
		"poly":"polygon(46.7% 81.357%, 30.3% 44.071%, 39.6% 36.643%)",
		"bc":"rgb(44, 44, 38)"
	},
	{
		"poly":"polygon(45.9% 77.214%, 39.6% 37.214%, 47.9% 46.071%)",
		"bc":"rgb(19, 23, 13)"
	},
	{
		"poly":"polygon(39.3% 36.929%, 54.2% 16.786%, 47.9% 46.214%)",
		"bc":"rgb(58, 59, 46)"
	},
	{
		"poly":"polygon(39.6% 41.071%, 47.1% 26.357%, 41.3% 45.929%)",
		"bc":"rgb(212, 230, 213)"
	},
	{
		"poly":"polygon(24.4% 26.357%, 35.7% 6.5%, 35.7% 17.5%)",
		"bc":"rgb(135, 137, 109)"
	},
	{
		"poly":"polygon(43.3% 34.5%, 47.3% 26.357%, 35.7% 17.5%)",
		"bc":"rgb(183, 195, 173)"
	},
	{
		"poly":"polygon(24.3% 26.357%, 35.7% 17.5%, 28.3% 34.214%)",
		"bc":"rgb(170, 180, 161)"
	},
	{
		"poly":"polygon(24.3% 26.357%, 31.9% 40.929%, 30.3% 45.214%)",
		"bc":"rgb(160, 164, 153)"
	},
	{
		"poly":"polygon(28.3% 34.071%, 35.7% 17.5%, 35.8% 48.929%)",
		"bc":"rgb(22, 25, 25)"
	},
	{
		"poly":"polygon(35.7% 17.5%, 43.3% 34.357%, 35.8% 48.643%)",
		"bc":"rgb(40, 42, 39)"
	},
	{
		"poly":"polygon(30.2% 45.357%, 35.7% 29.071%, 35.8% 48.786%)",
		"bc":"rgb(180, 188, 161)"
	},
	{
		"poly":"polygon(35.7% 29.071%, 41.4% 45.929%, 35.7% 48.786%)",
		"bc":"rgb(193, 211, 187)"
	},
	{
		"poly":"polygon(31.7% 40.786%, 39.4% 41.214%, 35.7% 44.071%)",
		"bc":"rgb(126, 92, 104)"
	},
	{
		"poly":"polygon(30.7% 40.929%, 35.8% 28.8%, 35.95% 42.929%)",
		"bc":"rgb(80, 84, 83)"
	},
	{
		"poly":"polygon(35.7% 29.071%, 40.8% 40.786%, 35.8% 42.929%)",
		"bc":"rgb(64, 68, 69)"
	},
	{
		"poly":"polygon(31.8% 25.786%, 35.7% 23.929%, 40% 25.786%)",
		"bc":"rgb(68, 71, 61)"
	},
	{
		"poly":"polygon(31.8% 25.786%, 39.9% 25.786%, 35.7% 29.071%)",
		"bc":"rgb(0, 0, 0)"
	},
	{
		"poly":"polygon(35.6% 17.357%, 35.7% 6.2%, 47.2% 26.357%)",
		"bc":"rgb(110, 111, 81)"
	},
	{
		"poly":"polygon(35.8% 6.5%, 54.7% 16.071%, 47.2% 26.357%)",
		"bc":"rgb(94, 92, 64)"
	},
	{
		"poly":"polygon(47.8% 46.2%, 54.23% 16.43%, 58.9% 38.929%)",
		"bc":"rgb(91, 87, 58)"
	},
	{
		"poly":"polygon(47.9% 45.7%, 52.5% 86.071%, 45% 86.071%)",
		"bc":"rgb(59, 56, 37)"
	},
	{
		"poly":"polygon(47.8% 46.071%, 58.7% 38.929%, 51.5% 78.5%)",
		"bc":"rgb(80, 77, 49)"
	},
	{
		"poly":"polygon(65% 14.214%, 74.1% 35.5%, 67.9% 41.5%)",
		"bc":"rgb(146, 145, 125)"
	},
	{
		"poly":"polygon(54.3% 16.786%, 67.4% 23.643%, 58.7% 39.071%)",
		"bc":"rgb(84, 81, 53)"
	},
	{
		"poly":"polygon(58.6% 38.786%, 67.4% 23.643%, 68% 41.643%)",
		"bc":"rgb(71, 71, 53)"
	},
	{
		"poly":"polygon(58.6% 38.7%, 68% 41.5%, 55.2% 57.643%)",
		"bc":"rgb(56, 56, 40)"
	},
	{
		"poly":"polygon(59.2% 54.786%, 62.4% 70.643%, 60.2% 84.071%)",
		"bc":"rgb(19, 23, 13)"
	},
	{
		"poly":"polygon(58.7% 53.071%, 67.97% 41.4%, 60.96% 69.3%)",
		"bc":"rgb(37, 42, 30)"
	},
	{
		"poly":"polygon(67.8% 41.5%, 74.1% 35.5%, 66.8% 62.214%)",
		"bc":"rgb(91, 87, 58)"
	},
	{
		"poly":"polygon(60.9% 69.1%, 67.9% 41.2%, 65.9% 84.357%)",
		"bc":"rgb(46, 48, 24)"
	}
	],
	//金狮绒	
	[
	{
		"poly":"polygon(23.45% 28.071%, 25.15% 15.214%, 28.05% 25.929%)",
		"bc":"rgb(185, 89, 23)",
		"animat":"shard1 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(23.35% 28.071%, 30.3% 24.786%, 32.05% 39.67%)",
		"bc":"rgb(74, 31, 24)",
		"animat":"shard2 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(25.15% 15.214%, 27.75% 25.929%, 30.85% 18.214%)",
		"bc":"rgb(74, 31, 24)",
		"animat":"shard3 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(25.05% 15.214%, 38.65% 12.786%, 30.75% 18.214%)",
		"bc":"rgb(226, 135, 45)",
		"animat":"shard4 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(30% 23%, 43.15% 29.357%, 31.85% 39.5%)",
		"bc":"rgb(105, 36, 16)",
		"animat":"shard5 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(30.75% 18.071%, 38.7% 12.8%, 33.95% 25.4%)",
		"bc":"rgb(157, 62, 22)",
		"animat":"shard6 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(28.25% 19.5%, 30.95% 18.1%, 27.75% 25.786%)",
		"bc":"rgb(181, 146, 128)",
		"animat":"shard7 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(27.75% 25.643%, 30.75% 18.214%, 30.15% 24.214%)",
		"bc":"rgb(163, 121, 94)",
		"animat":"shard8 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(27.75% 25.7%, 30.15% 24.1%, 30.8% 29.929%)",
		"bc":"rgb(48, 31, 25)",
		"animat":"shard9 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(30.75% 18.071%, 34% 25.3%, 30.05% 24.214%)",
		"bc":"rgb(130, 92, 65)",
		"animat":"shard10 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(30.15% 24.214%, 34.05% 25.357%, 30.7% 30.071%)",
		"bc":"rgb(33, 26, 20)",
		"animat":"shard11 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(30.75% 18.214%, 33.95% 18.786%, 34.05% 25.357%)",
		"bc":"rgb(184, 146, 118)","animat":
		"shard12 2s linear 1s infinite alternate none running"
	},
	{
		"poly":"polygon(33.95% 25.214%, 38.65% 12.929%, 42.25% 29.357%)",
		"bc":"rgb(127, 45, 19)",
		"animat":"shard13 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(31.85% 39.33%, 47.2% 23.4%, 37.23% 45.35%)",
		"bc":"rgb(90, 33, 23)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(23.45% 28.071%, 31.95% 39.357%, 32.05% 52.214%)",
		"bc":"rgb(59, 32, 26)",
		"animat":"shard15 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(38.65% 13.071%, 47.25% 23.357%, 41.8% 29.1%)",
		"bc":"rgb(185, 89, 23)",
		"animat":"shard16 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(31.85% 39.214%, 51.9% 61.1%, 31.95% 51.929%)",
		"bc":"rgb(48, 31, 25)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(47.15% 23.357%, 52.75% 33.071%, 37.1% 45.4%)",
		"bc":"rgb(128, 51, 11)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(37.1% 45.3%, 52.75% 32.9%, 52.55% 52.643%)",
		"bc":"rgb(156, 63, 16)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(37.15% 45.214%, 52.55% 52.357%, 51.75% 61.071%)",
		"bc":"rgb(59, 39, 26)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(42.45% 56.6%, 45.85% 58.1%, 34.15% 63.071%)",
		"bc":"rgb(84, 43, 10)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.2% 56.357%, 51.75% 60.929%, 40.35% 63.5%)",
		"bc":"rgb(180, 93, 28)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(47.15% 23.357%, 59.45% 26.929%, 52.55% 33.214%)",
		"bc":"rgb(245, 189, 77)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.65% 33.071%, 58.75% 27.357%, 70.35% 37.214%)",
		"bc":"rgb(235, 173, 65)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.65% 33.071%, 69.05% 36.786%, 52.55% 52.643%)",
		"bc":"rgb(220, 144, 34)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.55% 52.643%, 68.95% 36.786%, 69.55% 51.5%)",
		"bc":"rgb(216, 123, 31)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(52.55% 52.5%, 69.8% 51.4%, 51.55% 61.071%)",
		"bc":"rgb(199, 105, 30)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(51.55% 60.929%, 69.6% 51.4%, 64.25% 62.5%)",
		"bc":"rgb(172, 85, 26)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(58.65% 61.786%, 64.25% 62.5%, 64.55% 84.643%)",
		"bc":"rgb(212, 147, 47)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(64.45% 79.357%, 75.85% 82.643%, 64.55% 84.643%)",
		"bc":"rgb(190, 115, 27)",
		"animat":"lion30 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(35.75% 62.214%, 45.96% 58%, 43.1% 84.8%)",
		"bc":"rgb(106, 70, 63)"
	},
	{
		"poly":"polygon(45.95% 57.2%, 54.65% 61.214%, 43% 85%)",
		"bc":"rgb(94, 56, 45)"
	},
	{
		"poly":"polygon(43.05% 84.786%, 54.75% 60.214%, 52.75% 84.786%)",
		"bc":"rgb(79, 50, 32)"
	}
	],
	//海龟
	[
	{
		"poly":"polygon(20.25% 49.857%, 30.75% 51.286%, 32.55% 58.714%)",
		"bc":"rgb(189, 194, 163)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(26.35% 55.857%, 32.45% 58.714%, 22.95% 70.571%)",
		"bc":"rgb(60, 98, 104)",
		"animat":"wugui2 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(22.65% 61%, 26.45% 56.286%, 22.95% 70.429%)",
		"bc":"rgb(27, 72, 89)",
		"animat":"wugui3 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(10.65% 58.714%, 20.05% 52.143%, 30.85% 51.857%)",
		"bc":"rgb(98, 114, 111)",
		"animat":"wugui4 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(10.55% 58.571%, 30.85% 51.857%, 25.45% 59.143%)",
		"bc":"rgb(183, 200, 192)",
		"animat":"wugui5 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(17.95% 50.143%, 23.5% 45.1%, 31.05% 52%)",
		"bc":"rgb(72, 115, 120)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(23.45% 45.143%, 44.45% 35.571%, 30.85% 52%)",
		"bc":"rgb(79, 127, 134)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(30.75% 51.857%, 40.9% 60.95%, 32.35% 58.571%)",
		"bc":"rgb(174, 175, 149)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(30.75% 51.857%, 42.15% 53.571%, 40.55% 60.714%)",
		"bc":"rgb(162, 163, 144)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(40.55% 60.857%, 42.15% 51.286%, 58.4% 58.429%)",
		"bc":"rgb(174, 180, 157)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(40.25% 50.286%, 55.75% 46.571%, 57.85% 58.571%)",
		"bc":"rgb(159, 171, 158)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(30.85% 51.857%, 44.45% 35.571%, 43.55% 54.429%)",
		"bc":"rgb(64, 113, 119)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(43.45% 54.571%, 44.35% 35.5%, 55.3% 47.714%)",
		"bc":"rgb(76, 131, 139)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(44.3% 35.571%, 62.45% 36.714%, 55.15% 47.857%)",
		"bc":"rgb(89, 139, 145)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.15% 47.714%, 62.5% 36.714%, 66.05% 50.714%)",
		"bc":"rgb(57, 103, 111)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.65% 47.857%, 65.95% 50.571%, 57.75% 58.571%)",
		"bc":"rgb(190, 190, 170)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(57.65% 58.571%, 65.95% 50.571%, 66.85% 55.714%)",
		"bc":"rgb(169, 171, 150)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(66% 50.6%, 64.45% 45%, 75.75% 46.429%)",
		"bc":"rgb(55, 124, 129)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(64.45% 45.1%, 75.65% 43.714%, 75.65% 46.571%)",
		"bc":"rgb(72, 148, 159)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(65.85% 50.571%, 75.8% 46.429%, 75.6% 53.99%)",
		"bc":"rgb(43, 72, 74)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(65.85% 50.571%, 80.05% 55.286%, 66.75% 55.714%)",
		"bc":"rgb(207, 202, 183)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(55.05% 51.571%, 58.25% 41.429%, 67.05% 41.714%)",
		"bc":"rgb(194, 213, 217)",
		"animat":"wugui22 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(58.25% 41.571%, 65.85% 21.714%, 67.05% 41.714%)",
		"bc":"rgb(173, 196, 186)",
		"animat":"wugui23 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(58.25% 41.571%, 60.45% 19.429%, 65.95% 21.857%)",
		"bc":"rgb(80, 123, 125)",
		"animat":"wugui24 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(60.55% 19.714%, 59.95% 10%, 65.95% 22%)",
		"bc":"rgb(19, 48, 47)",
		"animat":"wugui25 2s linear 2s infinite alternate none running"
	},
	{
		"poly":"polygon(75.55% 43.714%, 82.55% 49.857%, 75.65% 46.714%)",
		"bc":"rgb(128, 165, 159)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(75.65% 46.429%, 82.45% 49.857%, 75.45% 54%)",
		"bc":"rgb(79, 91, 91)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(75.35% 53.857%, 82.35% 49.857%, 80.75% 54.429%)",
		"bc":"rgb(90, 105, 106)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(80.65% 54.286%, 82.45% 49.857%, 82.05% 56%)",
		"bc":"rgb(107, 120, 121)",
		"animat":"none 0s ease 0s 1 normal none running"
	},
	{
		"poly":"polygon(78.15% 47.714%, 79.55% 48.429%, 79.55% 51.429%)",
		"bc":"rgb(29, 53, 58)",
		"animat":"none 0s ease 0s 1 normal none running"
	}
	],
	//猞猁
	[
	{
		"poly":"polygon(29.3% 35.214%, 38.4% 57.3%, 28.6% 54.357%)",
		"bc":"rgb(173, 163, 145)"
	},
	{ 
		"poly":"polygon(28.6% 34.643%, 49.4% 40.357%, 38.3% 57.214%)",
		"bc":"rgb(148, 136, 118)"
	},
	{
		"poly":"polygon(37.4% 27.643%, 48.9% 40.643%, 29.4% 35.071%)",
		"bc":"rgb(161, 143, 115)"
	},
	{
		"poly":"polygon(37.5% 27.929%, 63.9% 42.214%, 48.8% 40.786%)",
		"bc":"rgb(173, 158, 134)"
	},
	{
		"poly":"polygon(25.7% 25.214%, 31.6% 32.786%, 30.1% 43.071%)",
		"bc":"rgb(214, 216, 214)"
	},
	{
		"poly":"polygon(22.7% 26.929%, 25.7% 25.214%, 30% 43.071%)",
		"bc":"rgb(117, 115, 108)"
	},
	{
		"poly":"polygon(25.6% 25.214%, 32.8% 15.643%, 32.9% 34.643%)",
		"bc":"rgb(163, 151, 139)"
	},
	{
		"poly":"polygon(32.8% 15.643%, 39.9% 25.214%, 32.7% 34.786%)",
		"bc":"rgb(178, 163, 148)"
	},
	{
		"poly":"polygon(26.9% 23.5%, 26% 13.643%, 31.2% 17.929%)",
		"bc":"rgb(119, 99, 86)"
	},
	{
		"poly":"polygon(23.2% 9.5%, 31.2% 17.929%, 25.9% 14.357%)",
		"bc":"rgb(40, 40, 33)"
	},
	{
		"poly":"polygon(34.5% 17.929%, 42.3% 9.786%, 39.6% 14.5%)",
		"bc":"rgb(40, 40, 33)"
	},
	{
		"poly":"polygon(34.4% 18.071%, 39.7% 14.214%, 38.6% 23.5%)",
		"bc":"rgb(119, 99, 86)"
	},
	{
		"poly":"polygon(33.9% 31.929%, 39.9% 25.357%, 35.6% 43.071%)",
		"bc":"rgb(214, 216, 214)"
	},
	{
		"poly":"polygon(39.9% 25.214%, 42.9% 27.071%, 35.6% 42.929%)",
		"bc":"rgb(117, 115, 108)"
	},
	{
		"poly":"polygon(28.2% 33.5%, 32.8% 24.786%, 37.3% 33.5%)",
		"bc":"rgb(186, 175, 161)"
	},
	{
		"poly":"polygon(28.2% 33.5%, 37.3% 33.5%, 32.7% 37.643%)",
		"bc":"rgb(228, 220, 216)"
	},
	{
		"poly":"polygon(30.4% 32.214%, 35.1% 32.214%, 32.8% 35.214%)",
		"bc":"rgb(124, 93, 101)"
	},
	{
		"poly":"polygon(29.3% 54.357%, 35.5% 56.357%, 33.8% 84.357%)",
		"bc":"rgb(134, 122, 104)"
	},
	{
		"poly":"polygon(32.3% 73.5%, 34.2% 85.357%, 29.3% 85.357%)",
		"bc":"rgb(153, 139, 119)"
	},
	{
		"poly":"polygon(48.9% 40.643%, 44.5% 85.643%, 39.7% 85.643%)",
		"bc":"rgb(173, 158, 140)"
	},
	{
		"poly":"polygon(38.2% 57.071%, 49% 40.5%, 46.6% 62.357%)",
		"bc":"rgb(136, 125, 110)"
	},
	{
		"poly":"polygon(48.9% 40.5%, 62.3% 41.929%, 60% 62.357%)",
		"bc":"rgb(143, 131, 115)"
	},
	{
		"poly":"polygon(48.9% 40.5%, 60.1% 61.786%, 46.6% 62.214%)",
		"bc":"rgb(128, 116, 101)"
	},
	{
		"poly":"polygon(46.6% 62.1%, 60.1% 61.5%, 59.6% 78.643%)",
		"bc":"rgb(119, 107, 93)"
	},
	{
		"poly":"polygon(62.2% 42.214%, 76.9% 70.357%, 59.9% 62.5%)",
		"bc":"rgb(148, 136, 118)"
	},
	{
		"poly":"polygon(56.9% 60.071%, 75.9% 69.643%, 77.6% 84.214%)",
		"bc":"rgb(173, 158, 140)"
	},
	{
		"poly":"polygon(57% 59.929%, 77.7% 84.414%, 60.3% 83.786%)",
		"bc":"rgb(148, 136, 118)"
	},
	{
		"poly":"polygon(59.1% 74.929%, 63.5% 85.643%, 55.6% 85.643%)",
		"bc":"rgb(168, 154, 137)"
	},
	{
		"poly":"polygon(76.9% 77.929%, 84.3% 76.214%, 77.6% 83.214%)",
		"bc":"rgb(143, 126, 106)"
	},
	{
		"poly":"polygon(82.2% 76.786%, 85.1% 69.929%, 84.3% 76.357%)",
		"bc":"rgb(109, 97, 72)"
	}
	]
];
