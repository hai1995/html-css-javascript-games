// ==================== 游戏数据 ====================
const gamesData = [
    {
        id: '01-Candy-Crush-Game',
        title: '糖果消消乐',
        description: '经典的三消游戏，交换彩色糖果创建匹配，清除关卡获得高分！',
        category: 'puzzle',
        icon: '🍭',
        emoji: '🍬',
        difficulty: '简单',
        time: '5-10分钟'
    },
    {
        id: '02-Archery-Game',
        title: '射箭大师',
        description: '测试你的瞄准技巧，精准和时机是命中靶心的关键！',
        category: 'action',
        icon: '🏹',
        emoji: '🎯',
        difficulty: '中等',
        time: '3-5分钟'
    },
    {
        id: '03-Speed-Typing-Game',
        title: '极速打字',
        description: '在时间压力下快速准确地打字，提升你的打字速度！',
        category: 'puzzle',
        icon: '⌨️',
        emoji: '💬',
        difficulty: '中等',
        time: '2-5分钟'
    },
    {
        id: '04-Breakout-Game',
        title: '打砖块',
        description: '使用挡板反弹球打破砖块，重温街机经典！',
        category: 'classic',
        icon: '🎮',
        emoji: '🧱',
        difficulty: '简单',
        time: '5-10分钟'
    },
    {
        id: '05-Minesweeper-Game',
        title: '扫雷专家',
        description: '运用逻辑思维避开隐藏地雷，揭开安全区域！',
        category: 'puzzle',
        icon: '💣',
        emoji: '🧩',
        difficulty: '困难',
        time: '10-20分钟'
    },
    {
        id: '06-Tower-Blocks',
        title: '堆叠高楼',
        description: '堆叠方块建造高塔，挑战物理平衡极限！',
        category: 'action',
        icon: '🏗️',
        emoji: '🏢',
        difficulty: '中等',
        time: '3-8分钟'
    },
    {
        id: '07-Ping-Pong-Game',
        title: '乒乓球对决',
        description: '与AI对手一较高下，体验乒乓球的速度与激情！',
        category: 'classic',
        icon: '🏓',
        emoji: '🏆',
        difficulty: '中等',
        time: '5-10分钟'
    },
    {
        id: '08-Tetris-Game',
        title: '俄罗斯方块',
        description: '排列下落的方块创造完整线条，经典益智游戏！',
        category: 'classic',
        icon: '🧱',
        emoji: '🎯',
        difficulty: '中等',
        time: '10-30分钟'
    },
    {
        id: '09-Tilting-Maze-Game',
        title: '倾斜迷宫',
        description: '通过倾斜控制小球穿越迷宫，避开陷阱到达终点！',
        category: 'puzzle',
        icon: '🌀',
        emoji: '🎱',
        difficulty: '困难',
        time: '5-15分钟'
    },
    {
        id: '10-Memory-Card-Game',
        title: '记忆翻牌',
        description: '测试你的记忆力，找出所有匹配的卡片对！',
        category: 'puzzle',
        icon: '🃏',
        emoji: '🧠',
        difficulty: '简单',
        time: '3-8分钟'
    },
    {
        id: '11-Rock-Paper-Scissors',
        title: '石头剪刀布',
        description: '与电脑对战，经典手势游戏的数字版本！',
        category: 'multiplayer',
        icon: '✂️',
        emoji: '🪨',
        difficulty: '简单',
        time: '2-5分钟'
    },
    {
        id: '12-Type-Number-Guessing-Game',
        title: '数字猜猜猜',
        description: '根据提示猜出隐藏数字，考验你的推理能力！',
        category: 'puzzle',
        icon: '🔢',
        emoji: '🤔',
        difficulty: '简单',
        time: '3-8分钟'
    },
    {
        id: '13-Tic-Tac-Toe',
        title: '井字棋对战',
        description: '在3x3格子中下棋，简单却充满策略的经典游戏！',
        category: 'multiplayer',
        icon: '⭕',
        emoji: '❌',
        difficulty: '简单',
        time: '2-5分钟'
    },
    {
        id: '14-Snake-Game',
        title: '贪吃蛇大作战',
        description: '控制不断成长的蛇吃食物，避免撞到墙壁和自己的身体！',
        category: 'classic',
        icon: '🐍',
        emoji: '🍎',
        difficulty: '中等',
        time: '5-15分钟'
    },
    {
        id: '15-Connect-Four-Game',
        title: '四子连珠',
        description: '策略性地放置棋子，率先连成四子获胜！',
        category: 'multiplayer',
        icon: '🔵',
        emoji: '🔴',
        difficulty: '中等',
        time: '5-15分钟'
    },
    {
        id: '16-Insect-Catch-Game',
        title: '昆虫快抓',
        description: '测试你的反应速度，点击随机出现的昆虫！',
        category: 'action',
        icon: '🐞',
        emoji: '🦋',
        difficulty: '简单',
        time: '2-5分钟'
    },
    {
        id: '17-Typing-Game',
        title: '打字高手',
        description: '快速准确地输入单词和句子，成为打字达人！',
        category: 'puzzle',
        icon: '⌨️',
        emoji: '💻',
        difficulty: '中等',
        time: '3-8分钟'
    },
    {
        id: '18-Hangman-Game',
        title: '猜单词游戏',
        description: '在有限的次数内猜出隐藏的单词，经典文字游戏！',
        category: 'puzzle',
        icon: '🎩',
        emoji: '🔤',
        difficulty: '中等',
        time: '5-12分钟'
    },
    {
        id: '19-Flappy-Bird-Game',
        title: '像素鸟飞行',
        description: '点击控制小鸟穿过管道间隙，挑战高分！',
        category: 'action',
        icon: '🐦',
        emoji: '🎮',
        difficulty: '困难',
        time: '2-10分钟'
    },
    {
        id: '20-Crossy-Road-Game',
        title: '过马路游戏',
        description: '帮助角色穿过马路和河流，无尽的跳跃挑战！',
        category: 'action',
        icon: '🚦',
        emoji: '🚗',
        difficulty: '中等',
        time: '3-10分钟'
    },
    {
        id: '21-2048-Game',
        title: '2048合成',
        description: '滑动数字方块合并相同数字，创造2048！',
        category: 'puzzle',
        icon: '🧩',
        emoji: '🔢',
        difficulty: '中等',
        time: '10-30分钟'
    },
    {
        id: '22-Dice-Roll-Simulator',
        title: '骰子模拟器',
        description: '虚拟掷骰子游戏，体验不同的骰子组合！',
        category: 'classic',
        icon: '🎲',
        emoji: '🎲',
        difficulty: '简单',
        time: '2-5分钟'
    },
    {
        id: '23-Shape-Clicker-Game',
        title: '图形点击',
        description: '在时间限制内点击各种图形，测试反应速度！',
        category: 'action',
        icon: '🔷',
        emoji: '🔶',
        difficulty: '简单',
        time: '2-5分钟'
    },
    {
        id: '24-Typing-Game',
        title: '极速输入',
        description: '在时间压力下输入特定单词，提升打字技能！',
        category: 'puzzle',
        icon: '⌨️',
        emoji: '⚡',
        difficulty: '中等',
        time: '3-8分钟'
    },
    {
        id: '25-Speak-Number-Guessing-Game',
        title: '语音猜数字',
        description: '通过语音猜数字，支持语音激活的猜数字游戏！',
        category: 'puzzle',
        icon: '🗣️',
        emoji: '🔢',
        difficulty: '简单',
        time: '3-8分钟'
    },
    {
        id: '26-Fruit-Slicer-Game',
        title: '水果忍者',
        description: '滑动屏幕切水果，避开炸弹，快节奏切水果游戏！',
        category: 'action',
        icon: '🍉',
        emoji: '🔪',
        difficulty: '中等',
        time: '2-8分钟'
    },
    {
        id: '27-Quiz-Game',
        title: '知识问答',
        description: '测试各种主题的知识，答对题目获得高分！',
        category: 'puzzle',
        icon: '🧠',
        emoji: '📚',
        difficulty: '中等',
        time: '5-15分钟'
    },
    {
        id: '28-Emoji-Catcher-Game',
        title: '表情捕捉',
        description: '用篮子接住掉落的表情符号，避开炸弹！',
        category: 'action',
        icon: '😄',
        emoji: '🎯',
        difficulty: '简单',
        time: '2-6分钟'
    },
    {
        id: '29-Whack-A-Mole-Game',
        title: '打地鼠',
        description: '用锤子击中随机出现的地鼠，测试反应速度！',
        category: 'action',
        icon: '🕹️',
        emoji: '🔨',
        difficulty: '简单',
        time: '2-5分钟'
    },
    {
        id: '30-Simon-Says-Game',
        title: '西蒙记忆',
        description: '跟随颜色序列并正确重复，测试记忆和速度！',
        category: 'puzzle',
        icon: '🎮',
        emoji: '💡',
        difficulty: '中等',
        time: '3-10分钟'
    }
];

// ==================== DOM 加载完成后执行 ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ==================== 应用初始化 ====================
function initializeApp() {
    createParticles();
    renderGamesGrid();
    setupEventListeners();
    initializeScrollAnimations();
    startShowcaseRotation();
    
    console.log('🎮 JS游戏厅已启动！');
}

// ==================== 创建粒子效果 ====================
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机位置
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // 随机动画延迟
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        // 随机颜色
        const colors = ['var(--primary)', 'var(--secondary)', 'var(--tertiary)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        particle.style.boxShadow = `0 0 10px ${randomColor}`;
        
        container.appendChild(particle);
    }
}

// ==================== 渲染游戏网格 ====================
function renderGamesGrid(filter = 'all') {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = '';
    
    const filteredGames = filter === 'all' 
        ? gamesData 
        : gamesData.filter(game => game.category === filter);
    
    filteredGames.forEach((game, index) => {
        const gameCard = createGameCard(game, index);
        grid.appendChild(gameCard);
    });
    
    // 添加滚动动画
    setTimeout(() => {
        const cards = grid.querySelectorAll('.game-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in-up');
            }, index * 100);
        });
    }, 100);
}

// ==================== 创建游戏卡片 ====================
function createGameCard(game, index) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    const categoryColors = {
        puzzle: 'var(--primary)',
        action: 'var(--secondary)',
        classic: 'var(--tertiary)',
        multiplayer: 'var(--accent)'
    };
    
    const categoryNames = {
        puzzle: '益智类',
        action: '动作类',
        classic: '经典类',
        multiplayer: '对战类'
    };
    
    card.innerHTML = `
        <div class="game-card-image" style="border-color: ${categoryColors[game.category]}">
            <span class="game-emoji">${game.emoji}</span>
        </div>
        <div class="game-card-content">
            <h3 class="game-card-title" style="color: ${categoryColors[game.category]}">${game.title}</h3>
            <p class="game-card-description">${game.description}</p>
            <div class="game-card-meta">
                <span class="game-category" style="background: ${categoryColors[game.category]}20; color: ${categoryColors[game.category]}">
                    ${categoryNames[game.category]}
                </span>
                <button class="game-play-btn" onclick="openGame('${game.id}', '${game.title}')">
                    开始游戏
                </button>
            </div>
            <div class="game-info" style="margin-top: 10px; display: flex; gap: 15px; font-size: 0.85rem; color: var(--text-muted);">
                <span>难度: ${game.difficulty}</span>
                <span>时长: ${game.time}</span>
            </div>
        </div>
    `;
    
    // 添加悬停效果
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = categoryColors[game.category];
        card.style.boxShadow = `0 20px 40px ${categoryColors[game.color]}30`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(0, 255, 255, 0.2)';
        card.style.boxShadow = 'none';
    });
    
    return card;
}

// ==================== 设置事件监听器 ====================
function setupEventListeners() {
    // 过滤按钮
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新活跃状态
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 过滤游戏
            const filter = btn.dataset.filter;
            renderGamesGrid(filter);
        });
    });
    
    // 模态框关闭
    const modal = document.getElementById('gameModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGameModal();
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeGameModal();
        }
    });
    
    // 导航链接平滑滚动
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== 初始化滚动动画 ====================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = [
        '.section-header',
        '.feature-card',
        '.games-section'
    ];
    
    animateElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    });
}

// ==================== 开始英雄区域卡片轮换 ====================
function startShowcaseRotation() {
    const cards = document.querySelectorAll('.showcase-card');
    let currentIndex = 0;
    
    setInterval(() => {
        // 移除当前活跃状态
        cards[currentIndex].classList.remove('active');
        
        // 更新索引
        currentIndex = (currentIndex + 1) % cards.length;
        
        // 添加新的活跃状态
        cards[currentIndex].classList.add('active');
        
        // 重新排列卡片位置
        updateShowcasePositions(currentIndex);
    }, 3000);
}

// ==================== 更新展示区卡片位置 ====================
function updateShowcasePositions(activeIndex) {
    const cards = document.querySelectorAll('.showcase-card');
    
    cards.forEach((card, index) => {
        card.classList.remove('active');
        
        if (index === activeIndex) {
            card.style.top = '0';
            card.style.left = '50%';
            card.style.transform = 'translateX(-50%)';
            card.style.zIndex = '3';
            card.style.opacity = '1';
            card.classList.add('active');
        } else if (index === (activeIndex + 1) % cards.length) {
            card.style.top = '50px';
            card.style.left = '0';
            card.style.transform = 'scale(0.9)';
            card.style.zIndex = '2';
            card.style.opacity = '0.8';
        } else {
            card.style.top = '50px';
            card.style.right = '0';
            card.style.transform = 'scale(0.9)';
            card.style.zIndex = '1';
            card.style.opacity = '0.6';
        }
    });
}

// ==================== 打开游戏 ====================
function openGame(gameId, gameTitle) {
    const modal = document.getElementById('gameModal');
    const title = document.getElementById('modalGameTitle');
    const frame = document.getElementById('gameFrame');
    
    title.textContent = gameTitle;
    frame.src = `./${gameId}/index.html`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 添加打开动画
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '1';
    }, 10);
    
    console.log(`🎮 开始游戏: ${gameTitle}`);
}

// ==================== 关闭游戏模态框 ====================
function closeGameModal() {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        frame.src = '';
        document.body.style.overflow = 'auto';
    }, 300);
}

// ==================== 滚动到游戏区域 ====================
function scrollToGames() {
    const gamesSection = document.getElementById('games');
    gamesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// ==================== 添加页面加载动画 ====================
window.addEventListener('load', () => {
    // 页面加载完成后的动画
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// ==================== 添加鼠标移动视差效果 ====================
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        if (index % 3 === 0) { // 只对部分粒子应用效果
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
});

// ==================== 添加滚动视差效果 ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#background-canvas');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// ==================== 添加键盘快捷键 ====================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 快速打开搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const firstGame = document.querySelector('.game-card');
        if (firstGame) {
            firstGame.click();
        }
    }
    
    // Ctrl/Cmd + / 显示帮助
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        showHelp();
    }
});

// ==================== 显示帮助信息 ====================
function showHelp() {
    const helpText = `
🎮 JS游戏厅 - 快捷键帮助

常用快捷键：
• ESC - 关闭游戏
• Ctrl+K - 快速开始第一个游戏
• Ctrl+/ - 显示此帮助信息

游戏分类：
• 益智类 - 需要思考和策略的游戏
• 动作类 - 快节奏的反应游戏
• 经典类 - 经典街机游戏
• 对战类 - 可以与AI或朋友对战

点击任意游戏卡片即可开始游戏！
    `;
    
    alert(helpText);
}

// ==================== 添加性能优化 ====================
// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动事件
const optimizedScroll = debounce(() => {
    // 滚动相关的性能敏感操作
}, 16); // 约60fps

window.addEventListener('scroll', optimizedScroll);

// ==================== 错误处理 ====================
window.addEventListener('error', (e) => {
    console.error('🎮 游戏厅错误:', e.error);
});

// 捕获未处理的Promise错误
window.addEventListener('unhandledrejection', (e) => {
    console.error('🎮 未处理的Promise错误:', e.reason);
});

// ==================== 导出函数供全局使用 ====================
window.openGame = openGame;
window.closeGameModal = closeGameModal;
window.scrollToGames = scrollToGames;
window.showHelp = showHelp;

console.log('🎮 JS游戏厅脚本加载完成！');
