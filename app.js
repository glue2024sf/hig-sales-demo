// HIG 営業デモ — 共通ナビ注入（全ページ共有）
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var nav = [
    { key: 'home', label: 'ホーム', href: 'index.html' },
    {
      key: 'dash', label: 'ダッシュボード', href: 'dashboard-overall.html',
      menu: [
        { label: '全体ミーティング向け', href: 'dashboard-overall.html' },
        { label: 'チーム（松島 / GTV）', href: 'dashboard-team.html' },
        { label: '個人', href: 'dashboard-personal.html' },
        { label: '経営', href: 'dashboard-exec.html' },
        { label: '出荷（XA3連携）', href: 'dashboard-shipping.html' }
      ]
    },
    { key: 'acct', label: '取引先', href: 'accounts.html' },
    { key: 'opp', label: '商談', href: 'opportunity.html' },
    { key: 'act', label: '活動', href: 'activity-input.html' },
    { key: 'follow', label: '追客', href: 'sample-follow.html' },
    { key: 'prod', label: '商品', href: 'products.html' },
    { key: 'weekly', label: '週次レポート', href: 'weekly-report.html' }
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
    '  <div class="search"><input placeholder="検索（取引先・商談・商品…）"></div>' +
    '  <div class="right"><span class="ico">🔔</span><span class="ico">⚙️</span>' +
    '  <span class="avatar">倉</span></div>' +
    '</div>' +
    '<nav class="tabs">' + tabsHtml + '</nav>';

  document.body.insertAdjacentHTML('afterbegin', header);
})();
