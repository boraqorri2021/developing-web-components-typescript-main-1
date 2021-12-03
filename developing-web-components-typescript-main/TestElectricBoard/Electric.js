import { Board } from "./Board.js";
export class Electronic extends Board {
    constructor(name, location, fontcolor, onImage, offImage) {
        super(0, 0);
        if (name == null && location == null && fontcolor == null && onImage == null && offImage == null) {
        }
        else {
            this.name = name;
            this.location = location;
            this.fontcolor = fontcolor;
            this.onImage = onImage;
            this.offImage = offImage;
            this.electronicState = true;
            const element = document.getElementById('gridItemID' + this.location);
            element.innerHTML = `<img style="display:block;width: 80px; height: 50px;margin:auto" id="imgItemOn` + this.location + `" src="` + this.onImage + `" />
        <img style="width: 80px; height: 50px; display:none; margin:auto" id="imgItemOff` + this.location + `" src="` + this.offImage + `" />
        <label id="lblNameID" style="color:` + fontcolor + `;">` + name + `</label>`;
            let imgOnClick = document.getElementById("imgItemOn" + this.location);
            imgOnClick.addEventListener("click", (e) => this.SwitchState(this.location));
            let imgClick = document.getElementById("imgItemOff" + location);
            imgClick.addEventListener("click", (e) => this.SwitchState(this.location));
            Electronic.components.push(this.getInstance());
            Board.electricComponents = Electronic.components;
        }
    }
    getInstance() {
        let electronic = new Electronic(null, null, null, null, null);
        electronic.name = this.name;
        electronic.fontcolor = this.fontcolor;
        electronic.location = this.location;
        electronic.onImage = this.onImage;
        electronic.offImage = this.offImage;
        return electronic;
    }
    //get and sets: turn on/off
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
    SwitchToOnState(location) {
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        this.electronicState = true;
        electricComponentOnImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOffImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
    }
    SwitchToOffState(location) {
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        this.electronicState = false;
        electricComponentOffImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOnImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
    }
    SwitchState(location) {
        if (Board.boardState == false) {
            alert("Electronic Board is turned off!");
            return;
        }
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        if (this.electronicState == true) {
            this.electronicState = false;
            electricComponentOffImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
            electricComponentOnImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        }
        else {
            this.electronicState = true;
            electricComponentOnImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
            electricComponentOffImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        }
    }
}
Electronic.components = [];
//# sourceMappingURL=Electric.js.map