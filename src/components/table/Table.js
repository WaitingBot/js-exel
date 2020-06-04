import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize, shouldSelect} from '@/components/table/table.functions';
import {TableSelection} from '@/components/table/TableSelection';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'click']
    });
  }

  toHTML() {
    return createTable(22)
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    const cell = this.$root.find('[data-id="0:0"]')
    this.selection.select(cell)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }

    if (shouldSelect(event)) {
      console.log('group')
      const startCell = $(event.target)
      document.onmouseup = (e) => {
        const endCell = $(e.target)
        this.selection.selectGroup(this.$root, startCell, endCell)
        console.log('end group')
      }
    }
  }

  onClick(event) {
    if (shouldSelect(event)) {
      const cell = $(event.target)
      this.selection.select(cell)
    }
  }
}
