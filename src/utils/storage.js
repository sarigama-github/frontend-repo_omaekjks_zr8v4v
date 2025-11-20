// LocalStorage helper for event registrations
const STORAGE_KEY = 'registrations';
const ADMIN_KEY = 'adminLoggedIn';

export function getRegistrations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRegistrations(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function addRegistration(data) {
  const list = getRegistrations();
  const id = Date.now();
  const record = {
    id,
    name: data.name,
    email: data.email,
    phone: data.phone,
    eventType: data.eventType,
    date: data.date,
    guests: Number(data.guests) || 0,
    message: data.message || '',
    status: 'Pending',
  };
  list.push(record);
  saveRegistrations(list);
  return record;
}

export function updateRegistrationStatus(id, status) {
  const list = getRegistrations();
  const idx = list.findIndex((r) => r.id === id);
  if (idx !== -1) {
    list[idx].status = status;
    saveRegistrations(list);
    return list[idx];
  }
  return null;
}

export function deleteRegistration(id) {
  const list = getRegistrations().filter((r) => r.id !== id);
  saveRegistrations(list);
}

export function getStats() {
  const list = getRegistrations();
  const totalPending = list.filter((r) => r.status === 'Pending').length;
  const totalApproved = list.filter((r) => r.status === 'Approved').length;
  const totalRejected = list.filter((r) => r.status === 'Rejected').length;
  return { totalPending, totalApproved, totalRejected };
}

export function setAdminLoggedIn(v) {
  localStorage.setItem(ADMIN_KEY, v ? '1' : '0');
}

export function isAdminLoggedIn() {
  return localStorage.getItem(ADMIN_KEY) === '1';
}

export function logoutAdmin() {
  localStorage.removeItem(ADMIN_KEY);
}
