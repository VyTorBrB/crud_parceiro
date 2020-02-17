export const existsOrErr = (value, msg) => {
    if (!value) throw msg
    if (Array.isArray(value) && value.length === 0) throw msg
    if (typeof value === 'string' && !value.trim()) throw msg
}

export const equalsOrErr = (value1, value2, msg) => {
    if (value1 !== value2) throw msg
}

export const unexistsOrErr = (value, msg) => {
    try {
        existsOrErr(value, msg)
    } catch (msg) {
        return
    } throw msg
}