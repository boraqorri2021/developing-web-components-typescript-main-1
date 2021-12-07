import { Board } from "./Board.js";
import { ElectricComponent } from "./ElectricComponent.js";

export class BoardComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <form>
    <h4 style="margin-bottom:30px;">Set the size of the Board: </h4>
    <table>
    <tr>
    <td>Rows: </td>
    <td><input class="form-control" id="rowId" type="number" data-bind="field:value:input" /></td>
    <td>Columns: </td>
    <td><input class="form-control" id="columnId" type="number" data-bind="field:value:input" /></td>
    <td></td>
    <td><button type="button" class="btn btn-success">Add Electric Board</button></td>
    </tr>
    </table>
    <hr />
    
  <div id="gridComponent"></div>
  </form>
  <form>
  </form>
    `
    this.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e:Event) => this.AddBoardComponent());
   }) 
  }

 AddBoardComponent(){
    var rows = parseInt(( < HTMLInputElement > document.getElementById("rowId")).value);
    var columns = parseInt(( < HTMLInputElement > document.getElementById("columnId")).value);
    //create a new object of type Board calling the contructor
    let newBoard = new Board(rows, columns);
 }
}

customElements.define('electric-board', BoardComponent);