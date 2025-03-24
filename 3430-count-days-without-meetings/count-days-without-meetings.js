var countDays = function(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    let end = 0;
    let free = 0;

    for (let i = 0; i < meetings.length; i++) {
        if (meetings[i][0] > end) {
            free += meetings[i][0] - end - 1;
        }
        end = Math.max(end, meetings[i][1]);
    }

    if (days > end) {
        free += days - end;
    }

    return free;
};