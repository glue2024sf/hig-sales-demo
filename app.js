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
        { label: 'チェーン詳細', href: 'account-detail.html' },
        { label: '施設 詳細', href: 'facility-detail.html' },
        { label: '取引先責任者（キーマン）', href: 'contacts.html' },
        { label: '新規 チェーン/施設 登録', href: 'account-new.html' },
        { label: '対応表 整備（名寄せ）', href: 'mapping.html' }
      ]
    },
    {
      key: 'opp', label: '商談', href: 'opportunities.html',
      menu: [
        { label: '商談一覧（自分の担当）', href: 'opportunities.html' },
        { label: '商談 詳細', href: 'opportunity.html' },
        { label: '見積・提案アイテム', href: 'quote.html' },
        { label: '開業案件（オープン）', href: 'opening-projects.html' },
        { label: 'ロスト管理・復活', href: 'lost.html' },
        { label: '承認プロセス', href: 'approval.html' }
      ]
    },
    {
      key: 'act', label: '活動', href: 'activities.html',
      menu: [
        { label: '活動一覧・タイムライン', href: 'activities.html' },
        { label: '活動を記録', href: 'activity-input.html' },
        { label: 'ベルセールス議事録', href: 'belsales.html' },
        { label: 'ToDo・期限切れアラート', href: 'todos.html' }
      ]
    },
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
