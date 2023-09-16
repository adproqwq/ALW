function launch_xt(){
    const options = {
        scheme: {
            protocol: 'mdk_a93fa72de5ec0c06',
        },
        intent: {
            package: 'com.miHoYo.hkrpg',
            scheme: 'mdk_a93fa72de5ec0c06',
        },
        fallback: 'https://sr.mihoyo.com/',
        timeout: 5000,
    };
    const callLib = new CallApp(options);
    callLib.open({
        path: '',
    });
};