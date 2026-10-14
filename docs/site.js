document.documentElement.classList.add('js');
document.querySelectorAll('[data-enhanced]').forEach(element => { element.hidden = false; });

document.querySelector('[data-copy-email]')?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-email-status');
  try {
    await navigator.clipboard.writeText('brock@nuvaraai.com');
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'Select and copy the address above: brock@nuvaraai.com';
  }
});

const menuButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#site-nav');
if (menuButton && navigation) {
  const setMenu = open => {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.dataset.open = String(open);
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
}

const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-project]')];
const search = document.querySelector('#project-search');
const resultCount = document.querySelector('#result-count');
const emptyMessage = document.querySelector('#empty-results');
let selectedCategory = 'all';
const updateProjects = () => {
  const query = (search?.value || '').trim().toLocaleLowerCase();
  let count = 0;
  cards.forEach(card => {
    const visible = (selectedCategory === 'all' || card.dataset.category === selectedCategory) && card.dataset.search.includes(query);
    card.hidden = !visible;
    if (visible) count++;
  });
  if (resultCount) resultCount.textContent = `${count} of ${cards.length} case studies`;
  if (emptyMessage) emptyMessage.hidden = count !== 0;
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === selectedCategory)));
};
filters.forEach(button => button.addEventListener('click', () => { selectedCategory = button.dataset.filter; updateProjects(); }));
search?.addEventListener('input', updateProjects);
document.querySelector('#reset-filters')?.addEventListener('click', () => {
  selectedCategory = 'all';
  search.value = '';
  updateProjects();
  search.focus();
});

const certificateData = document.querySelector('#certificate-data');
const certificateDialog = document.querySelector('#certificate-dialog');
if (certificateData && certificateDialog && typeof certificateDialog.showModal === 'function') {
  const certificates = JSON.parse(certificateData.textContent);
  let trigger;
  document.querySelectorAll('[data-certificate-preview]').forEach(button => button.addEventListener('click', () => {
    const certificate = certificates[Number(button.dataset.certificatePreview)];
    if (!certificate) return;
    trigger = button;
    certificateDialog.querySelector('#certificate-title').textContent = certificate.title;
    certificateDialog.querySelector('#certificate-detail').textContent = `${certificate.provider} · Course completion · ${certificate.date}`;
    const image = certificateDialog.querySelector('img');
    image.src = certificate.preview;
    image.alt = `${certificate.title}: course completion record for ${certificate.recipient}, ${certificate.date}`;
    certificateDialog.querySelector('#certificate-pdf').href = certificate.file;
    certificateDialog.showModal();
    document.body.classList.add('modal-open');
  }));
  certificateDialog.querySelector('#close-certificate').addEventListener('click', () => certificateDialog.close());
  certificateDialog.addEventListener('click', event => { if (event.target === certificateDialog) certificateDialog.close(); });
  certificateDialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    trigger?.focus();
  });
} else {
  document.querySelectorAll('[data-certificate-preview]').forEach(button => { button.hidden = true; });
}
