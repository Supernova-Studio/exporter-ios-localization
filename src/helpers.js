/**
* Convert group name, token name and possible prefix into camelCased string, joining everything together
*/
Pulsar.registerFunction("localizationKey", function (token, tokenGroup, includeGroupPrefix) {

    // Create array with all path segments and token name at the end
    console.log(`token group: ${JSON.stringify(tokenGroup.path)}`)
    let segments = [token.name]
    if (includeGroupPrefix) {
        segments = [...tokenGroup.path, tokenGroup.name, token.name]
        console.log(`segments: ${segments}`)
    }

    // Create camelcased string from each segment
    let camelcasedSegments = segments.map(segment => segment.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()))

    // Create the key with localization segments separated by . - always creates key without dots if group prefix was disabled
    return camelcasedSegments.join(".")
})

/**
* Behavior configuration of the exporter
* includeGroupPrefixes: When enabled, localization keys include full group path separated by dot notation
* includeDescriptions: When enabled, each localization key/value pair will also include description in form of comment
* includeGroupSeparators: When enabled, each group will have its header included as separation comment
*/ 
Pulsar.registerPayload("behavior", {
    includeGroupPrefixes: true,
    includeDescriptions: true,
    includeGroupSeparators: true
})