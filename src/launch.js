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