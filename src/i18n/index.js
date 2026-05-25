import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const es = {
  dashboard: 'Dashboard', events: 'Bus de Eventos',
  workflows: 'Automatización', documents: 'Document AI',
  traceability: 'Trazabilidad', system_active: 'Sistema activo',
  publish_event: 'Publicar evento', events_today: 'Eventos hoy',
  processed: 'Procesados', pending: 'Pendientes', errors: 'Errores',
  live_feed: 'Feed en vivo', active_flows: 'Flujos activos',
  status_processed: 'Procesado', status_pending: 'Pendiente',
  status_error: 'Error', status_running: 'Corriendo',
  vs_yesterday: 'vs ayer', success_rate: 'tasa éxito',
};

const en = {
  dashboard: 'Dashboard', events: 'Event Bus',
  workflows: 'Automation', documents: 'Document AI',
  traceability: 'Traceability', system_active: 'System active',
  publish_event: 'Publish event', events_today: 'Events today',
  processed: 'Processed', pending: 'Pending', errors: 'Errors',
  live_feed: 'Live feed', active_flows: 'Active flows',
  status_processed: 'Processed', status_pending: 'Pending',
  status_error: 'Error', status_running: 'Running',
  vs_yesterday: 'vs yesterday', success_rate: 'success rate',
};

i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  lng: localStorage.getItem('snd_lang') || 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;
