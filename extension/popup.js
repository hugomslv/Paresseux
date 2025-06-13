async function getSchedule() {
  return new Promise((resolve) => {
    chrome.storage.sync.get('workSchedule', async (data) => {
      if (data.workSchedule) {
        resolve(data.workSchedule);
      } else {
        const resp = await fetch(chrome.runtime.getURL('work_schedule.json'));
        const json = await resp.json();
        resolve(json);
      }
    });
  });
}

async function update() {
  const schedule = await getSchedule();
  const dayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const now = new Date();
  const day = dayNames[now.getDay()];
  const hours = schedule[day];
  const display = document.getElementById('percentage');
  if (!hours) {
    display.textContent = "Pas de travail aujourd'hui";
    return;
  }
  const startHour = 9;
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHour, 0, 0);
  const end = new Date(start.getTime() + hours * 3600 * 1000);
  let percent;
  if (now <= start) {
    percent = 0;
  } else if (now >= end) {
    percent = 100;
  } else {
    percent = ((now - start) / (end - start) * 100);
  }
  display.textContent = percent.toFixed(2) + '% de votre journée de travail';
}

document.addEventListener('DOMContentLoaded', update);
