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
    <div class="form-group" style="height: 80px;">
    <label for="offImageID">Select Electronic Category :</label>
    <select ID = "dropdownId">
              <option value = "Television">Television</option>
              <option value = "Computer/Laptop">Computer/Laptop</option>
              <option value = "Refrigerator">Refrigerator</option>
              <option value = "Charger">Charger</option>
              <option value = "Electric Cooker">Electric Cooker</option>
              <option value = "Other" selected>Other</option>
    </select>
  </div>
    <div class="form-group" style="height: 85px;">
    <label for="Name">Name :</label>
    <input type="text" class="form-control" id="nameID" placeholder="Enter name">
  </div>
  <div class="form-group" style="height: 75px;">
    <label for="locationID">Location :</label>
    <input type="number" class="form-control" id="locationID" placeholder="Location">
  </div>
  <div class="form-group" style="height: 65px;margin-bottom:40px;">
  <label for="colorID">Font Color :</label>
  <input type="color" class="form-control" id="colorID" style="width:200px;" value="#ff0000">
</div>
<div class="form-group"">
<label for="can" style="position: absolute;margin-top: -30px;">Costumize Image :</label>
<canvas id="can" width="150" height="150" style="border:1px solid;"></canvas>
<img id="canvasimg" style="margin-top:-145px" style="display:none;">
        <input type="button" value="Save image" id="btn" size="30"  class="btn btn-success" onclick="save()" style="margin-left:144px; top:55%;left:10%;">
        <input type="button" value="Clear" id="clr" size="23" class="btn btn-danger" onclick="erase()" style=" top:55%;left:15%;">
</div>
    <button type="button" class="btn btn-primary" style="float:right;margin-top:-30px;">Add Electric Component</button>
  </form>
    `;
        this.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (e) => this.AddElectricComponent());
        });
    }
    AddElectricComponent() {
        var onImg;
        var offImg;
        //Getting values for creating an object of  Electrical type
        var electricComponentName = document.getElementById('nameID').value;
        var electricComponentLocation = parseInt(document.getElementById("locationID").value);
        var electricComponentForecolor = document.getElementById('colorID').value;
        var canvasImg = document.getElementById('canvasimg').src;
        var displayimage = document.getElementById('canvasimg').style.display;
        if (Electronic.getComponentByLocation(electricComponentLocation) != null) {
            alert("You can not add more electronic components at this location!");
            return;
        }
        if (displayimage == "none") {
            var category = document.getElementById("dropdownId").value;
            switch (category) {
                case "Television":
                    onImg = "./Images/OnTV.jpg";
                    offImg = "./Images/OffTV.jpg";
                    break;
                case "Computer/Laptop":
                    onImg = "./Images/computer.jpg";
                    offImg = "./Images/computer-off.jpg";
                    break;
                case "Refrigerator":
                    onImg = "./Images/fridge.jpg";
                    offImg = "./Images/fridge-off.jpg";
                    break;
                case "Charger":
                    onImg = "./charger.jpg";
                    offImg = "./Images/chargeroff.jpg";
                    break;
                case "Electric Cooker":
                    onImg = "./Images/cooker";
                    offImg = "./Images/cooker-off.jpg";
                    break;
                default:
                    onImg = "./Images/onstate.jpg";
                    offImg = "./Images/offState.jpg";
            }
        }
        else {
            onImg = offImg = canvasImg;
        }
        let electricalComponent = new Electronic(electricComponentName, electricComponentLocation, electricComponentForecolor, onImg, offImg);
    }
}
customElements.define('electric-components', ElectricComponent);
//# sourceMappingURL=ElectricComponent.js.map