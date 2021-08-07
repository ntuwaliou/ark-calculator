//const lang_set = ["EN_US", "ZH_TW"]
import ZH_TW from "../LANG/ZH_TW.json"
import EN_US from "../LANG/EN_US.json"

class LanguageSupport {
    constructor (lang){
        console.log("Reading Language file")
        if(lang === "ZH_TW")
            this.String = ZH_TW.String
        else if(lang === "EN_US")
            this.String = EN_US.String
        else{
            console.log("We Don't Support this language")
            this.String = EN_US.String
        }
    }
}

export default LanguageSupport