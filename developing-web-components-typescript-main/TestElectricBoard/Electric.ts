import { Board } from "./Board.js";

export class Electronic{
    private _name: string;
    private _location: number;
    private _state: boolean;
    private _electronicState: boolean;
    private _fontcolor : string;
    private _onImage : string;
    private _offImage : string;
    constructor(name: string, location: number, fontcolor:string, onImage: string, offImage: string) {
       
        this.name = name;
        this.location = location;
        this.fontcolor = fontcolor;
        this.onImage = onImage;
        this.offImage = offImage;
        this.electronicState = true;
        const element: HTMLElement = document.getElementById('gridItemID' + this.location ) as HTMLElement
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
         let imgOnClick = document.getElementById("imgItemOn" + this.location );
         imgOnClick.addEventListener("click", (e:Event) => this.SwitchState(this.location));
       
         let imgOffClick = document.getElementById("imgItemOff" + location );
         imgOffClick.addEventListener("click", (e:Event) => this.SwitchState(this.location));

         let imgRemoveClick = document.getElementById("removebtnID" + this.location );
         imgRemoveClick.addEventListener("click", (e:Event) => Board.RemoveElectricalComponent(this.location));
}

    //get and sets: 
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get fontcolor(): string {
        return this._fontcolor;
    }
    public set fontcolor(value: string) {
        this._fontcolor = value;
    }

    public get location(): number {
        return this._location;
    }
    public set location(value: number) {
        this._location = value;
    }
    public get electronicState(): boolean {
        return this._electronicState;
    }
    public set electronicState(value: boolean) {
        this._electronicState = value;
    }
    public get State(): boolean {
        return this._state;
    }
    public set State(value: boolean) {
        this._state = value;
    }
    public get onImage(): string {
        return this._onImage;
    }
    public set onImage(value: string) {
        this._onImage = value;
    }
    public get offImage(): string {
        return this._offImage;
    }
    public set offImage(value: string) {
        this._offImage = value;
    }

    //Method to return Electrical Object that is located in given location
    public static getComponentByLocation(location : number) : Electronic{
        var i = 0;
        for(i = 0;i< Board.electricComponents.length; i++){
            if(Board.electricComponents[i].location == location){
                return Board.electricComponents[i];
            }
        }
        return null;
        }

        SetState(location: number, ){
            
                
        }

    //Method for switching state, the board property is added to tell us if state is changing when Board state is changing or
    //after clicking the electrical item image
    SwitchToOnState(location: number){

        this.State = true;
        this.electronicState = true;
        var electricComponentOffImage = (< HTMLInputElement >document.getElementById('imgItemOff' + location));
        var electricComponentOnImage = (< HTMLInputElement >document.getElementById('imgItemOn' + location));
        var electricComponentOfflbl = (< HTMLInputElement >document.getElementById('stateOffLbl' + location));
        var electricComponentOnlbl = (< HTMLInputElement >document.getElementById('stateOnLbl' + location));
        
        electricComponentOnImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOffImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        electricComponentOnlbl.setAttribute("style", "display:block;color:green;float: right;margin-right: -30px;margin-top: -7px;");
        electricComponentOfflbl.setAttribute("style", "display:none;color:red;float: right;margin-right: -30px;margin-top: -7px;");
    
    }
    SwitchToOffState(location: number){

        this.State = false;
        var electricComponentOffImage = (< HTMLInputElement >document.getElementById('imgItemOff' + location));
        var electricComponentOnImage = (< HTMLInputElement >document.getElementById('imgItemOn' + location));
        var electricComponentOfflbl = (< HTMLInputElement >document.getElementById('stateOffLbl' + location));
        var electricComponentOnlbl = (< HTMLInputElement >document.getElementById('stateOnLbl' + location));
       
        electricComponentOffImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOnImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        electricComponentOnlbl.setAttribute("style", "display:none;color:green;float: right;margin-right: -30px;margin-top: -7px;");
        electricComponentOfflbl.setAttribute("style", "display:block;color:red;float: right;margin-right: -30px;margin-top: -7px;");
    }
    SwitchState(location: number){
        if(Board.boardState == false && this.electronicState == false)
            {
                this.electronicState = true;
                this.SwitchToOffState(location);
            }
            else if(Board.boardState == false && this.electronicState == true)
            {
                this.electronicState = false;
                this.SwitchToOffState(location);
            }
            else if( Board.boardState == true && this.electronicState == false)
            {
                this.SwitchToOnState(location);
            }
            else {
                this.electronicState = false;
                this.SwitchToOffState(location);
            }
    }
      
}


