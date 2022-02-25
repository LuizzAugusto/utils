/**
 * 
 * @typedef {Object} StringBuilder
 * @property {() => string} build
 * @property {() => string|undefined} pop
 * @property {(text: string) => void} push
 * @property {(text: string) => string|undefined} removeIndexOf
 * @property {(text: string) => string|undefined} removeLastIndexOf
 * @property {(index: number, text: string) => void} replaceInIndexOf
 */

/**
 * 
 * @returns {StringBuilder}
 */
export function createStringBuilder() {
  /**
   * @type {string[]}
   */
  const strings = []

  /**
   * 
   * @returns {string}
   */
  function build() { return strings.join("") }

  /**
   * 
   * @returns {string|undefined}
   */
  function pop() { return strings.pop() }

  /**
   * 
   * @param {string} text 
   */
  function push(text) { strings.push(text) }

  /**
   * 
   * @param {string} text
   * @returns {string[]}
   */
  function removeIndexOf(text) {
    const index = strings.indexOf(text)

    if (index == -1)
      return []

    return strings.splice(index, 1)
  }

  /**
   * 
   * @param {string} text
   * @returns {string[]}
   */
  function removeLastIndexOf(text) {
    const index = strings.lastIndexOf(text)

    if (index == -1)
      return []

    return strings.splice(index, 1)
  }

  /**
   * 
   * @param {number} index 
   * @param {string} text 
   */
  function replaceInIndexOf(index, text) {
    if (strings[index] != null && strings[index] != undefined)
      strings[index] = text
  }

  const public_ = 
    { build
    , pop
    , push
    , removeIndexOf
    , removeLastIndexOf
    , replaceInIndexOf
    }
  
  return public_
}