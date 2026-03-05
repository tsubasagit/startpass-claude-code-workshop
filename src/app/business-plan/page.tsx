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

        {/* Step 1 */}
        <StepCard number={1} title="今日のテーマを理解する">
          <p>
            今日作るのは「<strong>StartPass Talent Bridge</strong>」という、
            大企業のプロフェッショナル人材とスタートアップをつなぐマッチングプラットフォームです。
          </p>

          <div className="bg-gray-50 rounded-lg p-5 mt-4">
            <h4 className="font-bold mb-3">背景</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 bg-primary text-white text-xs px-2 py-1 rounded">
                  大企業
                </span>
                <span>
                  副業解禁の流れ。社員のキャリア多様化、オープンイノベーションを推進したいが、
                  適切なマッチング先がない
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 bg-accent text-white text-xs px-2 py-1 rounded">
                  スタートアップ
                </span>
                <span>
                  正社員採用に時間がかかるが、経験豊富な人材が今すぐ必要。
                  CFO・CTO・CMO等のCxOレベルの知見がほしい
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 bg-success text-white text-xs px-2 py-1 rounded">
                  StartPass
                </span>
                <span>
                  経営者ネットワークを活かして、両者を橋渡しする
                </span>
              </div>
            </div>
          </div>
        </StepCard>

        {/* Step 2 */}
        <StepCard number={2} title="AIに事業計画書を作らせる">
          <p>
            以下のテキストを<strong>そのままClaude Codeにコピー＆ペースト</strong>してください。
            AIが自動で事業計画書を作成してくれます。
          </p>

          <CodeBlock label="Claude Code にコピペする指示文">
            {`以下の内容で事業計画書をMarkdownで作成して、docs/business-plan.md に保存して。

■ サービス名: StartPass Talent Bridge（仮称）
■ コンセプト: 大企業のプロフェッショナル人材とスタートアップをマッチングするプラットフォーム
■ 背景:
- 大企業は副業解禁・人材流動化の流れの中で、社員のキャリア開発と外部連携を模索している
- スタートアップは正社員採用に時間がかかるが、経営・技術・マーケティングの即戦力が今すぐ必要
- StartPassの既存会員ネットワーク（上場企業経営者 × スタートアップ経営者）を活かしたマッチングが可能

以下のセクションを含めて:
1. サービス概要（一言で / 対象ユーザー / 解決する課題）
2. ターゲット（大企業側 / スタートアップ側 それぞれ）
3. ビジネスモデル（課金形態・単価）
4. MVP機能（最小限で検証すべき機能リスト）
5. 競合との差別化（Wantedly, YOUTRUST, 副業系プラットフォームとの違い）
6. 成功指標（3ヶ月後に何を達成していれば成功か）
7. 5ヵ年ロードマップ（Year1〜Year5で何を達成するか）
8. 収益シミュレーション（5年間の売上・コスト・利益の概算）`}
          </CodeBlock>

          <TipBox>
            <p>
              Claude Code がファイルを作成する許可を求めてきたら
              「<strong>Yes</strong>」を押してください。今日は全て許可してOKです。
            </p>
          </TipBox>

          <p className="text-text-secondary text-sm mt-2">
            数十秒〜1分ほどで、AIが事業計画書を自動生成してくれます。
            かなり体裁の整った事業計画書が出てくるはずです。
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
                  <strong>ビジネスモデルの数字は妥当か？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    成約課金15%は高い？安い？ 法人プラン月額10万円は適切？
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">&#10003;</span>
                <span>
                  <strong>ターゲットは適切か？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    大企業の「誰」が意思決定するのか？ 人事部？経営企画部？
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">&#10003;</span>
                <span>
                  <strong>競合優位性は本物か？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    StartPassのネットワークは本当に参入障壁になるか？
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">&#10003;</span>
                <span>
                  <strong>5ヵ年ロードマップは現実的か？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    Year1の目標は達成可能？ Year5で本当にそこまでいける？
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success font-bold">&#10003;</span>
                <span>
                  <strong>見落としているリスクはないか？</strong>
                  <br />
                  <span className="text-sm text-text-secondary">
                    法規制？ 人材の質の担保？ 大企業の稟議プロセス？
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
              {`事業計画書に以下の修正を加えて:

- 成約課金15%は高すぎる。最初は10%に設定して参入障壁を下げる戦略に変更して。
  その代わり法人プランの月額を15万円にして安定収益を確保する方針で。

- ターゲットの大企業側に「経営企画部」も追加して。
  人事部だけでなく、オープンイノベーション推進の文脈で
  経営企画部が意思決定するケースも多い。

- 5ヵ年ロードマップのYear3に「地方展開」を追加して。
  大阪・福岡にも拠点を広げる計画にして。`}
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
