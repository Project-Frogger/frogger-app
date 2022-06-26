export async function getCurrentEvents() {

    const response = await fetch('/api/events');
    return await response.json();
}

export async function getDeletedEvents() {

    const response = await fetch('/api/deleted_events');
    return await response.json();
}
