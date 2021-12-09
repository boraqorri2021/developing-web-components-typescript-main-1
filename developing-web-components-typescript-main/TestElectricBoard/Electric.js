import { Board } from "./Board.js";
export class Electronic {
    constructor(name, location, fontcolor, onImage, offImage) {
        this.name = name;
        this.location = location;
        this.fontcolor = fontcolor;
        this.onImage = onImage;
        this.offImage = offImage;
        this.electronicState = true;
        const element = document.getElementById('gridItemID' + this.location);
        element.innerHTML = `<div id="childItemID` + this.location + `">
        <button type="button" style="border: none;background-color: none;background: none;float: right;margin-top: -40px;margin-right: -30px;" 
        id="removebtnID` + this.location + `"> x </button>
        <img style="display:block;width: 80px; height: 50px;margin:auto" id="imgItemOn` + this.location + `" src="` + this.onImage + `" />
        <img style="width: 80px; height: 50px; display:none; margin:auto" id="imgItemOff` + this.location + `" src="` + this.offImage + `" />
        <label style="color:` + fontcolor + `;">` + name + `</label>
        <label  id="stateOnLbl` + this.location + `" style="color:green;float: right;margin-right: -30px;margin-top: -7px;">On</label>
        <label style="display:none;" id="stateOffLbl` + this.location + `" style="color:red;float: right;margin-right: -30px;margin-top: -7px;">Off</label>
        </div>`;
        //Events when Clicking the image to Switch state and remove Component
        let imgOnClick = document.getElementById("imgItemOn" + this.location);
        imgOnClick.addEventListener("click", (e) => this.SwitchState(this.location));
        let imgOffClick = document.getElementById("imgItemOff" + location);
        imgOffClick.addEventListener("click", (e) => this.SwitchState(this.location));
        let imgRemoveClick = document.getElementById("removebtnID" + this.location);
        imgRemoveClick.addEventListener("click", (e) => Board.RemoveElectricalComponent(this.location));
    }
    //get and sets: 
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get fontcolor() {
        return this._fontcolor;
    }
    set fontcolor(value) {
        this._fontcolor = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
    get electronicState() {
        return this._electronicState;
    }
    set electronicState(value) {
        this._electronicState = value;
    }
    get State() {
        return this._state;
    }
    set State(value) {
        this._state = value;
    }
    get onImage() {
        return this._onImage;
    }
    set onImage(value) {
        this._onImage = value;
    }
    get offImage() {
        return this._offImage;
    }
    set offImage(value) {
        this._offImage = value;
    }
    //Method to return Electrical Object that is located in given location
    static getComponentByLocation(location) {
        var i = 0;
        for (i = 0; i < Board.electricComponents.length; i++) {
            if (Board.electricComponents[i].location == location) {
                return Board.electricComponents[i];
            }
        }
        return null;
    }
    SetState(location) {
    }
    //Method for switching state, the board property is added to tell us if state is changing when Board state is changing or
    //after clicking the electrical item image
    SwitchToOnState(location) {
        this.State = true;
        this.electronicState = true;
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        var electricComponentOfflbl = document.getElementById('stateOffLbl' + location);
        var electricComponentOnlbl = document.getElementById('stateOnLbl' + location);
        electricComponentOnImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOffImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        electricComponentOnlbl.setAttribute("style", "display:block;color:green;float: right;margin-right: -30px;margin-top: -7px;");
        electricComponentOfflbl.setAttribute("style", "display:none;color:red;float: right;margin-right: -30px;margin-top: -7px;");
    }
    SwitchToOffState(location) {
        this.State = false;
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        var electricComponentOfflbl = document.getElementById('stateOffLbl' + location);
        var electricComponentOnlbl = document.getElementById('stateOnLbl' + location);
        electricComponentOffImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOnImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        electricComponentOnlbl.setAttribute("style", "display:none;color:green;float: right;margin-right: -30px;margin-top: -7px;");
        electricComponentOfflbl.setAttribute("style", "display:block;color:red;float: right;margin-right: -30px;margin-top: -7px;");
    }
    SwitchState(location) {
        if (Board.boardState == false && this.electronicState == false) {
            this.electronicState = true;
            this.SwitchToOffState(location);
        }
        else if (Board.boardState == false && this.electronicState == true) {
            this.electronicState = false;
            this.SwitchToOffState(location);
        }
        else if (Board.boardState == true && this.electronicState == false) {
            this.SwitchToOnState(location);
        }
        else {
            this.electronicState = false;
            this.SwitchToOffState(location);
        }
    }
}
//# sourceMappingURL=Electric.js.map