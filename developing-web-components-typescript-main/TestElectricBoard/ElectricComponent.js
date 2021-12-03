import { Electronic } from "./Electric.js";
export class ElectricComponent extends HTMLElement {
    constructor() {
        super();
        // board.switchState();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
    <form id="electricComponentFormID">
    <h4 style="border-bottom:solid;">Add a new electric component: </h4>

    <div class="form-group" style="height: 85px;">
    <label for="Name">Name :</label>
    <input type="text" class="form-control" id="nameID" placeholder="Enter name">
  </div>
  <div class="form-group" style="height: 75px;">
    <label for="locationID">Location :</label>
    <input type="number" class="form-control" id="locationID" placeholder="Location">
  </div>
  <div class="form-group" style="height: 65px;">
  <label for="colorID">FontColor :</label>
  <input type="color" class="form-control" id="colorID" style="width:200px;" value="#ff0000">
</div>
<div class="form-group" style="height: 80px;">
  <label for="onImageID">Image for On State :</label>
  <input type="file" class="form-control" id="onImageID" onchange="loadOnFile(event)">
</div>
<div class="form-group" style="height: 80px;">
  <label for="offImageID">Image for Off State :</label>
  <input type="file" class="form-control" id="offImageID" onchange="loadOffFile(event)">
</div>
    <hr />
    <img id="onImg" style="width:50px; height="50px;" />
    <img id="offImg" style="width:50px; height="50px;"/>
    <button type="button" class="btn btn-primary" style="float:right;">Add Electric Component</button>
  </form>
    `;
        this.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (e) => this.AddElectricComponent());
        });
    }
    AddElectricComponent() {
        var i;
        var gridCells = "";
        var columnNr = "";
        var rows = parseInt(document.getElementById("rowId").value);
        var columns = parseInt(document.getElementById("columnId").value);
        var electricComponentName = document.getElementById('nameID').value;
        var electricComponentLocation = parseInt(document.getElementById("locationID").value);
        var electricComponentForecolor = document.getElementById('colorID').value;
        var electricComponentOnImage = document.getElementById('onImageID');
        var electricComponentOffImage = document.getElementById('offImageID');
        var onImg = document.getElementById('onImg').src;
        var offImg = document.getElementById('offImg').src;
        let electricalComponent = new Electronic(electricComponentName, electricComponentLocation, electricComponentForecolor, onImg, offImg);
    }
}
customElements.define('electric-components', ElectricComponent);
//# sourceMappingURL=ElectricComponent.js.map