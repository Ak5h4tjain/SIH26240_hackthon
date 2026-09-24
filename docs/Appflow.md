# Application Flow (AppFlow) — SIH26240

## 1. System Navigation & View Hierarchy

The **Darjeeling Springshed Revival Decision Support System (DSS)** operates as a single-page reactive application running on a unified HUD telemetry shell. The user can switch seamlessly between four specialized spatial perspectives while retaining active state (selected spring, budget allocation, language context, active filters).

```mermaid
stateDiagram-v2
    [*] --> MapTiler3DView: Default Mount

    state "Main Views" as Views {
        MapTiler3DView --> WorldGlobeView: Switch to Globe
        WorldGlobeView --> MapTiler3DView: Dive to Darjeeling
        MapTiler3DView --> GoogleMapExplorer: Switch to Big Map
        GoogleMapExplorer --> MapTiler3DView: Switch to 3D Terrain
        WorldGlobeView --> GoogleMapExplorer: Switch to Map
        GoogleMapExplorer --> StudentLearningHub: Switch to Hub
        StudentLearningHub --> MapTiler3DView: Return to 3D
        StudentLearningHub --> GoogleMapExplorer: Return to Map
    }

    state "Interactive Modals (Overlay on Active View)" as Modals {
        CitizenReportModal: Citizen & Field Validation Form
        AICopilotModal: Hydrogeologist AI Assistant
        InteractiveModelLab: Real-Time XGBoost Inference Lab
        ClimateScenarioSimulator: Climate Stress Testing
        SpringComparisonModal: Side-by-Side Springshed Analysis
    }

    Views --> Modals: Trigger via HeaderHUD or Pin Action
    Modals --> Views: Close / Save
```

---

## 2. End-to-End User Personas & Workflows

### 2.1 Persona 1: District Magistrate / Jal Jeevan Mission Planner
*Goal: Allocate district development funds optimally to revive maximum mountain springs before the dry pre-monsoon season.*

```mermaid
sequenceDiagram
    actor Admin as District Magistrate
    participant HUD as HeaderHUD (Telemetry)
    participant Opt as Optimizer Engine (/api/optimizer)
    participant Map as MapTiler 3D Scene
    participant Comp as SpringComparisonModal

    Admin->>HUD: Adjust Budget Slider (e.g., from ₹1.20 Cr to ₹2.50 Cr)
    HUD->>Opt: POST /api/optimizer { budget: 25000000 }
    Opt-->>HUD: Returns revived count (68), recharge (14.2M L), structures breakdown
    HUD->>Map: Update Pin Glows (Unfunded -> Funded Status)
    Admin->>Map: Click on Top Priority Spring (e.g., Bimla Dhara)
    Map->>HUD: Open Details Drawer (Contour trenches + check dam cost: ₹2.8 Lakhs)
    Admin->>HUD: Click "Compare Springs"
    HUD->>Comp: Open Side-by-Side Comparison (Bimla Dhara vs Devithan)
    Comp-->>Admin: Displays ROI: Liters Recharged per Rupee Invested
    Admin->>HUD: Export Priority PDF / Work Order
```

### 2.2 Persona 2: Field Hydrogeologist & Geotechnical Officer
*Goal: Inspect recharge suitability scores, diagnose hydro-structural drivers (SHAP), and screen for landslide risks.*

```mermaid
sequenceDiagram
    actor Geo as Hydrogeologist
    participant UI as Map / Springs List
    participant Lab as InteractiveModelLab
    participant AI as AICopilotModal (/api/ai/chat)
    participant Server as ML Inference Engine

    Geo->>UI: Filter by "High Risk (20)" or "Field Verification (6)"
    UI->>Geo: Display Springs on steep slopes (>32°) in Daling Schist
    Geo->>UI: Click "AI Hydrogeologist Copilot"
    UI->>AI: Open Dialog with Active Spring Context
    Geo->>AI: "Why is Spring Dhankheti flagged for field verification?"
    AI->>Server: Query Notebook Rules & Geospatial QC
    Server-->>AI: Explain: High slope (38°), elevation delta >40m, conflicting geological map sheet
    AI-->>Geo: Detailed scientific explanation & caution against deep percolation trenches
    Geo->>Lab: Open "Model Lab" to test intervention sensitivity
    Lab->>Server: POST /api/ai/predict with modified slope & clay values
    Server-->>Lab: Live SHAP waterfall attribution breakdown
```

### 2.3 Persona 3: Gram Panchayat Pradhan & Citizen Surveyor
*Goal: Report drying spring discharge, water quality symptoms, and verify structural status directly from the village.*

```mermaid
sequenceDiagram
    actor Citizen as Gram Panchayat Surveyor
    participant HUD as HeaderHUD
    participant Modal as CitizenReportModal
    participant Storage as LocalStorage (Offline Cache)
    participant API as Backend API (/api/field-validation)

    Citizen->>HUD: Click "Report a Spring / रिपोर्ट गर्नुहोस्"
    HUD->>Modal: Open Multi-Step Observation Form (Auto-geolocated)
    Citizen->>Modal: Step 1: Select Spring Name (e.g. SP-001 Devithan)
    Citizen->>Modal: Step 2: Input Current Discharge (0.8 LPM) & Flow Visual (Trickling)
    Citizen->>Modal: Step 3: Enter Water Quality (Clear/Cloudy, pH: 6.8, TDS: 92)
    Citizen->>Modal: Step 4: Take/Attach Geo-tagged Photo of Dhara
    Citizen->>Modal: Step 5: Submit Verification
    alt Internet Connected
        Modal->>API: POST /api/field-validation
        API-->>Modal: 201 Created & Verified in Database
    else Offline in Remote Mountain Valley
        Modal->>Storage: Fallback to localStorage ('darjeeling_community_reports')
        Storage-->>Modal: Queued for background synchronization
    end
    Modal-->>Citizen: Show Confirmation with Community Water Impact Summary
```

### 2.4 Persona 4: High School Student & Youth Environmental Volunteer
*Goal: Understand the Himalayan hydrological cycle, mountain fractures, and how springs function.*

```mermaid
sequenceDiagram
    actor Student as Student / Youth
    participant HUD as HeaderHUD
    participant Hub as StudentLearningHub
    participant Sim as ClimateScenarioSimulator

    Student->>HUD: Switch Language to Nepali / Hindi
    Student->>HUD: Select "Water Learning Hub / पानी सिकाइ केन्द्र"
    HUD->>Hub: Render Interactive Himalayan Hydrogeology Curriculum
    Student->>Hub: Explore "What is a Springshed?" 3D interactive diagram
    Student->>Hub: Play "Spring Revival Challenge" quiz
    Student->>HUD: Open "Climate Simulator"
    HUD->>Sim: Launch -30% Drought Stress Test
    Sim-->>Student: Visualizes 42 mountain springs dropping below critical 5 LPM threshold
```

---

## 3. Data Processing & Feedback Pipeline Flow

The platform operates on a closed-loop 5-stage continuous learning lifecycle:

```mermaid
flowchart TD
    subgraph S1["Stage 1: Multi-Source Data Ingestion"]
        D1[SRTM 30m DEM Terrain]
        D2[IMD 0.25° Gridded Rainfall]
        D3[SoilGrids 250m Clay / Silt]
        D4[GSI Geological Lithology Sheets]
        D5[Sentinel-2 10m LULC]
        D6[CGWB Springshed In-situ Inventory]
    end

    subgraph S2["Stage 2: Hydrological Conditioning & GIS"]
        P1[PySheds D8 Depression Filling]
        P2[Flow Direction & Accumulation]
        P3[Topographic Wetness Index - TWI]
        P4[Drainage Distance Matrix]
        P5[Spatial Join into 100 Springshed Vector Grid]
    end

    subgraph S3["Stage 3: AI/ML Inference & SHAP"]
        M1[XGBoost & Random Forest Classifier]
        M2[Recharge Suitability Index: 0-100]
        M3[Priority Ranking Algorithm]
        M4[Game-Theoretic SHAP Attributions]
    end

    subgraph S4["Stage 4: Decision Support & Optimization"]
        O1[Knapsack Budget Allocation Engine]
        O2[Engineering Rules: Check Dams / Trenches / Afforestation]
        O3[Landslide Geohazard Screening]
    end

    subgraph S5["Stage 5: Field Action & Continuous Learning"]
        F1[MapTiler 3D & 2D Dashboard]
        F2[Citizen Science Ground Truth Reporting]
        F3[Post-Monsoon Discharge Validation]
        F4[Model Weight Fine-Tuning & Retraining]
    end

    S1 --> S2 --> S3 --> S4 --> S5
    F4 -.->|Continuous Feedback Loop| M1
```

---

## 4. Hotkey Navigation & Keyboard Access Matrix

To support high-velocity field presentations and accessibility, the application binds global keyboard shortcuts:

| Key Binding | Target Action | Scope |
|-------------|---------------|-------|
| `ArrowRight` or `D` | Advance to Next Spring (Cycles 1 → 100) | Global (except active inputs) |
| `ArrowLeft` or `A` | Backtrack to Previous Spring (Cycles 100 → 1) | Global (except active inputs) |
| `Escape` | Dismiss active modal dialog / drawer | Modal Context |
| `Tab` / `Shift+Tab` | Accessible focus traversal | Modal & Form Controls |
