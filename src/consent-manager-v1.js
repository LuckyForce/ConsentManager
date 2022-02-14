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

//Get Body Element
const body = document.getElementsByTagName("body")[0];

//Only Show Consent if Consent was given before change of settings
if (showConsent) {
    Console.log("Showing Consent");
    //Output Settings for Debug Reasons
    Console.log(settings);

    //z-index for the div
    let zIndex = 9999;
    if(settings.zIndex !== undefined && settings.zIndex !== null && typeof settings.zIndex === "number")
        zIndex = settings.zIndex;

    //Div Style
    div.style.margin = '10px';
    div.style.zIndex = zIndex+1;
    //Make div to align all children one under the other.
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';

    //Position Settings
    //Positioning is based on the settings.position property which is an exponential value.
    //1 = top
    //2 = right
    //4 = bottom
    //8 = left
    //Together they can be used to position the div in the desired way.
    if (settings.position == null || settings.position == "") {
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
    Console.log(settings.button_text)
    if (settings.button_text != null && typeof settings.button_text == 'string') {
        let button = document.createElement('button');
        button.textContent = settings.button_text;
        button.onclick = accepting;
        div.appendChild(button);
    }

    //4. Cookie Types

    //5. Powered by Text
    Console.log(settings.credit);
    if (settings.credit == undefined || settings.credit == null || (typeof settings.credit == 'boolean' && settings.credit == true)) {
        let powered_by = document.createElement('span');
        powered_by.innerHTML = "Powered by <a href='https://adrian-schauer.at/projects/consent-manager/' target='_blank'>Consent Manager</a>";
        //Add necessary styles for the span.
        powered_by.style.alignSelf = 'flex-end';
        powered_by.style.marginTop = 'auto';

        div.appendChild(powered_by);
    }

    //Basic Styles
    //1. Background Color
    Console.log(settings.background_color);
    if (settings.background_color != null && typeof settings.background_color == 'string') {
        div.style.backgroundColor = settings.background_color;
    } else {
        div.style.backgroundColor = "#6699cc";
    }

    //2. Text Color
    Console.log(settings.text_color);
    if (settings.text_color != null && typeof settings.text_color == 'string') {
        div.style.color = settings.text_color;
    } else {
        div.style.color = "#000000";
    }

    //cover the whole screen
    if (settings.cover != undefined && settings.cover != null && (typeof settings.cover == 'string' || typeof settings.cover == 'number')) {
        const cover = document.createElement('div');
        //Necessary Styles
        cover.style.position = 'fixed';
        cover.style.top = '0px';
        cover.style.left = '0px';
        cover.style.right = '0px';
        cover.style.bottom = '0px';
        if(typeof settings.cover == 'number')
            cover.style.backgroundColor = 'rgba(0,0,0,' + settings.cover + ')';
        else
            cover.style.backgroundColor = settings.cover;
        cover.style.zIndex = zIndex;
        //Add cover div to body
        body.appendChild(cover);
    }

    //Adding Div to Website Body.
    body.appendChild(div);
} else
    Console.log("Not Showing Consent");

//This Function will be called when a button is pushed in the ConsentManager
//@param cookies, array of cookies with the given array number.
function accepting(cookies) {
    Console.log("Accepting cookies")

    //Making Consent Window Invisible
    div.style.visibility = "hidden";
}