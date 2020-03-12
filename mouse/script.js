// 常數
var FPS = 60;							// 1秒間描繪的次數
var SCREEN_WIDTH = window.innerWidth;	// 畫面寬度
var SCREEN_HEIGHT = window.innerHeight;	// 畫面高度
var GRAVITY = 0.4;						// 重力係數

// 變數
var ctx;				// 2D context
var particleList = [];	// 放入建立好的顆粒的陣列
var mx = null;			// 滑鼠的X座標
var my = null;			// 滑鼠的Y座標

window.onload = function () {
	init();
};

// 初始設定
var init = function () {
	var canvas = document.getElementById("mycanvas");

	// 確認canvas元素是否存在
	if (!canvas || !canvas.getContext) {
		return false;
	}

	canvas.width = SCREEN_WIDTH;
	canvas.height = SCREEN_HEIGHT;
	ctx = canvas.getContext("2d");

	// 登錄滑鼠事件至canvas
    canvas.addEventListener("mousemove", updateMousePos, false);	// 滑鼠移動時的事件
    canvas.addEventListener("mouseout", resetMousePos, false);		// 滑鼠跑出畫面外時的事件

	// 執行主迴圈
	loop();
};

// 取得滑鼠位置
var updateMousePos = function (e) {
	var rect = e.target.getBoundingClientRect();
	mx = e.clientX - rect.left;
	my = e.clientY - rect.top;
};

// 重設滑鼠位置
var resetMousePos = function (e) {
	mx = null;
	my = null;
};

// 主迴圈
var loop = function () {
	add();
	update();
	draw();
	setTimeout(loop, 1000 / FPS);
};

// 新增顆粒
var add = function () {
	if (mx !== null && my !== null) {
		// 建立實體
		var p = new Particle(mx, my);
		p.create();

		// 將實體收納至陣列中
		particleList.push(p);
	}
};

// 更新顆粒位置
var update = function () {
	var list = [];
	for (var i = 0; i < particleList.length; i++) {
		particleList[i].update();

		// 若刪除旗標未被立起就收納至陣列中
		if (!particleList[i].isRemove) {
			list.push(particleList[i]);
		}
	}
	particleList = list;
};

// 顆粒的描繪
var draw = function () {
	// 描繪背景
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

	// 描繪顆粒
	ctx.save();
	ctx.globalCompositeOperation = "lighter";
	for (var i = 0; i < particleList.length; i++) {
		particleList[i].draw();
	}
	ctx.restore();
};


/**
 * Particle 類別
 */
// 建構子
var Particle = function (x, y) {
	this.x = x;
	this.y = y;
};

// 屬性與方法
Particle.prototype = {
	// 屬性
	x: null,		// X座標
	y: null,		// Y座標
	vx: 0,			// X軸方向的速度
	vy: 0,			// Y軸方向的速度
	radius: 0,		// 半徑
	color: null,	// 顏色
	isRemove: false,// 移除旗標

	// 隨機設定初始速度、尺寸、顏色
	create: function () {
		this.vx = Math.random() * 6 - 3;
		this.vy = Math.random() * (-6) - 2;
		this.radius = Math.random() * 20 + 5;
		var r = 150;
		var g = Math.floor(Math.random() * 100 + 155);
		var b = Math.floor(Math.random() * 155 + 100);
		this.color = "rgb(" + r + "," + g + ", " + b + ")";
	},

	// 更新位置
	update: function () {
		this.vy += GRAVITY;
		this.x += this.vx;
		this.y += this.vy;
		this.radius *= .97;

		// 顆粒跑出畫面外時設立刪除旗標
		if (this.x < 0 || this.x > SCREEN_WIDTH || this.y > SCREEN_HEIGHT) {
			this.isRemove = true;
		}
	},

	// 描繪
	draw: function () {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fill();
	}
};