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
            protocol: 'mqqapi',
        },
        intent: {
            package: 'com.tencent.mobileqq',
            scheme: 'mqqapi',
        },
        fallback: 'https://im.qq.com/immobile/index.html',
        timeout: 5000,
    };
    const callLib = new CallApp(options);
    callLib.open({
        path: '',
    });
};