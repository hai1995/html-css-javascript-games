// 游戏列表
const games = [
    { folder: '01-Candy-Crush-Game', name: '糖果消消乐' },
    { folder: '02-Archery-Game', name: '射箭游戏' },
    { folder: '03-Speed-Typing-Game', name: '打字速度游戏' },
    { folder: '04-Breakout-Game', name: '打砖块游戏' },
    { folder: '05-Minesweeper-Game', name: '扫雷游戏' },
    { folder: '06-Tower-Blocks', name: ' tower 积木' },
    { folder: '07-Ping-Pong-Game', name: '乒乓球游戏' },
    { folder: '08-Tetris-Game', name: '俄罗斯方块' },
    { folder: '09-Tilting-Maze-Game', name: '倾斜迷宫游戏' },
    { folder: '10-Memory-Card-Game', name: '记忆卡片游戏' },
    { folder: '11-Rock-Paper-Scissors', name: '石头剪刀布' },
    { folder: '12-Type-Number-Guessing-Game', name: '猜数字游戏' },
    { folder: '13-Tic-Tac-Toe', name: '井字棋' },
    { folder: '14-Snake-Game', name: '贪吃蛇游戏' },
    { folder: '15-Connect-Four-Game', name: '四子棋' },
    { folder: '16-Insect-Catch-Game', name: '抓昆虫游戏' },
    { folder: '17-Typing-Game', name: '打字游戏' },
    { folder: '18-Hangman-Game', name: ' 刽子手游戏' },
    { folder: '19-Flappy-Bird-Game', name: ' 飞扬的小鸟' },
    { folder: '20-Crossy-Road-Game', name: ' 过马路游戏' },
    { folder: '21-2048-Game', name: '2048游戏' },
    { folder: '22-Dice-Roll-Simulator', name: ' 骰子模拟器' },
    { folder: '23-Shape-Clicker-Game', name: '形状点击游戏' },
    { folder: '24-Typing-Game', name: '打字游戏' },
    { folder: '25-Speak-Number-Guessing-Game', name: '语音猜数字游戏' },
    { folder: '26-Fruit-Slicer-Game', name: '水果切片游戏' },
    { folder: '27-Quiz-Game', name: '问答游戏' },
    { folder: '28-Emoji-Catcher-Game', name: ' 表情符号捕捉游戏' },
    { folder: '29-Whack-A-Mole-Game', name: '打地鼠游戏' },
    { folder: '30-Simon-Says-Game', name: '西蒙说游戏' }
];

// 生成游戏卡片
function generateGameCards() {
    const gameGrid = document.getElementById('gameGrid');
    
    games.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
        const gameNumber = document.createElement('div');
        gameNumber.className = 'game-number';
        gameNumber.textContent = (index + 1).toString().padStart(2, '0');
        
        const gameTitle = document.createElement('h3');
        gameTitle.className = 'game-title';
        gameTitle.textContent = game.name;
        
        const gameLink = document.createElement('a');
        gameLink.className = 'game-link';
        gameLink.href = `${game.folder}/index.html`;
        gameLink.target = '_blank';
        gameLink.textContent = '开始游戏';
        
        gameCard.appendChild(gameNumber);
        gameCard.appendChild(gameTitle);
        gameCard.appendChild(gameLink);
        
        gameGrid.appendChild(gameCard);
    });
}

// 页面加载完成后生成游戏卡片
document.addEventListener('DOMContentLoaded', generateGameCards);