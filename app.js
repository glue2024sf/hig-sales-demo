// HIG 営業デモ — 共通ナビ注入（全ページ共有）
// HIG社＝DHCブランドのホテルアメニティ販売。チャネル軸（直販/東京マツシマ/JTB商事/ニシカワヤ/特販）。
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var nav = [
    { key: 'home', label: 'ホーム', href: 'index.html' },
    {
      key: 'dash', label: 'ダッシュボード', href: 'dashboard-weekly.html',
      menu: [
        { label: '週報（毎週全員）', href: 'dashboard-weekly.html' },
        { label: '営業チーム', href: 'dashboard-team.html' },
        { label: '個人', href: 'dashboard-personal.html' },
        { label: '四半期・経営', href: 'dashboard-quarter.html' },
        { label: '出荷・売上（Tシステム連携）', href: 'dashboard-shipping.html' }
      ]
    },
    {
      key: 'acct', label: '取引先', href: 'accounts.html',
      menu: [
        { label: 'チェーン運営会社（TOP147）', href: 'accounts.html' },
        { label: 'チェーン詳細 ＋ 施設', href: 'account-detail.html' }
      ]
    },
    { key: 'opp', label: '商談', href: 'opportunity.html' },
    { key: 'act', label: '活動', href: 'activity-input.html' },
    { key: 'sample', label: 'サンプル', href: 'sample-follow.html' },
    { key: 'prod', label: '商品（品番）', href: 'products.html' },
    { key: 'weekly', label: '週報入力', href: 'weekly-report.html' }
  ];

  var tabsHtml = nav.map(function (n) {
    var active = (n.key === page) ? ' active' : '';
    if (n.menu) {
      var items = n.menu.map(function (m) { return '<a href="' + m.href + '">' + m.label + '</a>'; }).join('');
      return '<span class="dd"><a class="' + active.trim() + '" href="' + n.href + '">' + n.label + '</a>' +
        '<div class="dd-menu">' + items + '</div></span>';
    }
    return '<a class="' + active.trim() + '" href="' + n.href + '">' + n.label + '</a>';
  }).join('');

  var header =
    '<div class="appbar">' +
    '  <div class="logo"><span class="badge">HIG</span> 営業</div>' +
    '  <div class="search"><input placeholder="検索（チェーン・施設・商談・品番…）"></div>' +
    '  <div class="right"><span class="ico">🔔</span><span class="ico">⚙️</span>' +
    '  <span class="avatar">倉</span></div>' +
    '</div>' +
    '<nav class="tabs">' + tabsHtml + '</nav>';

  document.body.insertAdjacentHTML('afterbegin', header);
})();
