export default {
    setGroupName(state, value) {
        state.contactsData.push({
            name: value,
            links: []
        })
    }
}
