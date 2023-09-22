function launch_wx(){
    const options = {
        scheme: {
            protocol: 'weixin',
        },
        intent: {
            package: 'com.tencent.mm',
            scheme: 'weixin',
        },
        fallback: 'https://weixin.qq.com/',
        timeout: 5000,
    };
    const callLib = new CallApp(options);
    callLib.open({
        path: '',
    });
};

function launch_qq(){
    const options = {
        scheme: {
            protocol: 'mqq',
        },
        intent: {
            package: 'com.tencent.mobileqq',
            scheme: 'mqq',
        },
        fallback: 'https://im.qq.com/immobile/index.html',
        timeout: 5000,
    };
    const callLib = new CallApp(options);
    callLib.open({
        path: '',
    });
};

function launch_fq(){
    const options = {
        scheme: {
            protocol: 'dragon1967',
        },
        intent: {
            package: 'com.dragon.read',
            scheme: 'dragon1967',
        },
        fallback: 'https://fanqienovel.com/',
        timeout: 5000,
    };
    const callLib = new CallApp(options);
    callLib.open({
        path: '',
    });
};

function launch_bilibili(){
    const options = {
        scheme: {
            protocol: 'bilibili',
            host: 'video',
        },
        intent: {
            package: 'tv.danmaku.bili',
            scheme: 'bilibili',
        },
        fallback: 'https://www.bilibili.com/',
        timeout: 5000,
    };
    const callLib = new CallApp(options);
    callLib.open({
        path: '',
    });
};