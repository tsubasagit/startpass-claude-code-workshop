import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent font-medium mb-2">
            StartPass &times; AppTalentHub
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            「教えて宮崎先生」
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/80 mb-2">
            ファウンダー向けのやさしいClaude Code
          </h2>
          <h3 className="text-lg text-white/60 mb-8">
            5ヵ年事業計画とMVPの作り方
          </h3>
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 text-sm">
            <span>2026年3月5日（木）</span>
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>18:00 - 20:00</span>
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>ウェビナー＋後会食</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">
            この講座について
          </h2>
          <div className="bg-step-bg rounded-xl p-8 mb-8">
            <p className="text-lg leading-relaxed mb-4">
              プログラミング経験がなくても、<strong>AIに日本語で指示するだけ</strong>で
              事業計画書やWebサイトが作れる時代になりました。
            </p>
            <p className="text-lg leading-relaxed mb-4">
              この講座では、Anthropic社の<strong>Claude Code</strong>（クロード・コード）という
              AIツールを使って、<strong>2時間</strong>で以下を体験します：
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-success font-bold text-xl mt-0.5">&#10003;</span>
                <span>AIと一緒に<strong>5ヵ年事業計画書</strong>を作成する</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold text-xl mt-0.5">&#10003;</span>
                <span>動く<strong>マッチングサイトのMVP</strong>（試作品）を構築する</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold text-xl mt-0.5">&#10003;</span>
                <span>それを<strong>インターネットに公開</strong>する</span>
              </li>
            </ul>
          </div>

          <div className="bg-warning-bg border border-warning-border rounded-xl p-6 text-center">
            <p className="font-bold text-lg mb-2">
              プログラミング経験は不要です
            </p>
            <p className="text-text-secondary">
              必要なのは「何を作りたいか」というアイデアだけ。
              AIが設計も実装もやってくれます。
            </p>
          </div>
        </div>
      </section>

      {/* Speaker */}
      <section className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">講師</h2>
          <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://apptalenthub.co.jp/wp-content/uploads/2025/06/2024-3-768x768.png"
                  alt="宮崎 翼"
                  className="w-40 h-40 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-accent text-sm font-medium mb-1">
                  <a
                    href="https://apptalenthub.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    株式会社AppTalentHub
                  </a>{" "}
                  ファウンダーCEO
                </p>
                <h3 className="text-2xl font-bold mb-4">宮崎 翼</h3>
                <p className="text-text-secondary leading-relaxed">
                  AppTalentHub株式会社の創業者。AI駆動開発の実践者として、
                  DXBoost事業を通じて企業のデジタル変革を支援。
                  「経営者こそAIに触れるべき」をモットーに、
                  ファウンダー・経営者向けのAI活用講座を展開中。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">
            当日の流れ（全120分）
          </h2>
          <div className="space-y-4">
            {[
              {
                time: "18:00 - 18:10",
                phase: "Phase 1",
                title: "オープニング",
                desc: "なぜ今、ファウンダーがAIを触るべきか。ライブデモで「AIが30秒でWebページを作る瞬間」をお見せします。",
                duration: "10分",
              },
              {
                time: "18:10 - 18:25",
                phase: "Phase 2",
                title: "はじめてのターミナル & Claude Code",
                desc: "パソコンの「ターミナル」を開いて、Claude Codeを起動します。Excelのフォルダ操作と同じ感覚で、AIに日本語で指示する方法を学びます。",
                duration: "15分",
              },
              {
                time: "18:25 - 18:45",
                phase: "Phase 3",
                title: "AIと5ヵ年事業計画を練る",
                desc: "AIに事業計画書の叩き台を作らせて、ファウンダーの視点でブラッシュアップ。ビジネスモデル・ターゲット・競合分析を一気に仕上げます。",
                duration: "20分",
              },
              {
                time: "18:45 - 19:20",
                phase: "Phase 4",
                title: "AIでマッチングサイトMVPを構築",
                desc: "事業計画を元に、トップページ → 案件一覧 → 案件詳細 & 応募機能と、3つのマイルストーンでサイトを作り上げます。",
                duration: "35分",
              },
              {
                time: "19:20 - 19:35",
                phase: "Phase 5",
                title: "インターネットに公開",
                desc: "GitHub Pagesを使って、作ったサイトを全世界に公開。スマホからもアクセスできるURLが手に入ります。",
                duration: "15分",
              },
              {
                time: "19:35 - 20:00",
                phase: "Phase 6",
                title: "質疑応答",
                desc: "AI駆動開発を自社の経営にどう活かすか。参加者からの質問にお答えします。",
                duration: "25分",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-card rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 text-center">
                  <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded font-medium mb-1">
                    {item.phase}
                  </span>
                  <p className="text-xs text-text-secondary">{item.duration}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-bold">{item.title}</h3>
                    <span className="text-xs text-text-secondary">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">
            まずは事前準備から始めましょう
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            当日スムーズに進行するため、事前にソフトウェアのインストールをお願いしています。
            15〜30分程度で完了します。
          </p>
          <Link
            href="/setup"
            className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            事前準備ガイドへ
          </Link>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">
            研修資料
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/setup",
                title: "事前準備ガイド",
                desc: "Node.js、Claude Code、GitHubの準備。画像つきで丁寧に解説します。",
                badge: "最初にお読みください",
              },
              {
                href: "/business-plan",
                title: "5ヵ年事業計画の作り方",
                desc: "AIと一緒に事業計画書を作成する手順。コピペで使えるプロンプト付き。",
                badge: "Phase 3",
              },
              {
                href: "/mvp",
                title: "MVP構築ガイド",
                desc: "マッチングサイトのMVPをAIで構築する手順。3つのマイルストーンで進めます。",
                badge: "Phase 4-5",
              },
              {
                href: "/resources",
                title: "資料・リンク集",
                desc: "プレゼン資料、参考リンク、よくある質問など。講座終了後の復習にも。",
                badge: "まとめ",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                  {card.badge}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rappit-kun */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://apptalenthub.co.jp/wp-content/uploads/2026/02/プロトタイプ開発のラピットくん.png"
                alt="ラピットくん — AppTalentHub公式キャラクター"
                className="w-36 h-36 object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">
                ラピットくん
              </h3>
              <p className="text-sm text-text-secondary mb-1">
                AppTalentHub 公式キャラクター
              </p>
              <p className="text-text-secondary leading-relaxed">
                プロトタイプ開発が大好きな、AppTalentHubの公式マスコット。
                「まず作ってみよう！」の精神で、ファウンダーのみなさんのMVP開発を応援します。
              </p>
              <a
                href="https://apptalenthub.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-accent hover:underline font-medium"
              >
                AppTalentHub 公式サイト &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
