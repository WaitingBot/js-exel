export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
    this.currtent = null
  }

  select($el) {
    this.clear()
    this.group.push($el)
    this.currtent = $el
    $el.addClass(TableSelection.className)
    $el.focus()
  }

  clear() {
    this.group.forEach($el => {
      $el.removeClass(TableSelection.className)
      $el.removeClass('selectedGroup')
      $el.removeClass('border_top')
      $el.removeClass('border_bottom')
      $el.removeClass('border_left')
      $el.removeClass('border_right')
    })
    this.group = []
  }

  selectGroup($group = [], $target, $current) {
    this.clear()
    this.group = $group
    $current.addClass(TableSelection.className)
    this.group.forEach($el => $el.addClass('selectedGroup'))
    this.selectGroupBorder($group, $target, $current)
  }

  selectGroupBorder($group = [], $target, $current) {
    const start = $current.id(true)
    const end = $target.id(true)
    if (start['row'] > end['row']) {
      [end['row'], start['row']] = [start['row'], end['row']]
    }
    if (start['col'] > end['col']) {
      [end['col'], start['col']] = [start['col'], end['col']]
    }
    this.group.forEach($el => {
      const par = $el.id(true)
      if (par['row'] === start['row']) {
        $el.addClass('border_top')
      }
      if (par['row'] === end['row']) {
        $el.addClass('border_bottom')
      }
      if (par['col'] === start['col']) {
        $el.addClass('border_left')
      }
      if (par['col'] === end['col']) {
        $el.addClass('border_right')
      }
    })
  }
}
