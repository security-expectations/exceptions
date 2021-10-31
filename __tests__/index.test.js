const { AssertionError } = require('assert')
const subject = require('../index')

describe('SecurityAssertionError', () => {
  test('inheritance', () => {
    expect(new subject.SecurityAssertionError()).toBeInstanceOf(
      subject.SecurityAssertionError
    )
    expect(new subject.SecurityAssertionError()).toBeInstanceOf(AssertionError)
  })

  test('addedProps', () => {
    const sample = new subject.SecurityAssertionError({
      vulnerabilityTitle: 'abc123',
      vulnerabilityDescription: 'This is a description',
      vulnerabilityLink: 'https://fakewebsitehere.local/CVE-5551212',
    })
    expect(sample.vulnerabilityTitle).toBe('abc123')
    expect(sample.vulnerabilityDescription).toBe('This is a description')
    expect(sample.vulnerabilityLink).toBe(
      'https://fakewebsitehere.local/CVE-5551212'
    )
    expect(sample.toString()).toBe(
      'SecurityAssertionError [ERR_ASSERTION]: undefined undefined undefined\nabc123\nThis is a description\n(https://fakewebsitehere.local/CVE-5551212)'
    )
  })
})
