import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@/core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'mousemove', 'mouseup']
    });
  }

  toHTML() {
    return createTable(22)
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()
      document.onmousemove = e => {
        const delta = e.pageX - coords.right
        $parent.$el.style.width = (coords.width + delta) + 'px'
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }

  onMousemove(event) {
  }

  onMouseup(event) {
  }
}
