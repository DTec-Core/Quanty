
// Dashboard Counters
let virusCount = 0;
let deletedCount = 0;
let botsCount = 0;

function updateDashboardCounters() {
    document.getElementById('virus-count').textContent = virusCount;
    document.getElementById('deleted-count').textContent = deletedCount;
    document.getElementById('bots-count').textContent = botsCount;
}
