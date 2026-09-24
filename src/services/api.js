import { SPRINGS_DATA } from '../data/springData';

const BASE_URL = '/api';

export const api = {
  /**
   * Fetch all springs
   */
  async getSprings() {
    try {
      const res = await fetch(`${BASE_URL}/springs`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data || SPRINGS_DATA;
    } catch (err) {
      console.warn('API connection failed, falling back to local dataset:', err.message);
      return SPRINGS_DATA;
    }
  },

  /**
   * Run budget optimizer on backend
   * @param {number} budget
   */
  async optimizeBudget(budget) {
    try {
      const res = await fetch(`${BASE_URL}/optimizer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ budget }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Optimizer API fallback to local calculation:', err.message);
      return null;
    }
  },

  /**
   * Fetch all recorded field survey validations and community reports
   */
  async getFieldValidations() {
    try {
      const res = await fetch(`${BASE_URL}/field-validation`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data || [];
    } catch (err) {
      console.warn('Field validation fetch error, falling back to local storage:', err.message);
      try {
        const local = localStorage.getItem('darjeeling_community_reports');
        return local ? JSON.parse(local) : [];
      } catch (e) {
        return [];
      }
    }
  },

  /**
   * Submit mobile app or citizen field survey validation
   * @param {Object} observation
   */
  async submitFieldValidation(observation) {
    try {
      const res = await fetch(`${BASE_URL}/field-validation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(observation),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      try {
        const existing = JSON.parse(localStorage.getItem('darjeeling_community_reports') || '[]');
        localStorage.setItem('darjeeling_community_reports', JSON.stringify([json.data, ...existing]));
      } catch (e) {}
      return json;
    } catch (err) {
      console.warn('Field validation API error, using optimistic local update:', err.message);
      const fallbackRecord = {
        id: `obs-local-${Date.now().toString().slice(-4)}`,
        ...observation,
        timestamp: new Date().toISOString(),
        verified: true,
      };
      try {
        const existing = JSON.parse(localStorage.getItem('darjeeling_community_reports') || '[]');
        localStorage.setItem('darjeeling_community_reports', JSON.stringify([fallbackRecord, ...existing]));
      } catch (e) {}
      return { success: true, localOnly: true, data: fallbackRecord };
    }
  },

  /**
   * Predict suitability and SHAP attributions
   * @param {Object} features
   */
  async predictSuitability(features) {
    try {
      const res = await fetch(`${BASE_URL}/ai/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(features),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('AI predict API fallback:', err.message);
      return null;
    }
  },

  /**
   * Conversational AI Hydrogeologist assistant
   * @param {string} message
   * @param {Object} context
   */
  async chatWithAI(message, context = {}) {
    try {
      const res = await fetch(`${BASE_URL}/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, context }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('AI chat API error:', err.message);
      return null;
    }
  },

  /**
   * Run district-wide climate what-if simulation
   * @param {number} rainfallMultiplier
   */
  async simulateClimate(rainfallMultiplier = 1.0) {
    try {
      const res = await fetch(`${BASE_URL}/ai/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rainfallMultiplier }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Climate simulation API error:', err.message);
      return null;
    }
  },

  /**
   * Check backend server health
   */
  async checkHealth() {
    try {
      const res = await fetch(`${BASE_URL}/health`);
      return res.ok;
    } catch (e) {
      return false;
    }
  },
};
