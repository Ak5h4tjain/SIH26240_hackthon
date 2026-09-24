# Product Requirements Document (PRD) — SIH26240

## 1. Document Overview & Metadata

* **Product Name**: Darjeeling Himalayan Springshed Revival Decision Support System (DSS)
* **Problem Statement ID**: SIH26240
* **Target Domain**: Mountain Hydrology, Springshed Management, Artificial Groundwater Recharge, Climate Adaptation
* **Sponsoring Agency**: Smart India Hackathon (SIH) / Ministry of Jal Shakti / Government of West Bengal
* **Document Version**: 1.0 (Production Release)
* **Status**: Approved & Integrated

---

## 2. Problem Statement & Context

### 2.1 The Himalayan Water Crisis
Across the Indian Himalayan Region (IHR), more than **60 million people** depend directly on natural mountain springs (known locally as *Dharas* in Nepali or *Naulas* in Kumaon) for their daily drinking water, domestic sanitation, and terraced irrigation.

According to the landmark **NITI Aayog 2018 Report**, over **50% of Himalayan springs have dried up or become strictly seasonal**. The acute causes include:
1. **Changing Precipitation Regimes**: Intense, erratic cloudbursts replacing prolonged gentle monsoon rains, resulting in high surface runoff rather than deep subsurface aquifer recharge.
2. **Unplanned Mountain Infrastructure**: Heavy earthmoving and road excavations severing fracture networks and subterranean feeding channels.
3. **Loss of Vegetative Sponge Cover**: Native broadleaf oak forests (*Quercus*) replaced by shallow-rooted pine or built-up tourist settlements.

### 2.2 The Existing Gap in Decision Making
Traditional watershed management treats mountain slopes like gentle plains, building generic check dams in ravines that fail to feed the specific fractured rock aquifers supplying mountain springs. Without scientific, 3D lithological and hydrogeological mapping, government funds are often expended on ineffective or even dangerous structures that trigger catastrophic slope failures and landslides.

---

## 3. Product Vision & Value Proposition

> **"Transform Himalayan spring revival from guesswork into a precise, scientific, and community-driven cyber-physical command system."**

The platform combines satellite DEMs, geological fault maps, machine learning, and game-theoretic explainability to guide district authorities on **where** to recharge, **which** structures to build, and **how much** water will be restored per rupee invested.

---

## 4. User Personas

| Persona | Role | Primary Goal | Pain Points |
|---------|------|--------------|-------------|
| **Shri R. Sharma** | District Magistrate / Jal Jeevan Director | Efficiently allocate ₹1-5 Crores of annual budget across 100 springs. | Lack of clear ROI, difficulty prioritizing which village needs water first. |
| **Dr. P. Tamang** | Senior Hydrogeologist (CGWB / PHED) | Validate geological fracture lines and prevent landslide risks from water pooling. | Missing lithology maps, inaccurate GPS coordinates, black-box AI models. |
| **Smt. Kamala Rai** | Gram Panchayat Pradhan (Mirik Block) | Keep village dharas flowing during the dry pre-monsoon months (March-May). | Government schemes ignore local knowledge; documentation is in English. |
| **Aryan Subba** | High School Student / Eco-Club Member | Learn how mountain hydrology works and monitor local spring health. | Boring textbooks; lacks engaging visual learning tools. |

---

## 5. Functional Requirements (FR)

### High Priority (P0 — Core Functionality)

* **FR-01: Multi-Perspective Geospatial Viewer**
  * System shall provide an interactive 3D mountain terrain viewport using MapTiler 3D with realistic elevation exaggeration, pitch, and bearing controls.
  * System shall provide a 2D Google Maps Explorer with marker clustering, search bar, and filter chips.
  * System shall provide a 3D Three.js interactive World Globe showcasing mountain springshed hotspots worldwide.

* **FR-02: 100 Benchmark Springs Master Dataset**
  * System shall bundle and render all 100 benchmark Darjeeling springs covering 111.04 km² catchment area with complete 52-parameter hydrogeological attributes.

* **FR-03: Dynamic Budget Allocation & Civil Optimizer**
  * System shall allow users to slide a budget bar between ₹0 and ₹5.00 Crores.
  * System shall dynamically compute revived springs count, projected annual recharge liters, and civil structure quantities (check dams, contour trenches, afforestation hectares).

* **FR-04: AI/ML Recharge Suitability & Priority Scoring**
  * System shall calculate a continuous 0-100 Recharge Suitability Score and Spring Revival Priority Score for any given terrain coordinate using trained XGBoost models.

* **FR-05: Geotechnical & Landslide Hazard Guard**
  * System shall automatically flag slopes `> 32°` as High Risk and strictly forbid artificial deep water percolation pits to prevent triggering debris flows.

### Medium Priority (P1 — Value-Add Features)

* **FR-06: Explainable AI with SHAP Feature Attribution**
  * System shall generate Shapley Additive Explanations (SHAP) showing the positive or negative percentage contribution of slope, geology, rainfall, clay, and drainage proximity.

* **FR-07: Citizen Science & Field Validation Form**
  * System shall provide a 5-step reporting modal enabling community surveyors to submit spring discharge (LPM), water quality (pH/TDS), and geo-tagged photographs.
  * System shall support offline caching in `localStorage` when internet connectivity is lost.

* **FR-08: Multi-Lingual Architecture with Audio Narration**
  * System shall support instantaneous UI language switching between English (`en`), Nepali (`ne`), Hindi (`hi`), and Bengali (`bn`).
  * System shall feature Web Speech API Text-to-Speech (TTS) reading spring diagnostics aloud in the selected language.

* **FR-09: Real-Time Climate Scenario Simulator**
  * System shall allow stress-testing the district catchment under simulated climate conditions (-40% severe drought to +40% extreme monsoon deluge).

* **FR-10: Conversational AI Hydrogeologist Copilot**
  * System shall offer a contextual chat modal capable of answering scientific and administrative queries grounded in the Darjeeling master dataset.

### Low Priority (P2 — Supplementary Features)

* **FR-11: Side-by-Side Spring Comparative Analytics**
  * System shall allow comparing any two springshed zones across discharge, lithology, slope, and cost-benefit ratio.

* **FR-12: Youth & Student Water Learning Hub**
  * System shall provide interactive hydrogeological diagrams, gamified quizzes, and animated mountain water cycle explainers.

---

## 6. Non-Functional Requirements (NFR)

* **NFR-01: Rendering Performance**: The 3D WebGL viewport must maintain a frame rate $\ge 45\text{ FPS}$ on standard laptops with integrated graphics.
* **NFR-02: Latency**: API endpoints for budget optimization and ML inference must respond in $< 120\text{ ms}$.
* **NFR-03: Resilience & Graceful Fallback**: If the Node.js backend is offline, the client must seamlessly fall back to local in-memory datasets and calculations without throwing uncaught exceptions.
* **NFR-04: Accessibility**: High contrast UI with minimum font size of 14px, keyboard navigation shortcuts (`A`/`D` keys to cycle springs), and full screen-reader ARIA tags.
* **NFR-05: Security**: Sanitized user inputs on citizen reporting forms to prevent Cross-Site Scripting (XSS) and injection attacks.

---

## 7. Success Metrics & Key Performance Indicators (KPI)

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| **Annual Groundwater Recharge Projected** | $> 15,000,000\text{ Liters}$ at ₹1.5 Cr budget | Physical hydrologic model calculation |
| **Field Ground-Truthing Resolution** | 100% of 6 unresolved field verification springs inspected | Panchayat surveyor validation submissions |
| **Multi-Lingual Community Adoption** | $\ge 40\%$ of sessions using Nepali or Bengali | Telemetry language session logs |
| **Civil Structure Cost Efficiency** | $< \text{₹}0.95$ per 1,000 Liters of recharged groundwater | Optimizer cost-efficiency telemetry |
| **Model Cross-Validation Accuracy** | $\ge 88\%$ correlation with in-situ discharge trends | Leave-one-out cross validation in Python notebook |
