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
}else{
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

//Only Show Consent if Consent was given before change of settings
if (showConsent) {
    Console.log("Showing Consent");
    
    //Creating Div to then display Consent.
    div = document.createElement('div');

} else
    Console.log("Not Showing Consent");