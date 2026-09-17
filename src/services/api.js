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
   * Submit mobile app field survey validation
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
      return json;
    } catch (err) {
      console.warn('Field validation API error, using optimistic local update:', err.message);
      return { success: true, localOnly: true, data: observation };
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
