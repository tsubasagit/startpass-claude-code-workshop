import {
  StepCard,
  CodeBlock,
  TipBox,
  PageHeader,
} from "@/components/StepCard";
import Link from "next/link";

export default function MvpPage() {
  return (
    <>
      <PageHeader
        title="MVP構築ガイド"
        subtitle="事業計画書をもとに、マッチングサイトのMVPをAIで構築する"
        badge="Phase 4-5（50分）"
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Milestones Overview */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            3つのマイルストーンで進めます
          </h2>
          <p className="text-text-secondary mb-6">
            一気に作るのではなく、小さなゴールを3つ設定して段階的に進めます。
            <strong>M2（案件一覧）まで到達すれば成功です。</strong>
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-step-bg rounded-lg p-4 border-2 border-primary">
              <span className="text-xs bg-primary text-white px-2 py-0.5 rounded font-medium">
                M1 必須
              </span>
              <h3 className="font-bold mt-2">トップページ</h3>
              <p className="text-xs text-text-secondary mt-1">
                サービス紹介のランディングページ
              </p>
              <p className="text-sm font-medium text-primary mt-2">約10分</p>
            </div>
            <div className="bg-step-bg rounded-lg p-4 border-2 border-success">
              <span className="text-xs bg-success text-white px-2 py-0.5 rounded font-medium">
                M2 最低ライン
              </span>
              <h3 className="font-bold mt-2">案件一覧ページ</h3>
              <p className="text-xs text-text-secondary mt-1">
                サンプルデータ + フィルタリング機能
              </p>
              <p className="text-sm font-medium text-success mt-2">約10分</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
              <span className="text-xs bg-gray-400 text-white px-2 py-0.5 rounded font-medium">
                M3 ボーナス
              </span>
              <h3 className="font-bold mt-2">案件詳細 + 応募</h3>
              <p className="text-xs text-text-secondary mt-1">
                詳細ページ + 応募モーダル
              </p>
              <p className="text-sm font-medium text-text-secondary mt-2">
                約10分
              </p>
            </div>
          </div>
        </div>

        {/* Preparation */}
        <StepCard number={0} title="まず設計をAIに提案させる">
          <p>
            いきなりコードを書くのではなく、まずAIに「どんな画面を作るか」を提案させます。
            設計→実装の順番は、プロのエンジニアと同じ進め方です。
          </p>
          <CodeBlock label="Claude Code にコピペ（設計の提案を依頼）">
            {`docs/business-plan.md を読んで、このサービスのMVPサイトを作りたい。

技術スタック:
- Next.js（静的エクスポート）+ TypeScript + Tailwind CSS
- データベースは使わない（サンプルデータをTypeScriptの定数で持つ）
- GitHub Pages にデプロイする前提

まずは画面一覧と各画面の概要を提案して。実装はまだしないで。`}
          </CodeBlock>

          <p className="text-sm text-text-secondary mt-3">
            AIが画面一覧を提案してくれたら、内容を確認して：
          </p>

          <CodeBlock label="問題なければ実装開始を指示">
            {`この設計でOK。では実装を開始して。
Next.jsプロジェクトの初期化から。
日本語フォント（Noto Sans JP）、色は青系（信頼感のある色合い）で。`}
          </CodeBlock>

          <TipBox>
            <p>
              Claude Code がファイルを作成する許可を求めてきたら「Yes」を押してください。
              たくさんファイルが作られますが、すべて自動なので心配いりません。
            </p>
          </TipBox>
        </StepCard>

        {/* M1 */}
        <div className="border-l-4 border-primary pl-4">
          <h2 className="text-2xl font-bold mb-2">
            マイルストーン 1：トップページ
          </h2>
          <p className="text-text-secondary">
            サービスの顔となるランディングページを作ります
          </p>
        </div>

        <StepCard number={1} title="トップページを作る">
          <p>
            以下をClaude Codeにコピペしてください。
            AIがトップページの全コードを自動生成します。
          </p>
          <CodeBlock label="Claude Code にコピペ">
            {`トップページ（src/app/page.tsx）を作って。

■ ヒーローセクション
- キャッチコピー: 「大企業の知見を、スタートアップの成長力に。」
- サブコピー: 「StartPass Talent Bridge は、上場企業のプロフェッショナル人材とスタートアップをつなぐマッチングプラットフォームです」
- CTA: 「案件を探す」ボタン（/jobs へリンク）

■ 特徴セクション（3カラム）
1. 大企業×スタートアップ特化 — 「上場企業の経験豊富な人材が、スタートアップの成長を加速」
2. 低リスクの成約課金 — 「掲載無料。マッチングが成立するまで費用ゼロ」
3. StartPassネットワーク — 「経営者同士の信頼関係がベースの、質の高いマッチング」

■ 統計セクション
- 参画大企業: 15+ / 掲載案件数: 50+ / マッチング成立: 30+
（ダミーの数字でOK）

■ フッター
- © 2026 StartPass Talent Bridge. All rights reserved.

完成したら npm run dev でサーバーを起動して。`}
          </CodeBlock>

          <div className="bg-tip-bg rounded-lg p-5 mt-4">
            <p className="font-bold mb-2">確認方法</p>
            <p className="text-sm">
              ブラウザで{" "}
              <code className="bg-gray-200 px-2 py-0.5 rounded">
                http://localhost:3000
              </code>{" "}
              を開いてください。トップページが表示されるはずです。
            </p>
            <p className="text-sm text-text-secondary mt-2">
              もうWebサイトが動いています！ ここが最初の感動ポイントです。
            </p>
          </div>

          <TipBox type="warning">
            <p>
              エラーが出た場合は、<strong>エラーメッセージをそのままClaude Codeに貼りつけて</strong>ください。
              AIがエラーの原因を特定して自動で修正してくれます。
            </p>
          </TipBox>
        </StepCard>

        {/* M2 */}
        <div className="border-l-4 border-success pl-4">
          <h2 className="text-2xl font-bold mb-2">
            マイルストーン 2：案件一覧ページ
          </h2>
          <p className="text-text-secondary">
            サンプルデータとフィルタリング機能を作ります
          </p>
        </div>

        <StepCard number={2} title="案件データ + 一覧ページを作る">
          <p>
            次に、実際の案件データとそれを表示する一覧ページを作ります。
            検索やフィルター機能も一緒に作ってもらいます。
          </p>
          <CodeBlock label="Claude Code にコピペ">
            {`案件データの型定義・サンプルデータと、案件一覧ページをまとめて作って。

■ サンプルデータ 10件
大企業×スタートアップ連携らしい案件を10件作って。例:
- 大手製造業のDX推進アドバイザー → AI系スタートアップを支援
- メガバンク出身のCFO人材 → フィンテックスタートアップの資金調達支援
- 大手商社の海外事業経験者 → 越境ECスタートアップの海外展開支援
- IT大手のプロジェクトマネージャー → SaaSスタートアップの開発体制構築
など、リアルで魅力的な案件にして

■ 案件一覧ページ（src/app/jobs/page.tsx）
- ページタイトル: 「案件を探す」
- キーワード検索
- スキルタグでのフィルタリング（ボタン形式）
- 勤務形態フィルター（フルリモート / ハイブリッド）
- 案件カード（グリッド表示）
- フィルターはリアルタイム絞り込み`}
          </CodeBlock>

          <div className="bg-tip-bg rounded-lg p-5 mt-4">
            <p className="font-bold mb-2">確認方法</p>
            <p className="text-sm">
              ブラウザで{" "}
              <code className="bg-gray-200 px-2 py-0.5 rounded">
                http://localhost:3000/jobs
              </code>{" "}
              を開いてください。案件カードが並び、スキルタグをクリックするとフィルタリングされるはずです。
            </p>
          </div>

          <TipBox type="info">
            <p>
              <strong>ここまで来れば成功です！</strong>{" "}
              トップページと案件一覧がある、動くWebサービスが出来上がっています。
              時間に余裕があればM3（案件詳細）に進みましょう。
            </p>
          </TipBox>
        </StepCard>

        {/* M3 */}
        <div className="border-l-4 border-gray-300 pl-4">
          <h2 className="text-2xl font-bold mb-2">
            マイルストーン 3：案件詳細 + 応募機能
          </h2>
          <p className="text-text-secondary">
            ボーナスステージ。ここまで来れたら素晴らしい！
          </p>
        </div>

        <StepCard number={3} title="案件詳細 + 応募モーダルを作る">
          <CodeBlock label="Claude Code にコピペ">
            {`案件詳細ページ（src/app/jobs/[id]/page.tsx）を作って。

■ レイアウト
- 企業名 / ポジション名 / 企業タイプ / 勤務形態 / 稼働時間
- 報酬（目立つように）
- 募集概要
- 必要スキル（タグ形式）
- 「この案件に応募する」ボタン

■ 応募ボタンの動作
- クリック → モーダルが開く
- モーダル内に応募フォーム（名前 / メール / 自己PR）
- 「応募する」ボタン → 「応募が完了しました！」のメッセージ表示
  （実際にはメール送信しない。MVPなのでUIの動きだけでOK）

■ 静的エクスポート対応
- generateStaticParams でサンプルデータの全IDを返す`}
          </CodeBlock>

          <div className="bg-tip-bg rounded-lg p-5 mt-4">
            <p className="font-bold mb-2">確認方法</p>
            <p className="text-sm">
              案件一覧から「詳細を見る」をクリック → 案件の詳細が表示される →
              「この案件に応募する」ボタンを押す → 応募フォームが表示される →
              名前を入力して「応募する」 → 完了メッセージが出る
            </p>
          </div>
        </StepCard>

        {/* Deploy */}
        <div className="border-l-4 border-accent pl-4">
          <h2 className="text-2xl font-bold mb-2">
            インターネットに公開する
          </h2>
          <p className="text-text-secondary">
            作ったサイトを全世界に公開します（Phase 5）
          </p>
        </div>

        <StepCard number={4} title="GitHubにアップロードする">
          <p>
            まず、作ったコードをGitHub（コードの保存サービス）にアップロードします。
          </p>
          <CodeBlock label="Claude Code にコピペ">
            {`このプロジェクトをGitHubにpublicリポジトリとしてpushして。
リポジトリ名は「startpass-talent-bridge」で。`}
          </CodeBlock>
          <p className="text-sm text-text-secondary mt-2">
            Claude Code が自動でGitの初期化、GitHubへのリポジトリ作成、アップロードを行います。
          </p>
        </StepCard>

        <StepCard number={5} title="GitHub Pagesで公開する">
          <p>
            次に、GitHub Pages（無料のWebサイト公開サービス）を使って、
            インターネットに公開します。
          </p>
          <CodeBlock label="Claude Code にコピペ">
            {`GitHub Pages にデプロイできるように設定して。
- next.config.ts に静的エクスポートの設定を追加
- GitHub Actions のワークフローを作成
- basePath をリポジトリ名に設定
設定したらcommit & pushして。`}
          </CodeBlock>

          <div className="bg-gray-50 rounded-lg p-5 mt-4">
            <h4 className="font-bold mb-3">公開URLの確認手順</h4>
            <ol className="space-y-2 text-sm">
              <li>
                <span className="font-medium">1.</span>{" "}
                <code className="bg-gray-200 px-2 py-0.5 rounded">
                  https://github.com/あなたのユーザー名/startpass-talent-bridge
                </code>{" "}
                を開く
              </li>
              <li>
                <span className="font-medium">2.</span>{" "}
                上部の「<strong>Settings</strong>」タブをクリック
              </li>
              <li>
                <span className="font-medium">3.</span>{" "}
                左メニューの「<strong>Pages</strong>」をクリック
              </li>
              <li>
                <span className="font-medium">4.</span> Source を「
                <strong>GitHub Actions</strong>」に変更
              </li>
              <li>
                <span className="font-medium">5.</span>{" "}
                1〜3分待つとデプロイが完了
              </li>
              <li>
                <span className="font-medium">6.</span> 公開URL：
                <code className="bg-gray-200 px-2 py-0.5 rounded">
                  https://あなたのユーザー名.github.io/startpass-talent-bridge/
                </code>
              </li>
            </ol>
          </div>

          <TipBox>
            <p>
              <strong>スマホでもアクセスできます！</strong>{" "}
              公開URLをスマホのブラウザに入力してみてください。
              自分が作ったサイトがスマホでも見られます。
            </p>
          </TipBox>
        </StepCard>

        {/* Completion */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            おめでとうございます！
          </h2>
          <p className="text-lg text-white/80 mb-6">
            2時間前は何もなかったのに、今はインターネットに公開された
            Webサービスを持っています。
          </p>
          <div className="bg-white/10 rounded-lg p-4 max-w-md mx-auto text-left space-y-2">
            <p className="flex items-center gap-2">
              <span className="text-success">&#10003;</span>
              事業計画書（docs/business-plan.md）
            </p>
            <p className="flex items-center gap-2">
              <span className="text-success">&#10003;</span>
              マッチングサイトMVP（動くWebアプリ）
            </p>
            <p className="flex items-center gap-2">
              <span className="text-success">&#10003;</span>
              インターネットに公開済み
            </p>
          </div>
        </div>

        {/* Error Tips */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6">
            エラーが出たときの対処法
          </h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-bold mb-1">
                基本ルール：エラーメッセージをそのままAIに貼る
              </h4>
              <p className="text-sm text-text-secondary">
                Claude Code にエラーメッセージをコピペするだけで、AIが原因を特定して修正してくれます。
                自分で解決しようとしなくてOKです。
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold mb-1">
                画面が真っ白 / エラー画面が出る
              </h4>
              <p className="text-sm text-text-secondary">
                ブラウザのエラーメッセージ（赤い文字）をClaude Codeに貼ってください。
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold mb-1">
                npm run dev が動かない
              </h4>
              <p className="text-sm text-text-secondary">
                「npm run dev を実行したらエラーが出た。直して」とClaude Codeに言ってください。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">
                GitHub Pagesにデプロイできない
              </h4>
              <p className="text-sm text-text-secondary">
                ローカル（http://localhost:3000）で動いていれば成果としては十分です。
                デプロイは後日でもOK。
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Link
            href="/business-plan"
            className="inline-block border border-gray-300 text-text-secondary px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            &larr; 5ヵ年事業計画
          </Link>
          <Link
            href="/resources"
            className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            次へ：資料・リンク集 &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
