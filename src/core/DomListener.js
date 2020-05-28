export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`$root not found`)
    }
    this.$root = $root
  }
}
