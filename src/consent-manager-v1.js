//File Info:
//Creator: Adrian Schauer
//Created: 2022-01-30
//Changed: 2022-01-30
//Version: 1.0.0
//Description: This JavaScript file helps managing Cookie Selection in a completely custom way.

if(window.localStorage.getItem("defaultCookieAllowed") == true){
    const defaultCookieAllowed = true;
}else{
    const defaultCookieAllowed = false;
}
if(window.localStorage.getItem("essentialCookieAllowed") == true){
    const essentialCookieAllowed = true;
}else{
    const essentialCookieAllowed = false;
}
if(window.localStorage.getItem("analyticsCookieAllowed") == true){
    const analyticsCookieAllowed = true;
}else{
    const analyticsCookieAllowed = false;
}
if(window.localStorage.getItem("advertisingCookieAllowed") == true){
    const advertisingCookieAllowed = true;
}else{
    const advertisingCookieAllowed = false;
}
if(window.localStorage.getItem("cookiesAcceptedOn") !== null){
    const cookiesAcceptedOn = new Date(window.localStorage.getItem("cookiesAcceptedOn"));
    if(cookiesAcceptedOn.getTime() < new Date(settings.cookiesChangedOn).getTime()){
        const showConsent = true;
        //Defines that consent was already given at some point int the past.
        const consentChanged = true;
    }
}else{
    const showConsent = true;
}

//Only Show Consent if Consent was given before change of settings
if(showConsent){

}