import {
  StepCard,
  CodeBlock,
  TipBox,
  PageHeader,
} from "@/components/StepCard";
import Link from "next/link";

export default function BusinessPlanPage() {
  return (
    <>
      <PageHeader
        title="5ヵ年事業計画の作り方"
        subtitle="AIと一緒に事業計画書を作成し、経営者の目でブラッシュアップする"
        badge="Phase 3（20分）"
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">このパートで体験すること</h2>
          <p className="text-text-secondary mb-4">
            Claude Code（AI）に事業計画書の叩き台を作らせて、
            ファウンダーの視点でブラッシュアップします。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-step-bg rounded-lg p-4">
              <p className="font-bold text-sm mb-1">AIがやること</p>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>・構造化された事業計画書の生成</li>
                <li>・競合分析の枠組み作成</li>
                <li>・数字の叩き台を提示</li>
              </ul>
            </div>
            <div className="bg-warning-bg rounded-lg p-4">
              <p className="font-bold text-sm mb-1">人間（あなた）がやること</p>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>・ビジネスモデルの数字の妥当性を判断</li>
                <li>・市場の肌感覚で修正</li>
                <li>・「何を作るか」の最終判断</li>
              </ul>
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
                必須ルール：まず Plan Mode で設計してから作る
              </h2>
              <p className="text-red-800 mb-4">
                Claude Code では、<strong>いきなり作り始めてはいけません。</strong>
                必ず最初に「Plan Mode（プランモード）」で全体設計を確認し、
                内容に納得してから実装に入ります。
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold mb-2">Plan Mode とは？</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Claude Code に「まず計画を立てて。実装はまだしないで」と指示すると、
                  AIは<strong>コードを書かずに設計案だけ</strong>を提示してくれます。
                  これが Plan Mode です。
                </p>
                <p className="text-sm text-text-secondary">
                  家を建てるときに設計図を描いてから工事するのと同じ。
                  <strong>設計図（Plan）を確認 → OK を出す → 実装開始</strong>
                  という手順を必ず守ってください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">なぜ Plan Mode が重要？</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">1.</span>
                    <span>
                      <strong>方向性のズレを防ぐ</strong> — AIが見当違いのものを作り始めると、やり直しに時間がかかる
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">2.</span>
                    <span>
                      <strong>全体像を把握できる</strong> — 何を作るのか、どんな構成になるのかを事前に確認できる
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">3.</span>
                    <span>
                      <strong>ファウンダーが判断する場</strong> — 設計段階で「これは違う」「ここを変えて」と軌道修正できる
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <StepCard number={1} title="今日のテーマを理解する">
          <p>
            今日作るのは、<strong>StartPass</strong>の
            <strong>経営シミュレーション環境</strong>です。
            事業計画・部署データ・朝礼システムをまるごとAIに構築させます。
          </p>

          <div className="bg-gray-50 rounded-lg p-5 mt-4">
            <h4 className="font-bold mb-3">作るもの</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 bg-primary text-white text-xs px-2 py-1 rounded">
                  経営ドキュメント
                </span>
                <span>
                  5カ年事業計画、市場調査（PEST/TAM/SAM/SOM）、プロダクト戦略、
                  財務モデル（P/L・MRR・ユニットエコノミクス）、GTM戦略、チーム構成
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 bg-accent text-white text-xs px-2 py-1 rounded">
                  部署データ
                </span>
                <span>
                  営業部（パイプライン・年間計画）、エンジニアリング部（タスク進捗・年間計画）、
                  マーケティング部（広告KPI・SEO・年間計画）のリアルなサンプルデータ
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 bg-success text-white text-xs px-2 py-1 rounded">
                  朝礼コマンド
                </span>
                <span>
                  CLAUDE.mdに「朝礼」と言うだけで、Mission確認
                  → 各部署の状況報告 → 今日のアクション整理が自動実行される仕組み
                </span>
              </div>
            </div>
          </div>
        </StepCard>

        {/* Step 2: Plan Mode */}
        <StepCard number={2} title="【Plan Mode】まず事業計画の構成をAIに提案させる">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-sm font-bold text-red-700 mb-1">
              ここが Plan Mode です — まだ作らせません
            </p>
            <p className="text-sm text-red-600">
              この指示では「<strong>提案して。まだ作成しないで。</strong>」と明記します。
              AIが構成案を出してくれるので、内容を確認してからOKを出します。
            </p>
          </div>

          <p>
            以下をClaude Codeにコピー＆ペーストしてください。
            <strong>AIに事業計画の「設計図」を出させます。</strong>
          </p>

          <CodeBlock label="Step 2-A: Claude Code にコピペ（Plan Mode — 設計の提案を依頼）">
            {`エージェントチームを5人作成して開始してください。
StartPass Talent Bridgeの5ヵ年事業計画書を docs/business-plan.md に作成してください。
チームは以下の5名構成とし、⑤が全体の整合性を担保してください。
①市場調査: 市場規模と競合分析
②プロダクト戦略: 機能ロードマップと差別化
③財務モデル: 5年間のP/L予測とKPI
④GTM・営業戦略: 大企業・スタートアップ双方へのアプローチ
⑤統合編集: 全体の構成と整合性チェック`}
          </CodeBlock>

          <TipBox type="warning">
            <p>
              <strong>ここで必ず立ち止まってください。</strong>
              AIが提案した構成案を読んで、以下を確認しましょう：
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>・セクションの構成は適切か？ 追加・削除したいものはないか？</li>
              <li>・各セクションの方向性は合っているか？</li>
              <li>・自分のビジネスに合わない部分はないか？</li>
            </ul>
          </TipBox>

          <p className="font-medium mt-4 mb-2">
            構成案に納得したら → 作成を指示する
          </p>
          <p className="text-sm text-text-secondary mb-3">
            修正したい部分があれば、この段階で伝えてください。
            問題なければ、以下で作成GOを出します。
          </p>

          <CodeBlock label="Step 2-B: 構成案OKなら → 作成を指示">
            {`この構成でOK。提案されたディレクトリ構造で全ファイルをMarkdownで作成して。`}
          </CodeBlock>

          <TipBox>
            <p>
              Claude Code がファイルを作成する許可を求めてきたら
              「<strong>Yes</strong>」を押してください。今日は全て許可してOKです。
            </p>
          </TipBox>

          <p className="text-text-secondary text-sm mt-2">
            数十秒〜1分ほどで、AIが事業計画書を自動生成してくれます。
            構成案で確認済みなので、大きくズレることはありません。
          </p>
        </StepCard>

        {/* Step 3 */}
        <StepCard number={3} title="ファウンダーの目で検証・修正する">
          <p>
            ここからが本番です。<strong>AIが出した事業計画書は&quot;それっぽい&quot;けれど、本当に妥当か？</strong>
            ファウンダーの皆さんの目で叩いてください。
          </p>

          <div className="bg-step-bg rounded-lg p-5 mt-4">
            <h4 className="font-bold mb-3">検証すべきポイント</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">&#10003;</span>
                <span>
                  <strong>財務モデルの数字は妥当か？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    MRR推移は現実的？ LTV/CACの比率は健全？ 資金調達のタイミングは？
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">&#10003;</span>
                <span>
                  <strong>市場規模（TAM/SAM/SOM）は根拠があるか？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    ボトムアップで計算し直すと妥当？ 競合の見落としはないか？
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">&#10003;</span>
                <span>
                  <strong>営業パイプラインはリアルか？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    成約率の想定は甘くないか？ ファネルの転換率は実績ベースで検証できるか？
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">&#10003;</span>
                <span>
                  <strong>5ヵ年ロードマップは現実的か？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    Year1の目標は達成可能？ 組織拡大のペースは適切？
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">&#10003;</span>
                <span>
                  <strong>部署間の整合性は取れているか？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    営業目標とマーケのリード目標は連動している？ 開発ロードマップと営業計画のタイミングは合っている？
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <p className="font-medium mb-2">修正の仕方</p>
            <p className="text-sm text-text-secondary mb-3">
              修正したい点があれば、Claude Codeに<strong>日本語でそのまま指示</strong>するだけです。
              例：
            </p>
            <CodeBlock label="修正指示の例（アレンジしてOK）">
              {`以下の修正を加えて:

- 財務モデルのYear1 ARRを3,000万円に下方修正して。
  初年度は PMF検証に集中するので、売上より
  チャーンレートとNPSを重視する方針に変更。

- 営業パイプラインにVC経由のリファラル案件を3件追加して。
  JAFCO、Coral Capital、ANRIの投資先を想定。

- エンジニアリング部のQ2計画にAI機能のPOCを前倒しで追加して。
  Claude APIを使った経営アドバイザー機能を早期に検証したい。

- 朝礼フローに「今週の数字ハイライト」を追加して。
  MRR、新規リード数、スプリント完了率の3指標を冒頭で報告する形に。`}
            </CodeBlock>
          </div>

          <TipBox type="info">
            <p>
              <strong>正解はありません。</strong>あなたの業界経験や市場感覚に基づいて、
              自由に修正してください。AIは叩き台を作るのが得意ですが、
              「この数字は本当に妥当か？」を判断できるのはファウンダーだけです。
            </p>
          </TipBox>
        </StepCard>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            AI時代のファウンダーの役割
          </h2>
          <div className="max-w-xl mx-auto space-y-4 text-lg">
            <p>
              AIが得意なのは「<strong>実装</strong>」と「<strong>構造化</strong>」
            </p>
            <p>
              人間が担うべきは「<strong>判断</strong>」と「<strong>ビジョン</strong>」
            </p>
            <div className="border-t border-white/20 pt-4 mt-4">
              <p className="text-xl font-bold">
                AIに作らせて、ファウンダーが判断する。
              </p>
            </div>
          </div>
        </div>

        {/* Next */}
        <div className="flex justify-between pt-4">
          <Link
            href="/setup"
            className="inline-block border border-gray-300 text-text-secondary px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            &larr; 事前準備
          </Link>
          <Link
            href="/mvp"
            className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            次へ：MVP構築ガイド &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
