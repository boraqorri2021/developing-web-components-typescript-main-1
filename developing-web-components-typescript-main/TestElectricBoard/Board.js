import { Electronic } from "./Electric.js";
export class Board {
    constructor(rows, columns) {
        this.state = true;
        this.rows = rows;
        this.columns = columns;
        this.backgroundColor = "#dcf1dc";
        const element = document.getElementById('gridComponent');
        var i;
        var gridCells = "";
        var columnNr = "";
        //after getting the size of the board, we create the items in the grid, displayng the location also on each item
        for (i = 1; i <= rows * columns; i++) {
            gridCells += `<div class="grid-item" id="gridItemID` + i + `">` +
                `<label style="
      font-size: small;
      color: #a6cdee;
      float: right;
      margin-top: 19px;
      padding-bottom: -18px;
      ">` + i + `</label></div>`;
        }
        for (i = 0; i < columns; i++) {
            columnNr += "auto ";
        }
        element.setAttribute("style", "grid-template-columns:" + columnNr + ";");
        element.innerHTML = `<div class="alert alert-info" role="alert" style="width:97%">
    Click on the icon to switch state!
    </div>
    <table style="width: 20%;float: left;margin-right: 25%;margin-bottom:10px;">
    <tr>
    <td><img id="switchingID" style="width: 80px; height: 42px;" src="./Images/switch-on-button-vectors.jpg" /></td>
    </tr>
    </table>` +
            `<div id="gridcontainerID" class="grid-container"> ` + gridCells + `</div>`;
        const grid = document.getElementById('gridcontainerID');
        const electricComponentForm = document.getElementById('electricComponentDivID');
        grid.setAttribute("style", "grid-template-columns:" + columnNr + ";background-color:" + this.backgroundColor + ";");
        electricComponentForm.setAttribute("style", "display: block;");
        let switchBtn = document.getElementById("switchingID");
        switchBtn.addEventListener("click", (e) => this.switchState());
    }
    //get and sets: 
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    get rows() {
        return this._rows;
    }
    set rows(value) {
        this._rows = value;
    }
    get columns() {
        return this._columns;
    }
    set columns(value) {
        this._columns = value;
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    set backgroundColor(value) {
        this._backgroundColor = value;
    }
    switchState() {
        const grid = document.getElementById('gridcontainerID');
        const img = document.getElementById('switchingID');
        var i;
        //If previous board state was true then the board is going to switch into Off.
        if (this.state == true) {
            this.state = Board.boardState = false;
            this.backgroundColor = "#b0aaaa";
            grid.style.backgroundColor = this.backgroundColor;
            img.src = "./Images/switch-off-button-vectors (2).jpg";
            //All electrical components are goint to display as off(changing the image and label to Off and the State parameter, but 
            //electronic state is not going to change.)
            for (i = 0; i < Board.electricComponents.length; i++) {
                Board.electricComponents[i].SwitchToOffState(Board.electricComponents[i].location);
            }
        }
        else {
            this.state = Board.boardState = true;
            this.backgroundColor = "#dcf1dc";
            ;
            grid.style.backgroundColor = this.backgroundColor;
            img.src = "./Images/switch-on-button-vectors.jpg";
            //If board is switching into On state, then all electrical devices are going to switch to their previous
            //state, If state was On(true) then the image and label are going to change into On state. Electrical state does not change.
            for (i = 0; i < Board.electricComponents.length; i++) {
                if (Board.electricComponents[i].electronicState)
                    Board.electricComponents[i].SwitchToOnState(Board.electricComponents[i].location);
                else
                    Board.electricComponents[i].SwitchToOffState(Board.electricComponents[i].location);
            }
        }
    }
    //Add Electrical Component, 
    static AddElectricalComponent(name, location, fontcolor, onImage, offImage) {
        let newElectronic = new Electronic(name, location, fontcolor, onImage, offImage);
        //After creating the object, we add the object to Board as an array item.
        Board.electricComponents.push(newElectronic);
    }
    //After clicking the remove button, the electrical object is removed from the array in Board class and the div that 
    //was dispayed in the UI is removed also.
    static RemoveElectricalComponent(location) {
        var index = Board.electricComponents.indexOf(Electronic.getComponentByLocation(location));
        Board.electricComponents.splice(index, 1);
        const electricComponent = document.getElementById('childItemID' + location);
        electricComponent.remove();
    }
}
Board.electricComponents = [];
Board.boardState = true;
//# sourceMappingURL=Board.js.map