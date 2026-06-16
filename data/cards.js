const CARD_DATA = {
    tech: {
        label: '技術修正',
        cards: [
            {
                navLabel: '防禦',
                colorClass: 'card-defense',
                title: '防禦接殺卡',
                subtitle: '穩如泰山，借力反擊',
                rules: [
                    { tag: 'Rhythm',  text: '節奏同步：咚(殺)－咚(防)', desc: '聽球聲對準同步律，不要搶拍也不要慢。' },
                    { tag: 'Posture', text: '動態重心：拒絕死蹲',       desc: '腳跟微浮，保持隨時向前的推力與彈性。' },
                    { tag: 'Counter', text: '回抽心法：借力推擋',       desc: '不發蠻力；球低則仰角調整，平推送過網。' },
                    { tag: 'Lift',    text: '回挑加力：額外引導',       desc: '借不到力時，手腕與小臂必須額外向上引導。' },
                ]
            },
            {
                navLabel: '網前',
                colorClass: 'card-net',
                title: '搓撥撲網卡',
                subtitle: '搶佔高點，先發制人',
                rules: [
                    { tag: 'Timing',   text: '黃金二拍：觸球即撲',       desc: '對手觸球「一」，高點撲擊「二」。瞬息萬變。' },
                    { tag: 'Position', text: '侵略站位：發球即進',       desc: '腳步即刻前踏，拍子前伸，極大化攔截區。' },
                    { tag: 'Mindset',  text: '關鍵意識：網前是搶下來的', desc: '不要等球過來，要在球過網前主動迎擊。' },
                ]
            },
            {
                navLabel: '連貫',
                colorClass: 'card-attack',
                title: '殺球連貫卡',
                subtitle: '節奏壓制，心靈獵殺',
                rules: [
                    { tag: 'Flow',    text: '連貫壓迫：嚴格執行循環', desc: '用穩定的「殺－防」頻率徹底摧毀對方防線。' },
                    { tag: 'Tactics', text: '心理博弈：獵殺紊亂',   desc: '對方節奏不對時，閉眼憑直覺「抓」住空檔。' },
                    { tag: 'Focus',   text: '致命威脅：節奏大於力量', desc: '節奏對了普通殺球也致命；亂了重殺也是浪費。' },
                ]
            }
        ]
    },
    power: {
        label: '力量傳遞',
        cards: [
            {
                navLabel: '發力',
                colorClass: 'card-drive',
                title: '單腳發力卡',
                subtitle: '腳帶身體，重心先動',
                chain: { nodes: ['腳', '髖', '軀幹', '手'], active: [0] },
                rules: [
                    { tag: 'Motion', text: '單腳橫向一跳', desc: '以單腳做橫向的一次跳躍，模擬殺球瞬間身體被帶動的軌跡，不是手在動，是腳在推。' },
                    { tag: 'Feel',   text: '感受腳部發力', desc: '蹬地瞬間去感覺力量從腳掌出來，沿著腿往上傳，帶著重心往側邊移過去。' },
                    { tag: 'Check',  text: '腳是力量起點', desc: '確認移動是從腳的蹬伸出發、再帶動重心，不是只靠上半身硬撐——根穩了，後面的力才接得上。' },
                ]
            },
            {
                navLabel: '轉身',
                colorClass: 'card-rotate',
                title: '轉身跳越卡',
                subtitle: '擊球瞬間，身體轉正',
                chain: { nodes: ['腳', '髖', '軀幹', '手'], active: [1, 2] },
                rules: [
                    { tag: 'Add-on', text: '加入轉身移動', desc: '卡片一的橫跳順暢後，把跳躍加上轉身，讓腳的發力同時帶動髖與軀幹一起旋轉。' },
                    { tag: 'Key',    text: '擊球瞬間轉正', desc: '要領是擊球那一刻身體剛好轉成正面朝前——轉體在空中、擊球當下完成，落地只是收勢，不是落地才喬。' },
                    { tag: 'Chain',  text: '力量不中斷',   desc: '腳→髖→軀幹的旋轉要連續，轉身只是把橫向的力導成出拍的力，過程中不停頓。' },
                ]
            },
            {
                navLabel: '收尾',
                colorClass: 'card-snap',
                title: '手臂收尾卡',
                subtitle: '力到手指，鞭打出球',
                chain: { nodes: ['腳', '髖', '軀幹', '手'], active: [3] },
                rules: [
                    { tag: 'Relay', text: '大臂帶小臂',   desc: '接續卡片二轉正的軀幹力量，由大臂先甩出、再帶動小臂，力量一棒接一棒往末端送，手臂全程放鬆不僵。' },
                    { tag: 'Whip',  text: '小臂內旋鞭打', desc: '擊球瞬間小臂快速內旋（旋前），像甩鞭子一樣把速度集中到拍頭，這是整條力量鏈的加速段。' },
                    { tag: 'Snap',  text: '手指最後扣壓', desc: '觸球那一刻手指瞬間握緊扣壓，把傳上來的力一次釋放——手指是出口，鬆握到緊握的落差就是球速。' },
                ]
            }
        ]
    }
};
