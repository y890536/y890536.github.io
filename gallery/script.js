$(function () {
	// 初始設定
	$("section.content").hide();
	$($("nav a.selected").attr("href")).show();

	resetPage();
	showPage($("nav a.selected").attr("href"));

	// 點選按鈕時
	$("nav li a").click(function () {
		// 設定選單的 class 屬性
		$("nav li a").removeClass();
		$(this).addClass("selected");

		// 網頁的顯示切換
		$("section.content").hide();
		$($(this).attr("href")).show();

		// 設定網頁的動畫
		resetPage();
		showPage($(this).attr("href"));

		return false;
	});

	// 重設網頁
	function resetPage() {
		$("#page01 .main-img .photo").css({ top: "-100px", left: "-100px", opacity: 0 });
		$("#page01 .main-img .triangle").css({ bottom: "-100px", right: "-100px", opacity: 0 });
		$("#page01 .copy").css({ marginRight: "-100px", opacity: 0 });
		$("#page01 .main-img .ttl").css({ transform: "rotate(-180deg) scale(0)", opacity: 0 });

		$("#page02 .main-img .photo").css({ bottom: "-100px", right: "-100px", opacity: 0 });
		$("#page02 .main-img .triangle").css({ top: "-100px", left: "-100px", opacity: 0 });
		$("#page02 .copy").css({ marginLeft: "-100px", opacity: 0 });
		$("#page02 .main-img .ttl").css({ transform: "rotate(-180deg) scale(0)", opacity: 0 });

		$("#page03 .main-img .photo").css({ bottom: "-100px", right: "-100px", opacity: 0 });
		$("#page03 .main-img .triangle").css({ top: "-100px", left: "-100px", opacity: 0 });
		$("#page03 .copy").css({ marginRight: "-100px", opacity: 0 });
		$("#page03 .main-img .ttl").css({ transform: "rotate(-180deg) scale(0)", opacity: 0 });
	}

	// 網頁的顯示動畫
	function showPage(pageId) {
		switch (pageId) {
			case "#page01":
				$(".main-img .photo", pageId).stop().animate({ top: 0, left: 0, opacity: 1 }, 1000);
				$(".main-img .triangle", pageId).stop().animate({ bottom: 0, right: 0, opacity: 1 }, 1000);
				$(".copy", pageId).stop().delay(500).animate({ marginRight: 0, opacity: 1 }, 1000);
				$(".main-img .ttl", pageId).stop().delay(1000).transition({ rotate: '0deg', scale: 1, opacity: 1 }, 1000);
				break;
			case "#page02":
				$(".main-img .photo", pageId).stop().animate({ bottom: 0, right: 0, opacity: 1 }, 1000);
				$(".main-img .triangle", pageId).stop().animate({ top: 0, left: 0, opacity: 1 }, 1000);
				$(".copy", pageId).stop().delay(500).animate({ marginLeft: 0, opacity: 1 }, 1000);
				$(".main-img .ttl", pageId).stop().delay(1000).transition({ rotate: '0deg', scale: 1, opacity: 1 }, 1000);
				break;
			case "#page03":
				$(".main-img .photo", pageId).stop().animate({ bottom: 0, right: 0, opacity: 1 }, 1000);
				$(".main-img .triangle", pageId).stop().animate({ top: 0, left: 0, opacity: 1 }, 1000);
				$(".copy", pageId).stop().delay(500).animate({ marginRight: 0, opacity: 1 }, 1000);
				$(".main-img .ttl", pageId).stop().delay(1000).transition({ rotate: '0deg', scale: 1, opacity: 1 }, 1000);
				break;
		}
	}
});