// JavaScript source code
document.addEventListener('DOMContentLoaded', () => {
    // ボタンと表示エリアの要素を取得
    const randomButton = document.getElementById('randomButton');
    const randomText = document.getElementById('randomText');
    const randomText2 = document.getElementById('randomText2');

    // AAAAとBBBBの条件：列リストを定義
    const AAAA = [
        '自分のターン開始時１枚多く引いてもよい',  // 1
        '相手の手札が公開され続ける',  // 2
        '３枚まで相手のシールドを確認できる',  // 3
        '呪文のコストを２下げて使える（0以下にならない）',  // 4
        'クリーチャーのchipが２回発動する',  // 5
        '手札にあるものとして手札以外からカードが使える(コストは支払う)',  // 6
        '相手と自分は必ず攻撃しなければならない',  // 7
        '自分のマナゾーンのカード一枚の色を１つ変更してもよい',  // 8
        '手札２枚多くスタートしてもよい',  // 9
        '後ろに一人助言役を追加してもよい（もう一人のボク）', // 10
        '合計５コスト使用するたびにGR召喚', // 11
        'デッキ外からメメントモリ神宮をコストを支払わず使用してもよい', // 12
        '全員SA付与', // 13
        '全員ブロッカー付与', // 14
        '全員スレイヤー付与', // 15
        '全員マッファファイター付与', // 16
        '全員アタックブロックされない付与', // 17
        '公開領域すべてにアビスラッシュ付与', // 18
        'クリーチャーを一つ選ぶ、そのクリーチャーはアタックした後アンタップを付与する', // 19
        'クリーチャー一つにSA,ブロッカー、スレイヤー、マッファファイター、アタックブロックされない、エターナルΩを付与', // 20
        'そのターン出てくるクリーチャーすべてにエクストライフ付与', // 21
        'カードに封印を１つ付けれる', // 22
        'ドラゴンを出したとき、ドラゴントークンを場に出す  種族ドラゴン/Pw1000/ｺｽﾄ1/零文明', // 23
        'カードを一枚選ぶ、デュエル中そのカードは場を離れない', // 24
        '山札の上を一枚めくる、そのカードと同じコストで同じ色のマナのプレミアム殿堂カードor殿堂カードを一つ使ってもよい(コストは支払う)', // 25
        'バトルゾーンにあるクリーチャーを一体選ぶ、そのクリーチャーがバトルゾーンにいる限り相手は出た時能力を使えない', // 26
        'カードを一つ宣言する。相手の山札の上を確認し、宣言したカードと同じならデュエルに勝利する', // 27
        'お互いシールドを３つ選択する。残りのシールドを墓地に置く', // 28
        '自分のクリーチャー一体選ぶ。そのクリーチャーを鬼S-MAX進化にする', // 29
        'お互い山札を上下入れ替えてデュエルする（山下はデッキトップになる。ドローは上から引く）', // 30
        '相手がドロー以外で手札にカードを加えた時、手札を見ないで一枚裏側で超次元ゾーンに送る', // 31
        'パワーの数値の0を消す。（例12000→12=パワー12）', // 32
        '進化元を相手のバトルゾーンから選んでもよい', // 33
        '墓地からクリーチャーを一体出してもよい', // 34
        '超次元ゾーンからカードを出すとき、条件を無視して裏側で出してもよい（３D龍解するカードはクリーチャーとして出してもよい）', // 35
        '相手の手札とシールドを入れ替えてもよい', // 36
        '超次元ゾーンのカードをコストを支払って使ってもよい', // 37
        'コストを支払って墓地から呪文を唱えてもよい', // 38
        'デュエルに勝利すると書かれたカードをデッキから手札にすべて加えてもよい（加えた後シャッフルする）', // 39
        '相手を変えてもよい', // 40
        'シールドをデッキから選んでもよい（選んだシールドはシャッフルして置く）', // 41
        '手札をデッキから選んでもよい（シールドを置いてから選ぶ）', // 42
        '手札をデッキに加えシャッフルして5枚引いてもよい', // 43
        'ドローする効果を2倍してもよい', // 44
        'マナに置く効果を2倍してもよい', // 45
        'ドローするカードをデッキから選んでもよい（そうした場合シャッフルする）', // 46
        '5コスト以上のカードを使用したとき、ドギラゴンガチャを回す', // 47
        '相手のマナゾーンの色をそのターン火水自然光闇のどれかにする', // 48
        'そのターン手札にあるカードすべてに「革命チェンジ」を与える（色さえあればチェンジできる）', // 49
        '進化クリーチャーを出すとき、デッキから進化元を出してもよい（進化元の出た時能力も使える）', // 50
        'ぽんのすけと名の含むカードをデッキ外から使用してもよい（コストは支払う）', // 51
        'すべてのクリーチャーのブレイク数を１さげる（０は相手のシールドをブレイクできない）', // 52
        'すべてのクリーチャーのブレイク数を１あげる（０は相手のシールドをブレイクできない）', // 53
        '自分のクリーチャーのパワーをすべて+30000する（永続）', // 54
        '手札１枚とマナ１枚を入れ替えてもよい', // 55
        '手札から多色カードをマナに置いたとき、アンタップする', // 56
        'シールドを６枚にして始める', // 57
        'そのターン初めて置いたカードのマナを２にしてよい', // 58
        '山札を別のデッキにしてもよい（デュエパーティーも可）', // 59
        'じゃんけんに負けるとき、代わりにじゃんけんする', // 60
        'パーフェクトライトをコストを支払わずに使ってもよい', // 61
        '自分がゲームに負けそうなとき「うーむ負けそうじゃ」言いながら山札の上から３枚見てもよい。そうしたら自分はゲームに負ける。', // 62
        'プレイヤーが効果を省略した時、残りのターンを飛ばす', // 63
        'ゲーム開始時じゃんけん前に「俺の先行！ドロー！」、または「先行は貰った！俺のターンドロー！」といってもよい。そうしたら開始時ワンドローして先行を取る', // 64
        '自分はシールドを表向きにしてデュエルする。表向きのシールドにあるカードを手札として使ってもよい。',  // 65
        '使用するマナの数を１少なくする', // 66
        '手札を１枚捨てて、山札から手札に加える効果を無効にできる。' ,//67
        'このターン、自分の手札のカード１枚に革命0トリガーを与える（山札をめくり、そのカードと同じ種類のカードなら使用できる。クリーチャーなら進化扱いで出す。呪文なら唱える。それ以外ならめくったカードを山札に戻し、使用する。）' ,//68
        'このターン多色カードはアンタップしてマナゾーンに置くことができ、単色カードはタップしてマナゾーンに置く。' ,//69
        'デュエル開始時、相手の山札の上をめくる。そのカードのコストよりシールドが多ければ、その差だけシールドを追加する。少なければその差だけ山札の下に置く。手札も同様に行う', //70
        'デュエルに負けそうな時「地震だ！」と叫びカードをかたずける。その後、デッキをシャッフルしシールドを５枚追加、手札を５枚にして何食わぬ顔で始めた場合、自分のターンになる。', //71
        'クリーチャーを好きな数破壊する。こうして破壊した数GR召喚を行う。', // 72
        'クリーチャーを最大３体選ぶ、選んだクリーチャーをゴッドリンクさせる。', // 73
        'お互い山札を３枚めくりチンチロを行う。役がない場合、あと２回まで同様に行う。勝ったプレイヤーは4枚までマナに置くか、5枚までドローするか、6枚まで相手の手札、マナ、シールドを墓地に置く。', // 74
        '手札をすべて山札の下に置きマナゾーンをタップする。そうしたらゲーム外から「拳の頂　デシブコ・グーチーパ」をコストを支払ったものとして召喚する。', // 75
        'お互いはシールドをブレイクするとき、代わりに自分のシールドをブレイクする。お互いは自分自身のシールドが０枚になったときデュエルに勝利する。', // 76
        'コイントスを行う、表だった場合相手の場にあるカード１枚の効果を、次の自分のターン終了時まで無くす。裏だった場合自分のマナ１枚を相手に選ばせ、選んだカードを山札の下に置く。', // 77
        '相手のクリーチャーが出るとき、タップしてもよい。', // 78
        '相手と自分は能力を再抽選する。（デュエル開始時の効果が出た場合、再度抽選を行う）', // 79
        '相手の能力を自分の能力にする。そうした場合、相手は能力を再抽選する。（デュエル開始時の効果が出た場合、再度抽選を行う）',// 80
        '自分ゲームに負けるとき、残りのターンを飛ばし自分のターンを開始する。そのターン内に勝てなかった場合、自分はゲームに負ける。',// 81
        'マナを払うとき、手札を好きな数超次元ゾーンに置くことができる。そうした枚数分コストを１少なくする。',// 82
        '合計9マナ支払って手札マナからクリーチャー３体選び横に向け並べて召喚する。名前は使用したクリーチャーの名前をつなげて呼ぶ。パワーは使用したカードの合計になり、ワールドブレイカー、EEXライフを持つ。',// 83
        '相手がターンを飛ばす効果が発動し、相手ターンになるとき、ターンを飛ばし返す。',// 84
        'ゲーム開始時、お互いはマナゾーンにカードを１０枚アンタップで追加して初める。',// 85
        'このターン、文明を失う',// 86
    　　'デュエル開始時、カード名を１つ宣言する。その宣言したカード４枚と殿堂カード１枚が手札にそろった時、デュエルに勝利する。',// 87
    　　'場にあるカードをすべて手札に戻す',// 88
    　　'相手ターン中、相手の利き手が机に触れたときターンを飛ばす。',// 89
    　　'お互い墓地のカードにムゲンクライム2を付与する。（色は付与したクリーチャーと同じ色を払う）',// 90
        '能力を使用したターン、自分のシールドすべてにシールドトリガーを与える。',// 91
        '能力を使用したターン、自分のシールドすべてにGS（ガードストライク）を与える。',// 92
        '山札の上から裏向きで一枚頭の上に置く。そのカードが机の上に落ちた時、表向きならコストを支払ったものとして使用してもよい',// 93
        '自分はマナゾーンのカードを１枚タップしてカードを１枚引いてもよい',// 94
        'カード名を１つ宣言する。そのカードの下に書かれてある数字と左上に書かれている数字を入れ替えてもよい',// 95
        '手札にあるクリーチャーにBADを付与する。（BAD:2コスト下げて使用してもよい、こうして召喚したクリーチャーはターン終了時に破壊される)',// 96
        'スマホの通知を相手に見せる。その通知の数までドローできる。',// 97
        '自分のクリーチャーがシールドをブレイクするとき、代わりに１枚墓地に置きそのクリーチャーを破壊する。',// 98
        '手札、シールドを合計１０枚好きな数割り振ってデュエルを開始する。',// 99
        'あたり！とりあえずこのデュエルは自分が勝利したことになる。'// 100
    ];

    const BBBB = [
        '条件：デュエル中一回',  // 1
        '条件：常時',  // 2
        '条件：デュエル中一回',  // 3
        '条件：一ターンに一回',  // 4
        '条件：一ターンに一回',  // 5
        '条件：デュエル中一回',  // 6
        '条件：常時',  // 7
        '条件：好きなタイミング、一ターンに一回',  // 8
        '条件：開始時',  // 9
        '条件：いつでも', // 10
        '条件：開始時＋いつでも', // 11
        '条件：ターン開始時', // 12
        '条件：デュエル中一回', // 13
        '条件：デュエル中一回', // 14
        '条件：デュエル中一回', // 15
        '条件：デュエル中一回', // 16
        '条件：デュエル中一回', // 17
        '条件：デュエル中一回', // 18
        '条件：デュエル中一回', // 19
        '条件：デュエル中一回', // 20
        '条件：デュエル中一回', // 21
        '条件：デュエル中一回', // 22
        '条件：ドラゴンを出したとき', // 23
        '条件：デュエル中一回', // 24
        '条件：デュエル中一回', // 25
        '条件：５ターン目以降、いつでも', // 26
        '条件：デュエル中一回、いつでも', // 27
        '条件：デュエル中一回', // 28
        '条件：デュエル中一回', // 29
        '条件：一ターンに一回', // 30
        '条件：開始時',  // 65
        '条件：常時', // 31
        '条件：一ターンに一回', // 32
        '条件：デュエル中一回', // 33
        '条件：いつでも', // 34
        '条件：デュエル中一回', // 35
        '条件：いつでも', // 36
        '条件：一ターンに一回', // 37
        '条件：デュエル中一回', // 38
        '条件：いつでも', // 39
        '条件：デュエル開始時', // 40
        '条件：デュエル開始時', // 41
        '条件：デュエル開始時', // 42
        '条件：デュエル中一回', // 43
        '条件：デュエル中一回', // 44
        '条件：デュエル中一回', // 45
        '条件：5コスト以上のカードを使用', // 46
        '条件：デュエル中一回', // 47
        '条件：デュエル中一回', // 48
        '条件：デュエル中一回', // 49
        '条件：いつでも', // 50
        '条件：常時', // 51
        '条件：常時', // 52
        '条件：常時', // 53
        '条件：デュエル中一回', // 54
        '条件：常時', // 55
        '条件：ゲーム開始時', // 56
        '条件：デュエル中一回', // 57
        '条件：デュエル中一回、いつでも', // 58
        '条件：いつでも、デュエル中一回', // 59
        '条件：デュエル中一回', // 60
        '条件：自分がゲームに負けそうなとき（主観）', // 61
        '条件：いつでも', // 62
        '条件：ゲーム開始時', // 63
        '条件：いつでも', // 64
        '条件：デュエル中一回(このターン中）', // 66
        '条件：好きなタイミング、デュエル中一回' ,// 67
        '条件：デュエル中一回', // 68
        '条件：デュエル中二回', // 69
        '条件：デュエル開始時', // 70
        '条件：デュエル中一回', // 71
        '条件：デュエル中一回', // 72
        '条件：デュエル中一回', // 73
        '条件：デュエル中一回', // 74
        '条件：デュエル中一回', // 75
        '条件：常時', // 76
        '条件：１ターンに一回', // 77
        '条件：１ターンに一回', // 78
        '条件：１ターンに一回', // 79
        '条件：デュエル中一回', // 80
        '条件：デュエル中一回', // 81
        '条件：１ターンに一回', // 82
        '条件：デュエル中一回', // 83
        '条件：１ターンに一回', // 84
        '条件：デュエル開始時' ,// 85
        '条件：デュエル中一回、好きなタイミング', // 86
        '条件：デュエル開始時、そろった時' ,// 87
        '条件：デュエル中一回', // 88
        '条件：常時', // 89
        '条件：１ターンに一回', // 90
        '条件：デュエル中一回', // 91
        '条件：デュエル中一回', // 92
        '条件：１ターンに一回', // 93
        '条件：常時', // 94
        '条件：デュエル中一回、使用したターンのみ', // 95
        '条件：デュエル中一回', // 96
        '条件：デュエル中一回', // 97
        '条件：デュエル中一回', // 98
        '条件：デュエル開始時', // 99
        '条件：今だよ！おめでとう！' // 100
    ];

    // ボタンがクリックされたときの処理を定義
    randomButton.addEventListener('click', () => {
        // ランダムなインデックスを生成
        const randomIndex = Math.floor(Math.random() * AAAA.length);
        // ランダムに選ばれたインデックスの条件：列を表示エリアに設定
        randomText.textContent = AAAA[randomIndex];
        randomText2.textContent = BBBB[randomIndex];
    });
});
