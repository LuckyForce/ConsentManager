//File Info:
//Creator: Adrian Schauer
//Created: 2022-01-30
//Changed: 2022-01-30
//Version: 1.0.0
//Description: This JavaScript file helps managing Cookie Selection in a completely custom way.

//Copied Console Class from https://github.com/LuckyForce/ConsoleDebugMode/blob/master/languages/js/console.js
//I Copied this instead of importing it because the point of this is suppose to be a one filer project.
//Copied Version: 1.0.2
class DebugConsole {
    constructor() {
        this.debugMode = false;
    }
    disable() {
        this.debugMode = false;
    }
    enable() {
        this.debugMode = true;
    }
    isEnabled() {
        return this.debugMode;
    }
    log(message) {
        if (this.debugMode) {
            console.log(message);
        }
    }
    error(message) {
        if (this.debugMode) {
            console.error(message);
        }
    }
    warn(message) {
        if (this.debugMode) {
            console.warn(message);
        }
    }
    info(message) {
        if (this.debugMode) {
            console.info(message);
        }
    }
    assert(message) {
        if (this.debugMode) {
            console.assert(message);
        }
    }
    clear() {
        if (this.debugMode) {
            console.clear();
        }
    }
    count(message) {
        if (this.debugMode) {
            console.count(message);
        }
    }
    countReset(message) {
        if (this.debugMode) {
            console.countReset(message);
        }
    }
    group(message) {
        if (this.debugMode) {
            console.group(message);
        }
    }
    groupCollapsed(message) {
        if (this.debugMode) {
            console.groupCollapsed(message);
        }
    }
    groupEnd() {
        if (this.debugMode) {
            console.groupEnd();
        }
    }
    time(message) {
        if (this.debugMode) {
            console.time(message);
        }
    }
    timeEnd(message) {
        if (this.debugMode) {
            console.timeEnd(message);
        }
    }
    timeLog(message) {
        if (this.debugMode) {
            console.timeLog(message);
        }
    }
    table(message) {
        if (this.debugMode) {
            console.table(message);
        }
    }
}

//Create Console Object
const Console = new DebugConsole();
//Enable Debug Mode
Console.enable();

//Check if any Cookie types were already accepted.
if (window.localStorage.getItem("acknowledgedCookies") == true) {
    const acknowledgedCookies = true;
} else {
    const acknowledgedCookies = false;
}
if (window.localStorage.getItem("defaultCookieAllowed") == true) {
    const defaultCookieAllowed = true;
} else {
    const defaultCookieAllowed = false;
}
if (window.localStorage.getItem("essentialCookieAllowed") == true) {
    const essentialCookieAllowed = true;
} else {
    const essentialCookieAllowed = false;
}
if (window.localStorage.getItem("analyticsCookieAllowed") == true) {
    const analyticsCookieAllowed = true;
} else {
    const analyticsCookieAllowed = false;
}
if (window.localStorage.getItem("advertisingCookieAllowed") == true) {
    const advertisingCookieAllowed = true;
} else {
    const advertisingCookieAllowed = false;
}
let showConsent = false;
if (window.localStorage.getItem("cookiesAcceptedOn") !== null) {
    const cookiesAcceptedOn = new Date(window.localStorage.getItem("cookiesAcceptedOn"));
    if (cookiesAcceptedOn.getTime() < new Date(settings.consentInfoChangedOn).getTime()) {
        showConsent = true;
        //Defines that consent was already given at some point int the past.
        const consentChanged = true;
    }
} else {
    showConsent = true;
}

//Creating Div to then display Consent.
const div = document.createElement('div');

//Only Show Consent if Consent was given before change of settings
if (showConsent) {
    Console.log("Showing Consent");
    //Output Settings for Debug Reasons
    Console.log(settings);

    //Add necessary styles for the div only using responsive values.
    div.style.position = 'fixed';
    div.style.padding = '10px';

    //Position Settings
    //Positioning is based on the settings.position property which is an exponential value.
    //1 = top
    //2 = right
    //4 = bottom
    //8 = left
    //Together they can be used to position the div in the desired way.
    if(settings.position == null || settings.position == ""){
        settings.position = 14;
    }
    if (settings.position & 1) {
        div.style.top = '0px';
    }
    if (settings.position & 2) {
        div.style.right = '0px';
    }
    if (settings.position & 4) {
        div.style.bottom = '0px';
    }
    if (settings.position & 8) {
        div.style.left = '0px';
    }

    //Basic Settings
    //1. Title
    Console.log(settings.title);
    if (settings.title != null && typeof settings.title == 'string') {
        let title = document.createElement('h1');
        title.textContent = settings.title;
        div.appendChild(title);
    }

    //2. Info Text
    Console.log(settings.info_text);
    if (settings.info_text != null && typeof settings.info_text == 'string') {
        let info_text = document.createElement('span');
        info_text.innerHTML = settings.info_text;
        div.appendChild(info_text);
    }

    //3. Button Text
    Console.log(settings.button)
    if (settings.button != null && typeof settings.button == 'string') {
        let button = document.createElement('button');
        button.textContent = settings.button;
        button.onclick = accepting;
        div.appendChild(button);
    }

    //4. Cookie Types

    //5. Powered by Text
    Console.log(settings.token);
    let token_valid = false;
    if (settings.token != null && typeof settings.token == 'string') {
        //fetch if token valid for this particular site
        Console.log("Fetching Token");
        fetch("https://adrian-schauer.at/projects/consent-manager/api/v1/validateToken.php", {method: "POST", body: JSON.stringify({token: settings.token, site: window.location.hostname})})
            .then(response => response.json())
            .then(data => {
                Console.log(data);
                if (data.valid) {
                    token_valid = true;
                }
            })
            .catch(error => {
                Console.error(error);
            });
    }
    //Generate powered by text
    if(!token_valid){
        let powered_by = document.createElement('span');
        powered_by.innerHTML = "Powered by <a href='https://adrian-schauer.at/projects/consent-manager/' target='_blank'>Consent Manager</a>";
        div.appendChild(powered_by);
    }

    //Basic Styles
    //1. Background Color
    Console.log(settings.background_color);
    if (settings.background_color != null && typeof settings.background_color == 'string') {
        div.style.backgroundColor = settings.background_color;
    }else{
        div.style.backgroundColor = "#6699cc";
    }

    //Adding Div to Website Body.
    document.getElementsByTagName('body')[0].appendChild(div);
} else
    Console.log("Not Showing Consent");

//This Function will be called when a button is pushed in the ConsentManager
//@param cookies, array of cookies with the given array number.
function accepting(cookies) {
    Console.log("Accepting cookies")

    //Making Consent Window Invisible
    div.style.visibility = "hidden";
}