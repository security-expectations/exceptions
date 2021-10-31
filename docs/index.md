<a name="SecurityAssertionError"></a>

## SecurityAssertionError ⇐ <code>AssertionError</code>
**Kind**: global class  
**Extends**: <code>AssertionError</code>  
**See**: [NodeJS Assert API Documentation](https://nodejs.org/api/assert.html)  

* [SecurityAssertionError](#SecurityAssertionError) ⇐ <code>AssertionError</code>
    * [new SecurityAssertionError()](#new_SecurityAssertionError_new)
    * [.vulnerabilityTitle](#SecurityAssertionError+vulnerabilityTitle) : <code>string</code>
    * [.vulnerabilityDescription](#SecurityAssertionError+vulnerabilityDescription) : <code>string</code>
    * [.vulnerabilityLink](#SecurityAssertionError+vulnerabilityLink) : <code>string</code>

<a name="new_SecurityAssertionError_new"></a>

### new SecurityAssertionError()
This is the `AssertionError` exception with a small amount of specific metadata added. Additional properties are `vulnerabilityTitle`, `vulnerabilityLink`, and `vulnerabilityDescription`. These are then propagated to the `toString()`.

<a name="SecurityAssertionError+vulnerabilityTitle"></a>

### securityAssertionError.vulnerabilityTitle : <code>string</code>
The title of the vulnerability.

**Kind**: instance property of [<code>SecurityAssertionError</code>](#SecurityAssertionError)  
<a name="SecurityAssertionError+vulnerabilityDescription"></a>

### securityAssertionError.vulnerabilityDescription : <code>string</code>
A description of the vulnerability.

**Kind**: instance property of [<code>SecurityAssertionError</code>](#SecurityAssertionError)  
<a name="SecurityAssertionError+vulnerabilityLink"></a>

### securityAssertionError.vulnerabilityLink : <code>string</code>
A link to where you can learn more about the vulnerability.

**Kind**: instance property of [<code>SecurityAssertionError</code>](#SecurityAssertionError)  
