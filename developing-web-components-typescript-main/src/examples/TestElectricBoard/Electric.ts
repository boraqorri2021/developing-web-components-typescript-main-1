import { Board } from "./Board.js";

export class Electronic extends Board{
    private _name: string;
    private _location: number;
    private _electronicState: boolean;
    private _fontcolor : string;
    private _onImage : string;
    private _offImage : string;
    public static components : Array<Electronic> =[];
    constructor(name: string, location: number, fontcolor:string, onImage: string, offImage: string) {
        super(0,0);
        if(name==null && location == null && fontcolor ==null && onImage == null && offImage == null){

        }
        else{
        this.name = name;
        this.location = location;
        this.fontcolor = fontcolor;
        this.onImage = onImage;
        this.offImage = offImage;
        this.electronicState = true;
        const element: HTMLElement = document.getElementById('gridItemID' + this.location ) as HTMLElement
        element.innerHTML = `<img style="display:block;width: 80px; height: 50px;margin:auto" id="imgItemOn` + this.location + `" src="` + this.onImage + `" />
        <img style="width: 80px; height: 50px; display:none; margin:auto" id="imgItemOff` + this.location + `" src="` + this.offImage + `" />
        <label id="lblNameID" style="color:` + fontcolor + `;">` + name + `</label>`;
         
         let imgOnClick = document.getElementById("imgItemOn" + this.location );
         imgOnClick.addEventListener("click", (e:Event) => this.SwitchState(this.location));
       
         let imgClick = document.getElementById("imgItemOff" + location );
         imgClick.addEventListener("click", (e:Event) => this.SwitchState(this.location));
          Electronic.components.push(this.getInstance());
          Board.electricComponents=Electronic.components;
    }
}
    public  getInstance(): Electronic {
        let electronic = new Electronic(null, null, null, null, null);
        electronic.name = this.name;
        electronic.fontcolor = this.fontcolor;
        electronic.location = this.location;
        electronic.onImage = this.onImage;
        electronic.offImage = this.offImage;
		return electronic;
	}
    //get and sets: turn on/off
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

    SwitchToOnState(location: number){
        var electricComponentOffImage = (< HTMLInputElement >document.getElementById('imgItemOff' + location));
        var electricComponentOnImage = (< HTMLInputElement >document.getElementById('imgItemOn' + location));
        this.electronicState = true;
            electricComponentOnImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
            electricComponentOffImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
      
    }
    SwitchToOffState(location: number){
        var electricComponentOffImage = (< HTMLInputElement >document.getElementById('imgItemOff' + location));
        var electricComponentOnImage = (< HTMLInputElement >document.getElementById('imgItemOn' + location));
        this.electronicState = false;
        electricComponentOffImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOnImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
    }
    SwitchState(location: number){
        if(Board.boardState == false){
            alert("Electronic Board is turned off!");
            return;
        }
        var electricComponentOffImage = (< HTMLInputElement >document.getElementById('imgItemOff' + location));
        var electricComponentOnImage = (< HTMLInputElement >document.getElementById('imgItemOn' + location));
        if(this.electronicState == true){
            this.electronicState = false;
            electricComponentOffImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
            electricComponentOnImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
            
        }
        else{
            this.electronicState = true;
            electricComponentOnImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
            electricComponentOffImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        }
    
    }
      
}


