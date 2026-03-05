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

        {/* Plan Mode Rule */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-xl">
              !
            </span>
            <div>
              <h2 className="text-xl font-bold text-red-700 mb-2">
                必須ルール：Plan Mode → 確認 → 実装の順番を必ず守る
              </h2>
              <p className="text-red-800 mb-3">
                MVP構築でも、<strong>いきなりコードを書かせてはいけません。</strong>
                必ず最初に Plan Mode で「何を作るか」「どんな画面構成にするか」を確認し、
                納得してから実装に入ります。
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-3">MVP構築の3ステップ</h4>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 bg-red-50 rounded-lg p-3 text-center border border-red-200">
                    <p className="text-xs text-red-500 font-bold mb-1">STEP A</p>
                    <p className="font-bold text-sm">Plan Mode</p>
                    <p className="text-xs text-text-secondary mt-1">
                      設計案を提案させる<br />（コードは書かない）
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-xl text-red-400 font-bold">
                    &rarr;
                  </div>
                  <div className="flex-1 bg-amber-50 rounded-lg p-3 text-center border border-amber-200">
                    <p className="text-xs text-amber-600 font-bold mb-1">STEP B</p>
                    <p className="font-bold text-sm">確認 &amp; 修正</p>
                    <p className="text-xs text-text-secondary mt-1">
                      あなたが内容を確認<br />必要なら修正指示
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-xl text-red-400 font-bold">
                    &rarr;
                  </div>
                  <div className="flex-1 bg-green-50 rounded-lg p-3 text-center border border-green-200">
                    <p className="text-xs text-green-600 font-bold mb-1">STEP C</p>
                    <p className="font-bold text-sm">実装GO</p>
                    <p className="text-xs text-text-secondary mt-1">
                      OKを出してから<br />コードを書かせる
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-red-600 mt-3">
                この3ステップは、<strong>各マイルストーン（M1/M2/M3）のすべてで適用</strong>します。
                マイルストーンごとに Plan → 確認 → 実装を繰り返してください。
              </p>
            </div>
          </div>
        </div>

        {/* Preparation: Plan Mode */}
        <StepCard number={0} title="【Plan Mode】プロジェクト全体の設計をAIに提案させる">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-sm font-bold text-red-700 mb-1">
              Plan Mode — まだコードは書かせません
            </p>
            <p className="text-sm text-red-600">
              「<strong>実装はまだしないで</strong>」と明記することで、
              AIは設計案だけを出してくれます。ここで画面構成・機能を確認します。
            </p>
          </div>

          <p>
            いきなりコードを書くのではなく、まずAIに「どんな画面を作るか」を提案させます。
            <strong>設計→確認→実装</strong>の順番は、プロのエンジニアと同じ進め方です。
          </p>

          <CodeBlock label="Step A: Claude Code にコピペ（Plan Mode — 設計案の提案）">
            {`docs/business-plan.md を読んで、このサービスのMVPサイトを作りたい。

技術スタック:
- Next.js（静的エクスポート）+ TypeScript + Tailwind CSS
- データベースは使わない（サンプルデータをTypeScriptの定数で持つ）
- GitHub Pages にデプロイする前提

以下を提案して。実装はまだしないで。
1. 画面一覧と各画面の概要
2. 各画面に含める要素（セクション、ボタン、データ項目）
3. ファイル構成（どのファイルに何を書くか）
4. データの型定義（どんなフィールドを持つか）`}
          </CodeBlock>

          <TipBox type="warning">
            <p>
              <strong>ここで必ず立ち止まってください。</strong>
              AIが提案した設計案を読んで、以下を確認しましょう：
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>・画面構成は適切か？（トップ、一覧、詳細で足りるか？）</li>
              <li>・各画面に含める情報は正しいか？</li>
              <li>・データの項目に過不足はないか？</li>
              <li>・修正したい点があれば、この段階で伝える</li>
            </ul>
          </TipBox>

          <p className="font-medium mt-4 mb-2">
            設計案に納得したら → 実装GOを出す
          </p>

          <CodeBlock label="Step B → C: 設計案OKなら → 実装開始を指示">
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

        <StepCard number={1} title="【Plan → 実装】トップページを作る">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-red-700">
              Plan Mode 適用: Step 0 で全体設計を確認済みなので、M1はそのまま実装に入ります。
              もし設計と違う内容になったら「待って、設計と違う」と止めてください。
            </p>
          </div>
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

        <StepCard number={2} title="【Plan → 実装】案件データ + 一覧ページを作る">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-xs font-bold text-red-700">
              Plan Mode 確認: 指示の中にデータ項目・画面要素を明記しています。
              これ自体が「設計書」の役割を果たします。AIの出力を確認して、想定と違えば修正指示を出してください。
            </p>
          </div>
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

        <StepCard number={3} title="【Plan → 実装】案件詳細 + 応募モーダルを作る">
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
