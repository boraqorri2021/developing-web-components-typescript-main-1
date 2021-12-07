"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BoardComponent = void 0;
var Board_js_1 = require("./Board.js");
var BoardComponent = /** @class */ (function (_super) {
    __extends(BoardComponent, _super);
    function BoardComponent() {
        return _super.call(this) || this;
    }
    BoardComponent.prototype.connectedCallback = function () {
        this.render();
    };
    BoardComponent.prototype.render = function () {
        var _this = this;
        this.innerHTML = "\n    <form>\n    <h4 style=\"margin-bottom:30px;\">Set the size of the Board: </h4>\n    <table>\n    <tr>\n    <td>Rows: </td>\n    <td><input class=\"form-control\" id=\"rowId\" type=\"number\" data-bind=\"field:value:input\" /></td>\n    <td>Columns: </td>\n    <td><input class=\"form-control\" id=\"columnId\" type=\"number\" data-bind=\"field:value:input\" /></td>\n    <td></td>\n    <td><button type=\"button\" class=\"btn btn-success\">Add Electric Board</button></td>\n    </tr>\n    </table>\n    <hr />\n    \n  <div id=\"gridComponent\"></div>\n  </form>\n  <form>\n  </form>\n    ";
        this.querySelectorAll('button').forEach(function (btn) {
            btn.addEventListener('click', function (e) { return _this.AddBoardComponent(); });
        });
    };
    BoardComponent.prototype.AddBoardComponent = function () {
        var rows = parseInt(document.getElementById("rowId").value);
        var columns = parseInt(document.getElementById("columnId").value);
        //create a new object of type Board calling the contructor
        var newBoard = new Board_js_1.Board(rows, columns);
    };
    return BoardComponent;
}(HTMLElement));
exports.BoardComponent = BoardComponent;
customElements.define('electric-board', BoardComponent);
