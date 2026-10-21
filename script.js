/**
 * M@KOTO - シンプル＆ミニマル できること一覧スクリプト
 * メニューをタップすると詳細が開閉するアコーディオン形式
 */

const CATEGORIES = [
  {
    id: 'session',
    title: '対話・鑑定・セッション'
  },
  {
    id: 'business',
    title: '経営・財務・ビジネス支援'
  },
  {
    id: 'digital',
    title: 'Web制作・AI活用・DX'
  },
  {
    id: 'creative',
    title: 'クリエイティブ・コミュニティ・メディア'
  }
];

const MENU_ITEMS = [
  // 1. 対話・鑑定・セッション
  {
    id: 'keicho-counseling',
    category: 'session',
    title: '傾聴・カウンセリング',
    summary: '対話を通じて頭と心を整理するセッション',
    description: '悩みや迷い、まだ言葉になっていない想いをじっくりお聴きします。話すことで思考や感情を整理し、次の一歩を軽やかに踏み出すための時間です。',
    price: '¥5,000〜 / 60分',
    duration: '1回 60分〜（オンライン / 対面）'
  },
  {
    id: 'kantei',
    category: 'session',
    title: '鑑定',
    summary: '生まれ持った資質・強み・運気の流れを読み解く',
    description: 'ご自身の資質やバイオリズムを読み解き、仕事・人間関係・転機のタイミングなど、現状に合わせた具体的な選択のヒントをお伝えします。',
    price: '¥10,000〜 / 60分',
    duration: '1回 60〜90分'
  },
  {
    id: 'reading-ascension',
    category: 'session',
    title: 'リーディングAssension',
    summary: '本質的なテーマを読み解き、次のステージへの変容を促す',
    description: '表面的な課題の奥にある本質的なテーマやエネルギー状態をリーディングし、思い込みを手放して次のステージへ進むための気づきをお届けします。',
    price: '¥15,000〜 / 1回',
    duration: '約60〜90分'
  },
  {
    id: 'channeling-session',
    category: 'session',
    title: 'チャネリングセッション',
    summary: '高次の視点から、いま必要なメッセージや直感を受け取る',
    description: '現在のあなたに最も必要な言葉やインスピレーションを受け取り、迷いを晴らして本来の方向性へ進むサポートを行います。',
    price: '¥15,000〜 / 1回',
    duration: '約60分'
  },

  // 2. 経営・財務・ビジネス支援
  {
    id: 'startup-consulting',
    category: 'business',
    title: '起業コンサル',
    summary: 'コンセプト設計から商品づくり・開業までを一貫サポート',
    description: '得意や想いを形にするコンセプト設計、サービスメニュー構築、初期の集客導線づくりまで、状況に合わせて伴走します。',
    price: '単発 ¥10,000〜 / 継続 月額¥30,000〜',
    duration: '単発（60〜90分）〜 数ヶ月伴走'
  },
  {
    id: 'management-dx',
    category: 'business',
    title: '経営コンサル（内部業務改善・DX）',
    summary: '社内の業務フロー整理とデジタル化による効率化',
    description: '属人化している業務やアナログ作業を整理し、現場に定着する業務フロー改善とデジタルツール導入（DX）を実行します。',
    price: '月額 ¥50,000〜（スポット相談可）',
    duration: '1ヶ月〜（課題に応じて設計）'
  },
  {
    id: 'accounting',
    category: 'business',
    title: '経理サポート',
    summary: '日々の記帳整理・クラウド会計導入・バックオフィス構築',
    description: '領収書や帳簿の整理、クラウド会計ソフトの初期設定、毎月の経理作業がスムーズに回る仕組みづくりをサポートします。',
    price: 'スポット ¥15,000〜 / 月次 ¥20,000〜',
    duration: '初期構築 約2〜4週間 / 月次継続可'
  },
  {
    id: 'financial-analysis',
    category: 'business',
    title: '財務分析',
    summary: '試算表・決算書からキャッシュフローと経営課題を可視化',
    description: '数字をわかりやすく読み解き、利益とお金が残る体質づくりや投資判断のための具体的な打ち手を一緒に整理します。',
    price: '¥30,000〜 / 1回（分析レポート＋面談）',
    duration: '資料共有から約1〜2週間'
  },
  {
    id: 'business-support',
    category: 'business',
    title: 'マーケティング・SNS運用・ビジネス相談',
    summary: '発信設計・集客導線づくり・定期的な壁打ちコーチング',
    description: '無理なく継続できるSNS運用やマーケティング設計、目標達成に向けた定期的な壁打ち・コーチングを行います。',
    price: '単発 ¥10,000〜 / 月額 ¥25,000〜',
    duration: '単発 または 月2回〜継続'
  },

  // 3. Web制作・AI活用・DX
  {
    id: 'web-development',
    category: 'digital',
    title: 'Web制作・デザイン・システム開発',
    summary: 'HP・LP制作から業務システム開発まで対応',
    description: 'シンプルなサービス紹介サイト、ホームページ（HP）、ランディングページ（LP）、業務効率化システムの開発まで目的に合わせて制作します。',
    price: 'シンプルサイト ¥50,000〜 / HP・システム 要お見積り',
    duration: '約2週間〜2ヶ月'
  },
  {
    id: 'ai-support',
    category: 'digital',
    title: 'AI活用・業務効率化支援',
    summary: '生成AIの活用レクチャー・自動化ツールの導入支援',
    description: '実務や発信にすぐ使えるAI活用法のマンツーマンレクチャーや、ルーチン業務の自動化構築をサポートします。',
    price: 'レクチャー ¥10,000〜 / 構築支援 ¥30,000〜',
    duration: 'レクチャー 90分〜 / 構築 2週間〜'
  },

  // 4. クリエイティブ・コミュニティ・メディア
  {
    id: 'ai-music',
    category: 'creative',
    title: 'AI作曲',
    summary: 'オリジナル楽曲・BGM・テーマソングの制作',
    description: 'AI音楽技術とディレクションを掛け合わせ、オリジナルテーマ曲、動画・ラジオ用BGM、イベントソングなどを制作します。',
    price: '¥10,000〜 / 1曲',
    duration: '約3日〜2週間'
  },
  {
    id: 'creative-production',
    category: 'creative',
    title: 'クリエイティブ制作（動画・写真・デザイン・ライティング）',
    summary: '発信や事業に必要なビジュアル・映像・文章制作',
    description: 'YouTubeやPR用の動画編集、写真撮影、バナーや印刷物のデザイン、想いを言語化するライティングまで幅広く対応します。',
    price: '¥10,000〜（内容によりお見積り）',
    duration: '約1〜3週間'
  },
  {
    id: 'community-produce',
    category: 'creative',
    title: 'コミュニティプロデュース',
    summary: 'オンラインサロン・勉強会・イベントの企画と場づくり',
    description: '人が集まり自然体でつながれるコミュニティのコンセプト設計、運営の仕組み化、イベント企画をプロデュースします。',
    price: '相談 ¥15,000〜 / 立ち上げ伴走 要相談',
    duration: '1〜3ヶ月'
  },
  {
    id: 'kosei-manabukai',
    category: 'creative',
    title: '個性を学ぶ会',
    summary: '自分と他者の個性の違いを楽しく学ぶワークショップ',
    description: '一人ひとりの生まれ持った個性や強みを学び合い、自己理解やチーム・家族間のコミュニケーションを深める勉強会です。',
    price: '参加 ¥3,000〜 / 貸切・出張開催 要相談',
    duration: '1回 約90〜120分'
  },
  {
    id: 'makoto-radio',
    category: 'creative',
    title: 'M@KOTO Radio',
    summary: '音声番組へのゲスト出演・コラボ企画・音声配信サポート',
    description: '「M@KOTO Radio」での対談・ゲスト出演や、ご自身のポッドキャスト・音声メディア立ち上げをサポートします。',
    price: 'ゲスト・コラボ相談 無料〜 / 番組支援 要相談',
    duration: '事前打ち合わせ＋収録 約60分'
  }
];

let currentCategory = 'all';

const menuListContainer = document.getElementById('menuListContainer');
const categoryFilter = document.getElementById('categoryFilter');
const selectedMenuSelect = document.getElementById('selectedMenuSelect');
const userName = document.getElementById('userName');
const userContact = document.getElementById('userContact');
const userMessage = document.getElementById('userMessage');
const copyBtn = document.getElementById('copyBtn');
const mailtoBtn = document.getElementById('mailtoBtn');
const copyNotice = document.getElementById('copyNotice');

// メニュー描画（初期状態はすべて閉じたシンプルなリスト）
function renderMenuList() {
  let html = '';

  CATEGORIES.forEach(cat => {
    if (currentCategory !== 'all' && currentCategory !== cat.id) return;

    const items = MENU_ITEMS.filter(item => item.category === cat.id);
    if (items.length === 0) return;

    html += `
      <div class="category-block">
        <div class="category-header">
          <h2 class="category-title">${cat.title}</h2>
          <span class="category-count">${items.length}項目</span>
        </div>
        <div class="accordion-list">
          ${items.map(item => `
            <div class="accordion-item" id="item-${item.id}">
              <button type="button" class="accordion-trigger" aria-expanded="false" data-target="item-${item.id}">
                <div class="trigger-left">
                  <span class="item-title">${item.title}</span>
                  <span class="item-summary">${item.summary}</span>
                </div>
                <span class="trigger-icon" aria-hidden="true">＋</span>
              </button>
              <div class="accordion-panel">
                <p class="panel-desc">${item.description}</p>
                <div class="panel-meta">
                  <div class="meta-pair">
                    <span class="meta-label">料金目安：</span>
                    <span class="meta-value">${item.price}</span>
                  </div>
                  <div class="meta-pair">
                    <span class="meta-label">目安時間・期間：</span>
                    <span class="meta-value">${item.duration}</span>
                  </div>
                </div>
                <div class="panel-action">
                  <button type="button" class="inquire-link-btn" data-select-menu="${item.title}">
                    このメニューについて相談する →
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  menuListContainer.innerHTML = html;

  // タップで開閉するイベント設定
  menuListContainer.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const itemEl = document.getElementById(targetId);
      const isOpen = itemEl.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // 「このメニューについて相談する」ボタン
  menuListContainer.querySelectorAll('.inquire-link-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const menuTitle = btn.getAttribute('data-select-menu');
      selectedMenuSelect.value = menuTitle;
      updateMailtoLink();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// お問い合わせセレクトボックスの選択肢を初期化
function populateSelectOptions() {
  MENU_ITEMS.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item.title;
    opt.textContent = item.title;
    selectedMenuSelect.appendChild(opt);
  });
}

// 送信テキスト作成とmailto更新
function buildInquiryText() {
  const menu = selectedMenuSelect.value;
  const name = userName.value.trim() || '（未入力）';
  const contact = userContact.value.trim() || '（未入力）';
  const msg = userMessage.value.trim() || '（特になし）';

  return `【お問い合わせ】
・気になるメニュー：${menu}
・お名前：${name}
・ご連絡先：${contact}
・ご相談内容：
${msg}`;
}

function updateMailtoLink() {
  const text = buildInquiryText();
  const subject = encodeURIComponent(`【M@KOTO】お問い合わせ（${selectedMenuSelect.value}）`);
  const body = encodeURIComponent(text);
  mailtoBtn.href = `mailto:info@example.com?subject=${subject}&body=${body}`;
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  populateSelectOptions();
  renderMenuList();
  updateMailtoLink();

  // カテゴリー切り替え
  categoryFilter.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    categoryFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.getAttribute('data-category');
    renderMenuList();
  });

  // 入力変化時にmailto更新
  [selectedMenuSelect, userName, userContact, userMessage].forEach(el => {
    el.addEventListener('input', updateMailtoLink);
    el.addEventListener('change', updateMailtoLink);
  });

  // コピーボタン
  copyBtn.addEventListener('click', async () => {
    const text = buildInquiryText();
    try {
      await navigator.clipboard.writeText(text);
      copyNotice.hidden = false;
      setTimeout(() => { copyNotice.hidden = true; }, 4000);
    } catch (e) {
      alert(text);
    }
  });
});
