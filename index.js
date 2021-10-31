const { AssertionError } = require("assert");

/**
 * This is the `AssertionError` exception with a small amount of specific metadata added. Additional properties are `vulnerabilityTitle` and `vulnerabilityDescription`.
 *
 * @class SecurityAssertionError
 * @extends {AssertionError}
 */
class SecurityAssertionError extends AssertionError {
  constructor(options) {
    super(options);
    this.vulnerabilityTitle = options?.vulnerabilityTitle || "";
    this.vulnerabilityDescription = options?.vulnerabilityDescription || "";
  }

  toString() {
    return `${this.name} [${this.code}]: ${this.message}\n${this.vulnerabilityTitle}\n${this.vulnerabilityDescription}`;
  }
}
