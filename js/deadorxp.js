/**
 * deadorxp.js
 * XP ユーザーであれば警告するためのスクリプト
 *
 * Made by @Stocker_jp http://stocker.jp/
 * Public Domain
 */

// DOM構築が終わったら WordPress用に$トリ

jQuery(document).ready(function(){
	// XP でなければ return
	var ua = navigator.userAgent;
	if (!ua.match(/Win(dows )?(NT 5\.1|XP)/)) {
		return;
	}
	// 変数に使用する HTML を代入
	var deadorxp_html_modal = '<div id="deadorxp_html_modal"><p id="deadorxp_html_close">✕</p><div><p>Microsoft による Windows XP のサポートはまもなく終了します。<br>セキュリティ的に問題のある古い OS を使い続けた場合広範囲に被害をもたらす可能性があり、大変危険です。<br>今すぐに Windows 7,8 等のサポート対象のOSにアップデートするか新しい PC または Mac に買い替え、直ちにWindows XP の使用を終了してください。</p></div></div>';
	// deadorxp_html_modal を body の末尾に挿入
	jQuery('body').append(deadorxp_html_modal);
	// ✕ ボタンがクリックされたら消す
	jQuery('#deadorxp_html_close').click(function() {
		jQuery(this).parent().css({
			display: 'none'
		})
	});
});