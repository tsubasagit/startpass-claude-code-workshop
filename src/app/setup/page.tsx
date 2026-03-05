import {
  StepCard,
  CodeBlock,
  TipBox,
  PageHeader,
} from "@/components/StepCard";
import Link from "next/link";

export default function SetupPage() {
  return (
    <>
      <PageHeader
        title="事前準備ガイド"
        subtitle="当日までにお済ませください。所要時間: 約15〜30分"
        badge="最初にお読みください"
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Overview */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">準備するもの（全3つ）</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: 1,
                name: "Node.js",
                desc: "JavaScriptを動かすためのソフトウェア",
              },
              {
                num: 2,
                name: "Claude Code",
                desc: "AIに指示を出すためのツール",
              },
              {
                num: 3,
                name: "GitHub アカウント",
                desc: "コードを保存・公開するためのサービス",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-step-bg rounded-lg p-4 text-center"
              >
                <span className="inline-block w-8 h-8 rounded-full bg-primary text-white font-bold text-sm leading-8 mb-2">
                  {item.num}
                </span>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-xs text-text-secondary mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step 0: Terminal */}
        <StepCard number={0} title="ターミナル（コマンド入力画面）の開き方">
          <p>
            まず「<strong>ターミナル</strong>」を開きましょう。ターミナルとは、文字を入力してパソコンに指示を出す画面のことです。
          </p>
          <p className="text-text-secondary">
            普段みなさんがマウスでフォルダを開いたり、ファイルをダブルクリックしたりしていること——
            それを「文字」で行う画面です。怖いものではありません。
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="font-bold mb-3 text-primary">
                Mac の場合
              </h4>
              <ol className="space-y-2 text-sm">
                <li>
                  <span className="font-medium">1.</span>{" "}
                  <code className="bg-gray-200 px-2 py-0.5 rounded text-sm">
                    Command + Space
                  </code>{" "}
                  キーを押す
                </li>
                <li>
                  <span className="font-medium">2.</span>{" "}
                  「ターミナル」と入力する
                </li>
                <li>
                  <span className="font-medium">3.</span> Enter キーを押す
                </li>
              </ol>
              <p className="text-xs text-text-secondary mt-3">
                黒い画面が開けばOKです
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="font-bold mb-3 text-info">
                Windows の場合
              </h4>
              <ol className="space-y-2 text-sm">
                <li>
                  <span className="font-medium">1.</span>{" "}
                  スタートメニューをクリック
                </li>
                <li>
                  <span className="font-medium">2.</span>{" "}
                  「PowerShell」と検索する
                </li>
                <li>
                  <span className="font-medium">3.</span>{" "}
                  「Windows PowerShell」をクリック
                </li>
              </ol>
              <p className="text-xs text-text-secondary mt-3">
                青い画面が開けばOKです
              </p>
            </div>
          </div>

          <TipBox>
            <p>
              この画面を「ターミナル」「コマンドライン」「コンソール」など呼びますが、
              すべて同じものです。当日はこの画面を使って進めます。
            </p>
          </TipBox>
        </StepCard>

        {/* Step 1: Node.js */}
        <StepCard number={1} title="Node.js をインストールする">
          <p>
            <strong>Node.js</strong>（ノード・ジェイエス）は、
            Webアプリケーションを動かすために必要なソフトウェアです。
            今回作るマッチングサイトを動かすのに使います。
          </p>

          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold mb-3">インストール手順</h4>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <span>
                  以下のURLをブラウザで開きます：
                  <br />
                  <a
                    href="https://nodejs.org/ja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info hover:underline font-medium"
                  >
                    https://nodejs.org/ja
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <span>
                  緑色の「<strong>LTS 推奨版</strong>」ボタンをクリックしてダウンロード
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  3
                </span>
                <span>
                  ダウンロードしたファイルを開いて、「次へ」「次へ」とクリックしてインストール
                  <br />
                  <span className="text-text-secondary text-sm">
                    （設定はすべてデフォルトのままでOKです）
                  </span>
                </span>
              </li>
            </ol>
          </div>

          <div className="mt-4">
            <p className="font-medium mb-2">
              インストールできたか確認しましょう
            </p>
            <p className="text-sm text-text-secondary mb-2">
              ターミナルを開いて、以下を入力して Enter を押してください：
            </p>
            <CodeBlock label="ターミナルに入力">{`node -v`}</CodeBlock>
            <p className="text-sm text-text-secondary mt-2">
              <code className="bg-gray-100 px-1.5 py-0.5 rounded">
                v18.x.x
              </code>{" "}
              や{" "}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded">
                v20.x.x
              </code>{" "}
              のようにバージョン番号が表示されればOKです。
            </p>
          </div>

          <TipBox type="warning">
            <p>
              「command not found」と表示された場合は、ターミナルを一度閉じてから再度開いて試してください。
              それでもダメな場合は、パソコンを再起動してみてください。
            </p>
          </TipBox>
        </StepCard>

        {/* Step 2: Claude Code */}
        <StepCard number={2} title="Claude Code をインストールする">
          <p>
            <strong>Claude Code</strong>（クロード・コード）は、
            AIに日本語で指示を出して、コードやドキュメントを作ってもらうツールです。
            今日のメインで使うツールです。
          </p>

          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold mb-3">インストール手順</h4>
            <p className="text-sm text-text-secondary mb-3">
              ターミナルに以下のコマンドをコピー＆ペーストして、Enter を押してください。
            </p>
            <CodeBlock label="ターミナルに入力（コピペしてOK）">
              {`npm install -g @anthropic-ai/claude-code`}
            </CodeBlock>
            <p className="text-sm text-text-secondary mt-3">
              しばらく待つとインストールが完了します（1〜2分程度）。
            </p>
          </div>

          <div className="mt-4">
            <p className="font-medium mb-2">確認しましょう</p>
            <CodeBlock label="ターミナルに入力">{`claude --version`}</CodeBlock>
            <p className="text-sm text-text-secondary mt-2">
              バージョン番号が表示されればインストール成功です。
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 mt-4">
            <h4 className="font-bold mb-3">Claude Code の認証（ログイン）</h4>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <span>
                  ターミナルで{" "}
                  <code className="bg-gray-200 px-2 py-0.5 rounded">
                    claude
                  </code>{" "}
                  と入力して Enter
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <span>
                  ブラウザが自動で開くので、Anthropicアカウントでログイン
                  <br />
                  <span className="text-text-secondary">
                    （アカウントがない場合は新規作成できます）
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  3
                </span>
                <span>
                  ターミナルに戻ると{" "}
                  <code className="bg-gray-200 px-2 py-0.5 rounded">&gt;</code>{" "}
                  マークが表示される → 準備完了！
                </span>
              </li>
            </ol>
          </div>

          <TipBox type="info">
            <p>
              Claude Code を使うには <strong>Claude Max</strong>（月額$100〜）または
              Anthropic APIキーが必要です。
              法人で一括手配する場合は、講師からAPIキーを配布します。
            </p>
          </TipBox>

          <TipBox type="warning">
            <p>
              <strong>Macで「permission denied」エラーが出た場合：</strong>
              <br />
              <code className="bg-gray-200 px-2 py-0.5 rounded text-sm">
                sudo npm install -g @anthropic-ai/claude-code
              </code>
              と入力してください（パスワードを求められたらPCのパスワードを入力）。
            </p>
            <p className="mt-2">
              <strong>Windowsで権限エラーが出た場合：</strong>
              <br />
              PowerShell を「管理者として実行」して再度お試しください。
            </p>
          </TipBox>
        </StepCard>

        {/* Step 3: GitHub */}
        <StepCard number={3} title="GitHub アカウントを作成する">
          <p>
            <strong>GitHub</strong>（ギットハブ）は、プログラムのコードを保存・共有するサービスです。
            今回は、作ったマッチングサイトをインターネットに公開するのに使います。
          </p>

          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold mb-3">アカウント作成手順</h4>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <span>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info hover:underline font-medium"
                  >
                    https://github.com
                  </a>{" "}
                  にアクセス
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <span>
                  「Sign up」ボタンをクリックして、メールアドレス・パスワードを設定
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  3
                </span>
                <span>
                  メールに届く認証コードを入力して完了
                </span>
              </li>
            </ol>
          </div>

          <div className="mt-4">
            <p className="font-medium mb-2">
              Git の初期設定（ターミナルで実行）
            </p>
            <p className="text-sm text-text-secondary mb-2">
              以下の2行を、<strong>ご自身の名前とメールアドレスに変えて</strong>実行してください：
            </p>
            <CodeBlock label="ターミナルに入力（名前とメールを変更してください）">
              {`git config --global user.name "あなたの名前"
git config --global user.email "あなた@example.com"`}
            </CodeBlock>
          </div>

          <TipBox>
            <p>
              すでにGitHubアカウントをお持ちの方は、この手順はスキップしてOKです。
            </p>
          </TipBox>
        </StepCard>

        {/* Checklist */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6 text-center">
            事前準備チェックリスト
          </h2>
          <p className="text-text-secondary text-center mb-6">
            以下のコマンドをターミナルで実行して、すべてバージョン番号が表示されれば準備完了です。
          </p>
          <CodeBlock label="3つすべて確認してください">
            {`node -v          # → v18.x.x 以上が表示される
claude --version # → バージョン番号が表示される
git --version    # → git version 2.x.x が表示される`}
          </CodeBlock>

          <div className="mt-6 bg-tip-bg rounded-lg p-5 text-center">
            <p className="font-bold text-lg mb-2">
              3つすべてバージョン番号が表示されましたか？
            </p>
            <p className="text-text-secondary">
              おめでとうございます！ 事前準備は完了です。当日をお楽しみに！
            </p>
          </div>
        </div>

        {/* Trouble */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6">
            困ったときは
          </h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-bold mb-1">
                Q. ターミナルの開き方がわかりません
              </h4>
              <p className="text-sm text-text-secondary">
                Mac: Command + Space → 「ターミナル」と入力 / Windows:
                スタートメニュー → 「PowerShell」で検索
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold mb-1">
                Q. 「command not found」と表示されます
              </h4>
              <p className="text-sm text-text-secondary">
                ターミナルを一度閉じて再度開いてください。
                それでもダメな場合はパソコンを再起動してください。
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold mb-1">
                Q. インストールがうまくいきません
              </h4>
              <p className="text-sm text-text-secondary">
                当日30分前（17:30）から会場を開放しますので、直接サポートいたします。
                お気軽にお越しください。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1">
                Q. パソコンを持っていないのですが参加できますか？
              </h4>
              <p className="text-sm text-text-secondary">
                講師の画面を見ながら一緒に体験していただけます。
                可能であればノートPCをお持ちいただくのがベストです。
              </p>
            </div>
          </div>
        </div>

        {/* Next */}
        <div className="text-center pt-4">
          <Link
            href="/business-plan"
            className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            次へ：5ヵ年事業計画の作り方 &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
