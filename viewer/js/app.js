var cookie = sessionStorage['myvariable']

if (!cookie){ // if you dont have cookie, run the default selection
    console.log('No cookie, starting with dummy dataset')
    var configSettings = config().get('dummy')
}
else {
    console.log('Found cookie: ' + cookie)
    var configSettings = config().get(cookie)
}
run(configSettings)