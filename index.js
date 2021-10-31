const { AssertionError } = require('assert')

/**
 * This is the `AssertionError` exception with a small amount of specific metadata added. Additional properties are `vulnerabilityTitle`, `vulnerabilityLink`, and `vulnerabilityDescription`. These are then propagated to the `toString()`.
 *
 * @class SecurityAssertionError
 * @extends {AssertionError}
 * @see {@link https://nodejs.org/api/assert.html|NodeJS Assert API Documentation}
 */
class SecurityAssertionError extends AssertionError {
  constructor(options = {}) {
    super(options)

    /**
     * The title of the vulnerability.
     * @type string
     */
    this.vulnerabilityTitle = options?.vulnerabilityTitle || ''
    /**
     * A description of the vulnerability.
     * @type string
     */
    this.vulnerabilityDescription = options?.vulnerabilityDescription || ''
    /**
     * A link to where you can learn more about the vulnerability.
     * @type string
     */
    this.vulnerabilityLink = options?.vulnerabilityLink || ''
    this.name = 'SecurityAssertionError'
  }

  toString() {
    return `${this.name} [${this.code}]: ${this.message}\n${this.vulnerabilityTitle}\n${this.vulnerabilityDescription}\n(${this.vulnerabilityLink})`
  }
}

module.exports = { SecurityAssertionError }
