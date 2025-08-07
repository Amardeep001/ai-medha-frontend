export const formatDateTime = (isoString) => {
    const date = new Date(isoString);

    // Add 5 hours 30 minutes (in milliseconds)
    const istTime = new Date(date.getTime() + (5 * 60 + 30) * 60 * 1000);

    return istTime.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};
