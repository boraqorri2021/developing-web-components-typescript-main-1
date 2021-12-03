import { Electronic } from "./Electric.js";

export class Board {
    private _state: boolean;
    private _rows: number;
    private _columns: number;
    private _backgroundColor : string;
    public static electricComponents :Array<Electronic> =[];
    public static boardState :boolean = true;
    public static board : Board;
    constructor(rows: number, columns: number) {
        this.state = true;
        this.rows = rows;
        this.columns = columns;
        this.backgroundColor = "#dcf1dc";
        
        if(rows==0 && columns==0){
            
        }
        else{
        const element: HTMLElement = document.getElementById('gridComponent') as HTMLElement
        
    var i : number;
    var gridCells : string = "";
    var columnNr : string = "";
    for(i= 1; i <= rows*columns; i++){
      gridCells += `<div class="grid-item" id="gridItemID` + i + `">` + 
      `<label style="
      font-size: small;
      color: #a6cdee;
      float: right;
      margin-top: 19px;
      padding-bottom: -18px;
      ">` + i + `</label></div>`;
    }
    for(i =0; i< columns; i++){
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

    const grid: HTMLElement = document.getElementById('gridcontainerID') as HTMLElement
    const electricComponentForm: HTMLElement = document.getElementById('electricComponentDivID') as HTMLElement
    grid.setAttribute("style", "grid-template-columns:" + columnNr + ";background-color:" + this.backgroundColor +";");
    electricComponentForm.setAttribute("style", "display: block;");
    let switchBtn = document.getElementById("switchingID");
    switchBtn.addEventListener("click", (e:Event) => this.switchState());
    }
}
public  getInstance(): Board {
    let boardC = new Board(0,0);
    boardC.state = this.state;
    boardC.columns = this.columns;
    boardC.rows = this.rows;
    boardC.backgroundColor = this.backgroundColor;
    Board.board =boardC;
    return Board.board;
}

    //get and sets: turn on/off, background, size of the board, electricnumberelements
    public get state(): boolean {
        return this._state;
    }
    public set state(value: boolean) {
        this._state = value;
    }

    public get rows(): number {
        return this._rows;
    }
    public set rows(value: number) {
        this._rows = value;
    }
    public get columns(): number {
        return this._columns;
    }
    public set columns(value: number) {
        this._columns = value;
    }
    public get backgroundColor(): string {
        return this._backgroundColor;
    }
    public set backgroundColor(value: string) {
        this._backgroundColor = value;
    }

    public switchState(){
        const grid: HTMLElement = document.getElementById('gridcontainerID') as HTMLElement;
        const img: HTMLImageElement = document.getElementById('switchingID') as HTMLImageElement;
    if(this.state==true){
      this.state = Board.boardState = false;
      this.backgroundColor = "#b0aaaa";
      grid.style.backgroundColor =  this.backgroundColor;
      img.src = "./Images/switch-off-button-vectors (2).jpg";
     var i: number;
      for(i = 0; i<Board.electricComponents.length; i++){
        Board.electricComponents[i].SwitchToOffState(Board.electricComponents[i].location);
      }
      }
      else{
        this.state = Board.boardState = true;
            this.backgroundColor = "#dcf1dc";;
            grid.style.backgroundColor =  this.backgroundColor;
            img.src = "./Images/switch-on-button-vectors.jpg";
      }
    }
}
