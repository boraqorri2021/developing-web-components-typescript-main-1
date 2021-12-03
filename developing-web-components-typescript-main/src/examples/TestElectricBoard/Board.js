export class Board {
    constructor(rows, columns) {
        this.state = true;
        this.rows = rows;
        this.columns = columns;
        this.backgroundColor = "#dcf1dc";
        if (rows == 0 && columns == 0) {
        }
        else {
            const element = document.getElementById('gridComponent');
            var i;
            var gridCells = "";
            var columnNr = "";
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
    }
    getInstance() {
        let boardC = new Board(0, 0);
        boardC.state = this.state;
        boardC.columns = this.columns;
        boardC.rows = this.rows;
        boardC.backgroundColor = this.backgroundColor;
        Board.board = boardC;
        return Board.board;
    }
    //get and sets: turn on/off, background, size of the board, electricnumberelements
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
        if (this.state == true) {
            this.state = Board.boardState = false;
            this.backgroundColor = "#b0aaaa";
            grid.style.backgroundColor = this.backgroundColor;
            img.src = "./Images/switch-off-button-vectors (2).jpg";
            var i;
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
        }
    }
}
Board.electricComponents = [];
Board.boardState = true;
//# sourceMappingURL=Board.js.map