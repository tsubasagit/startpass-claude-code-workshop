import { TipBox, PageHeader } from "@/components/StepCard";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="資料・リンク集"
        subtitle="講座で使った資料、参考リンク、よくある質問のまとめ"
        badge="まとめ"
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Deliverables */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            今日の成果物
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-step-bg rounded-lg p-4">
              <span className="text-2xl">&#128196;</span>
              <div>
                <h3 className="font-bold">事業計画書</h3>
                <p className="text-sm text-text-secondary">
                  <code className="bg-gray-200 px-2 py-0.5 rounded">
                    docs/business-plan.md
                  </code>
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  AIと一緒に作成した5ヵ年事業計画書。Markdownファイルとして保存されています。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-step-bg rounded-lg p-4">
              <span className="text-2xl">&#127760;</span>
              <div>
                <h3 className="font-bold">マッチングサイトMVP</h3>
                <p className="text-sm text-text-secondary">
                  <code className="bg-gray-200 px-2 py-0.5 rounded">
                    https://あなたのユーザー名.github.io/startpass-talent-bridge/
                  </code>
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  トップページ・案件一覧・案件詳細を備えたWebアプリケーション。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-step-bg rounded-lg p-4">
              <span className="text-2xl">&#128187;</span>
              <div>
                <h3 className="font-bold">ソースコード</h3>
                <p className="text-sm text-text-secondary">
                  <code className="bg-gray-200 px-2 py-0.5 rounded">
                    https://github.com/あなたのユーザー名/startpass-talent-bridge
                  </code>
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  GitHubリポジトリにすべてのコードが保存されています。いつでも修正・改良できます。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Presentation */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            プレゼン資料
          </h2>
          <p className="text-text-secondary mb-4">
            講座で使用したプレゼンテーション資料です。復習にお役立てください。
          </p>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-text-secondary text-sm">
              プレゼン資料は講座終了後にアップロード予定です。
            </p>
            <p className="text-text-secondary text-xs mt-2">
              （このページを再度開くとご覧いただけます）
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            講座後にやってみよう（次のステップ）
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div>
                <h3 className="font-bold">
                  同僚・チームメンバーにサイトを見せる
                </h3>
                <p className="text-sm text-text-secondary">
                  公開URLをSlackやメールで共有して、フィードバックをもらいましょう。
                  「2時間でAIと一緒に作った」と伝えると驚かれるはずです。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div>
                <h3 className="font-bold">Claude Codeで機能を追加してみる</h3>
                <p className="text-sm text-text-secondary">
                  例えば以下のような指示を試してみてください：
                </p>
                <ul className="text-sm text-text-secondary mt-2 space-y-1">
                  <li>
                    ・「デザインをもっとモダンに変えて」
                  </li>
                  <li>
                    ・「お問い合わせページを追加して」
                  </li>
                  <li>・「案件データを20件に増やして」</li>
                  <li>
                    ・「英語対応して」
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div>
                <h3 className="font-bold">
                  自社のアイデアでMVPを作ってみる
                </h3>
                <p className="text-sm text-text-secondary">
                  今日学んだ手順で、ご自身の事業アイデアのMVPを作ってみましょう。
                  テーマを変えるだけで、同じ手順が使えます。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6">
            よくある質問
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "Claude Code の料金はいくらですか？",
                a: "Claude Max が月額$100（約15,000円）から。APIの従量課金なら、今日のような2時間の作業で$5〜10程度です。",
              },
              {
                q: "今日作ったMVPをそのまま使い続けてもいいですか？",
                a: "もちろんです。GitHub Pagesで公開されているので、URLをそのまま共有できます。ただしデータは固定なので、本番利用にはデータベース接続が必要です。",
              },
              {
                q: "プログラミングを知らなくても続けられますか？",
                a: "今日体験した通り、Claude Codeがあればコードを書く必要はほぼありません。日本語で指示するだけで大丈夫です。",
              },
              {
                q: "Claude Code以外のAIツールでも同じことができますか？",
                a: "GitHub CopilotやCursorなど類似ツールはありますが、日本語での指示しやすさとCLIの使い勝手ではClaude Codeが現時点で最も優れています。",
              },
              {
                q: "社内でAI開発を推進するにはどうすればいいですか？",
                a: "まずは今日のような体験を社内のメンバーにもしてもらうことが第一歩です。小さなMVPから始めて、成功体験を共有していきましょう。",
              },
              {
                q: "今日のコードを改良したい場合はどうすれば？",
                a: "Claude Codeを再度起動して、修正指示を出すだけです。例：「検索機能を強化して」「デザインを変えて」",
              },
            ].map((item, i) => (
              <div key={i} className="border-b last:border-b-0 pb-4 last:pb-0">
                <h4 className="font-bold mb-1">Q. {item.q}</h4>
                <p className="text-sm text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6">参考リンク</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Claude Code 公式ドキュメント",
                url: "https://docs.anthropic.com/en/docs/claude-code",
                desc: "Claude Codeの公式ガイド（英語）",
              },
              {
                title: "Node.js 公式サイト",
                url: "https://nodejs.org/ja",
                desc: "Node.jsのダウンロード・ドキュメント",
              },
              {
                title: "GitHub Docs",
                url: "https://docs.github.com/ja",
                desc: "GitHubの使い方ガイド（日本語）",
              },
              {
                title: "Next.js 公式サイト",
                url: "https://nextjs.org/",
                desc: "今日使ったWebフレームワークの公式サイト",
              },
              {
                title: "StartPass",
                url: "https://startpass.jp/",
                desc: "スタートアップ向け経営加速クラウド",
              },
              {
                title: "AppTalentHub",
                url: "https://apptalenthub.co.jp/",
                desc: "DXBoost事業・AI駆動開発支援",
              },
            ].map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors block"
              >
                <h3 className="font-bold text-info text-sm">{link.title}</h3>
                <p className="text-xs text-text-secondary mt-1">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* SNS */}
        <TipBox>
          <p>
            <strong>SNSシェア歓迎です！</strong> 今日の体験をぜひSNSに投稿してください。
          </p>
          <p className="mt-1">
            推奨ハッシュタグ：
            <code className="bg-gray-200 px-2 py-0.5 rounded ml-1">
              #DXBoost #ClaudeCode #AppTalentHub #StartPass
            </code>
          </p>
        </TipBox>

        {/* StartPass CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-md p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-4">StartPass 会員募集中</h2>
          <p className="mb-2">
            <strong>StartPass の会員になると、こうした限定ワークショップにフルで参加できます。</strong>
          </p>
          <p className="mb-6 text-white/90 text-sm">
            詳しくは StartPass 公式サイトをご覧ください。
          </p>
          <a
            href="https://startpass.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            StartPass 公式サイトへ
          </a>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-text-secondary mb-4">
            講座の内容について、お気軽にお問い合わせください。
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>AppTalentHub株式会社</strong> DXBoost事業部
            </p>
            <p>
              <a
                href="https://apptalenthub.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info hover:underline"
              >
                https://apptalenthub.co.jp/
              </a>
            </p>
          </div>
        </div>

        {/* Rappit-kun */}
        <div className="text-center py-4">
          <img
            src="https://apptalenthub.co.jp/wp-content/uploads/2026/03/rapid-5.png"
            alt="ラピットくん — AppTalentHub公式キャラクター"
            className="w-28 h-28 object-contain mx-auto"
          />
          <p className="mt-3 text-lg font-bold text-primary">
            みんなの参加、待ってるよ！！
          </p>
        </div>

        {/* Back to top */}
        <div className="flex justify-between pt-4">
          <Link
            href="/mvp"
            className="inline-block border border-gray-300 text-text-secondary px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            &larr; MVP構築ガイド
          </Link>
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            TOPに戻る
          </Link>
        </div>
      </div>
    </>
  );
}
