async function getDefaultSchedule() {
  const resp = await fetch(chrome.runtime.getURL('work_schedule.json'));
  return resp.json();
}

function fillForm(schedule) {
  ['monday','tuesday','wednesday','thursday','friday'].forEach(day => {
    document.getElementById(day).value = schedule[day] ?? '';
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const defaults = await getDefaultSchedule();
  chrome.storage.sync.get('workSchedule', (data) => {
    const schedule = data.workSchedule || defaults;
    fillForm(schedule);
  });

  document.getElementById('scheduleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const schedule = {};
    ['monday','tuesday','wednesday','thursday','friday'].forEach(day => {
      const val = parseFloat(document.getElementById(day).value);
      if (!isNaN(val)) schedule[day] = val;
    });
    chrome.storage.sync.set({ workSchedule: schedule });
  });
});
