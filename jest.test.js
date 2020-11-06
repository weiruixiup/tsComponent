// 测试 断言库
// 在根目录下 创建jest.test.js 使用npx jest jest.test.js --watch 执行


// 测试名称第一个参数 跟上回调函数
test('test common matcher', () => {
    // 期待expect 2+2  toBe 是4
    expect(2 + 2).toBe(4);
    expect(2 + 2).not.toBe(5);
});

test('test boolean', () => {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
});

test('test number', () => {
    // 大小
    expect(5).toBeGreaterThan(4);
    expect(3).toBeLessThan(5);
});

test('test object', () => {
    const data = {up: 'weiruixi'};
    expect({up: 'weiruixi'}).toEqual(data);
});
