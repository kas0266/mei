let currentLevel = 1;

// 更新关卡进度
function updateProgress() {
    document.getElementById('level').textContent = `当前关卡：${currentLevel}/4`;
}

// 检查关卡1密码
function checkLevel1() {
    const pwd = document.getElementById('pwd1').value.trim();
    const res = document.getElementById('res1');
    // 密码：上弦月=1，满月=2，下弦月=3 → 123
    if (pwd === '123') {
        res.className = 'result success';
        res.textContent = '✅ 密码正确！书房门打开了，进入下一关';
        setTimeout(() => {
            document.getElementById('level1').classList.add('hidden');
            document.getElementById('level2').classList.remove('hidden');
            currentLevel = 2;
            updateProgress();
        }, 1500);
    } else {
        res.className = 'result fail';
        res.textContent = '❌ 密码错误，月相的顺序你记错了吗？';
    }
}

// 检查关卡2密码
function checkLevel2() {
    const pwd = document.getElementById('pwd2').value.trim();
    const res = document.getElementById('res2');
    // 符合条件的最小数字：16（2的倍数，10~20，1+6=7）
    if (pwd === '16') {
        res.className = 'result success';
        res.textContent = '✅ 密码正确！藏宝图拼接完成，指向古老时钟';
        setTimeout(() => {
            document.getElementById('level2').classList.add('hidden');
            document.getElementById('level3').classList.remove('hidden');
            currentLevel = 3;
            updateProgress();
        }, 1500);
    } else {
        res.className = 'result fail';
        res.textContent = '❌ 密码错误，再想想符合所有条件的最小数字';
    }
}

// 检查关卡3密码
function checkLevel3() {
    const pwd = document.getElementById('pwd3').value.trim();
    const res = document.getElementById('res3');
    // 3点15分夹角：时针在3和4之间15分钟，即3.25小时，角度=3.25×30 - 15×6 = 7.5°
    if (pwd === '7.5' || pwd === '7.50' || pwd === '8') {
        res.className = 'result success';
        res.textContent = '✅ 密码正确！时钟转动，宝藏密室开启';
        setTimeout(() => {
            document.getElementById('level3').classList.add('hidden');
            document.getElementById('level4').classList.remove('hidden');
            currentLevel = 4;
            updateProgress();
        }, 1500);
    } else {
        res.className = 'result fail';
        res.textContent = '❌ 密码错误，时针和分针的夹角计算错了哦';
    }
}