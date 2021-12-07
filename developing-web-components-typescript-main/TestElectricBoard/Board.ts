import { Electronic } from "./Electric.js";

export class Board {
    private _state: boolean;
    private _rows: number;
    private _columns: number;
    private _backgroundColor : string;
    public static electricComponents :Array<Electronic> =[];
    public static boardState :boolean = true;
    constructor(rows: number, columns: number) {
        this.state = true;
        this.rows = rows;
        this.columns = columns;
        this.backgroundColor = "#dcf1dc";
        const element: HTMLElement = document.getElementById('gridComponent') as HTMLElement
        
    var i : number;
    var gridCells : string = "";
    var columnNr : string = "";
    //after getting the size of the board, we create the items in the grid, displayng the location also on each item
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
    //get and sets: 
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
        var i: number;
        //If previous board state was true then the board is going to switch into Off.
    if(this.state==true){
      this.state = Board.boardState = false;
      this.backgroundColor = "#b0aaaa";
      grid.style.backgroundColor =  this.backgroundColor;
      img.src = "./Images/switch-off-button-vectors (2).jpg";
      
      //All electrical components are goint to display as off(changing the image and label to Off, but 
      //their state is not going to change.)
      for(i = 0; i<Board.electricComponents.length; i++){
        Board.electricComponents[i].SwitchToOffState(Board.electricComponents[i].location, true);
      }
      }
      else{
        this.state = Board.boardState = true;
        this.backgroundColor = "#dcf1dc";;
        grid.style.backgroundColor =  this.backgroundColor;
        img.src = "./Images/switch-on-button-vectors.jpg";
        //If board is switching into On state, then all electrical devices are going to switch to their previous
        //state, If state was On(true) then the image and label are going to change into On state. Electrical state does not change.
        for(i = 0; i<Board.electricComponents.length; i++){
            if(Board.electricComponents[i].electronicState)
                Board.electricComponents[i].SwitchToOnState(Board.electricComponents[i].location, true);
            else
                Board.electricComponents[i].SwitchToOffState(Board.electricComponents[i].location, true);
            }
      }
    }
}

