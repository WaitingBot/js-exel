export class TableSelection {
  constructor() {
    this.group = []
  }

  select($el) {
    this.removeAllSelect()
    this.group.push($el)
    $el.addClass('selected')
  }

  removeAllSelect() {
    this.group.forEach(el => {
      el.removeClass('selected')
      el.removeClass('selectedGroup')
    })
    this.group = []
  }

  selectGroup(root, startCell, endCell) {
    this.removeAllSelect()
    const startId = startCell.data.id.split(':').map(x => parseInt(x))
    const endId = endCell.data.id.split(':').map(x => parseInt(x))
    if (startId[1] > endId[1]) {
      const tmp = startId[1]
      startId[1] = endId[1]
      endId[1] = tmp
    }
    if (startId[0] > endId[0]) {
      const tmp = startId[0]
      startId[0] = endId[0]
      endId[0] = tmp
    }
    for (let row = startId[1]; row <= endId[1]; row++) {
      for (let col = startId[0]; col <= endId[0]; col++) {
        const cell = root.find(`[data-id="${col}:${row}"]`)
        this.group.push(cell)
        cell.addClass('selectedGroup')
      }
    }
    this.group.push(startCell)
    startCell.addClass('selected')
    // const cells = root.findAll(`[data-col="${$parent.data.col}"]`)
  }
}
