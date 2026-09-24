# Data Schemas & API Specifications — SIH26240

## 1. Master Dataset Column Data Dictionary

The benchmark file `darjeeling_final_spring_master_dataset.csv` contains 52 structured attributes representing physical in-situ measurements, satellite DEM extractions, hydro-conditioned derivatives, and model outputs.

| # | Column Name | Data Type | Units / Format | Description & Scientific Meaning | Example Value |
|---|-------------|-----------|----------------|----------------------------------|---------------|
| 1 | `Sl_No` | Integer | Serial (1-100) | Unique sequential index of the spring | `1` |
| 2 | `State` | String | Categorical | Indian Federal State | `West Bengal` |
| 3 | `District` | String | Categorical | Administrative District | `Darjeeling` |
| 4 | `Spring Name` | String | UTF-8 Text | Local vernacular name of the Dhara | `Devithan` |
| 5 | `Latitude` | Float | Decimal Degrees | WGS84 GPS Northing coordinate | `26.969786` |
| 6 | `Longitude` | Float | Decimal Degrees | WGS84 GPS Easting coordinate | `88.366003` |
| 7 | `Elevation` | Float | Meters ($m$) | In-situ GPS recorded barometric elevation | `1130.68` |
| 8 | `pH` | Float | Scale 0-14 | Field tested drinking water pH | `7.3` |
| 9 | `TDS` | Float | $mg/L$ (ppm) | Total Dissolved Solids | `118.0` |
| 10 | `DEM_Elevation` | Float | Meters ($m$) | Resampled elevation from 30m SRTM raster | `1181.0` |
| 11 | `Elevation_Difference` | Float | Meters ($m$) | `DEM_Elevation` minus field `Elevation` | `50.32` |
| 12 | `DEM_Neighborhood_Median` | Float | Meters ($m$) | Median elevation of 500m surrounding radius | `1189.0` |
| 13 | `Neighborhood_Difference` | Float | Meters ($m$) | Local micro-relief deviation | `58.32` |
| 14 | `Elevation_QC` | String | Enum | Elevation sanity status (`OK` / `FLAGGED`) | `OK` |
| 15 | `Slope` | Float | Degrees ($^\circ$) | Local surface gradient from DEM | `24.88` |
| 16 | `Aspect` | Float | Degrees (0-360) | Cardinal compass direction of slope face | `33.21` |
| 17 | `Annual_Rainfall_2023` | Float | Millimeters ($mm$) | IMD 2023 gridded total precipitation | `3029.22` |
| 18 | `LULC_Code` | Integer | ESA Code | Land Use Land Cover numeric code | `10` |
| 19 | `LULC` | String | Categorical | Land cover class (`Tree cover`, `Cropland`, etc.) | `Tree cover` |
| 20 | `Distance_to_Drainage_m` | Float | Meters ($m$) | Euclidean distance to nearest stream channel | `123.69` |
| 21 | `Flow_Accumulation` | Float | Cell Count | PySheds conditioned upstream contributing cells | `9.0` |
| 22 | `Clay_0_5cm` | Float | $g/kg$ ($\% / 10$) | SoilGrids topsoil clay fraction | `273.0` (27.3%) |
| 23 | `Geology` | String | Categorical | Lithological group (Schist, Phyllite, Gneiss) | `Schist` |
| 24 | `Geology_Code` | Integer | GSI Code | GSI 1:50,000 litho-stratigraphic code | `921` |
| 25 | `Geology_Source_Sheet` | String | Sheet Code | GSI Quadrangle map reference | `78B/5` |
| 26 | `Geology_QC` | String | Enum | Geological boundary quality flag | `VISUAL_REVIEW` |
| 27 | `Status` | String | Enum | Spatial zone generation state (`ZONE_CREATED`) | `ZONE_CREATED` |
| 28 | `Candidate_Cells` | Integer | Count | Number of 25m grid cells in recharge zone | `1044` |
| 29 | `Area_km2` | Float | Square Km ($km^2$) | Total delineated springshed catchment area | `0.9396` |
| 30 | `Mean_Zone_Score` | Float | 0.0 - 1.0 | Mean raster suitability across springshed | `0.6856` |
| 31 | `Median_Zone_Score` | Float | 0.0 - 1.0 | Median raster suitability score | `0.6750` |
| 32 | `Max_Zone_Score` | Float | 0.0 - 1.0 | Peak recharge suitability cell value | `0.8237` |
| 33 | `Mean_Elevation_m` | Float | Meters ($m$) | Average elevation of recharge catchment | `1210.26` |
| 34 | `Mean_Slope_deg` | Float | Degrees ($^\circ$) | Average slope gradient across recharge zone | `24.36` |
| 35 | `Mean_Drainage_Distance_m`| Float | Meters ($m$) | Average drainage distance across catchment | `61.33` |
| 36 | `Mean_Flow_Accumulation` | Float | Cells | Average flow concentration | `78.32` |
| 37 | `Elevation_Support` | Float | 0.0 - 1.0 | Topographic suitability factor | `0.6187` |
| 38 | `Drainage_Support` | Float | 0.0 - 1.0 | Channel proximity factor | `0.9904` |
| 39 | `Slope_Support` | Float | 0.0 - 1.0 | Slope infiltration suitability factor | `0.9923` |
| 40 | `TPI_Support` | Float | 0.0 - 1.0 | Morphometric ridge vs depression factor | `0.7184` |
| 41 | `Flow_Support` | Float | 0.0 - 1.0 | Runoff concentration factor | `0.7758` |
| 42 | `Evidence_Support_Index` | Float | 0.0 - 1.0 | Multi-criteria evidence fusion index | `0.8249` |
| 43 | `Final_Status` | String | Enum | Operational classification status | `PRIMARY_ZONE` |
| 44 | `Confidence_Level` | String | Enum | Model uncertainty rank (`Higher`, `Unresolved`) | `Higher` |
| 45 | `Interpretation` | String | Text | Operational guidance for hydrogeologist | `Model-derived zone...` |
| 46 | `Recharge_Suitability_Score`| Float | 0.0 - 100.0 | Continuous composite suitability index | `58.75` |
| 47 | `Recharge_Suitability_Class`| String | Enum | Suitability tier (`High`, `Moderate`, `Low`) | `Moderate` |
| 48 | `Indicative_Intervention` | String | Text | Prescribed engineering structure | `Site-specific assessment` |
| 49 | `Intervention_Category` | String | Categorical | Standardized intervention classification | `Site-specific Assessment`|
| 50 | `Risk_Flag` | String | Text | Geohazard warning description | `None` / `Field verif` |
| 51 | `Risk_Level` | String | Enum | Landslide / terrain hazard level (`Low`, `High`)| `Low` |
| 52 | `Spring_Revival_Priority_Score`| Float| 0.0 - 100.0 | Composite priority score for fund allocation | `74.12` |

---

## 2. GeoJSON Feature Specification

The application consumes standard RFC 7946 GeoJSON format:

```json
{
  "type": "FeatureCollection",
  "name": "Darjeeling_100_Springs_Final",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [88.366003, 26.969786, 1130.68]
      },
      "properties": {
        "slNo": 1,
        "code": "SP-001",
        "name": "Devithan",
        "discharge_lpm": 1.2,
        "suitabilityScore": 58.8,
        "suitabilityClass": "Moderate",
        "priorityScore": 74.1,
        "priorityClass": "Higher Priority",
        "geology": "Schist",
        "slopeDeg": 24.88,
        "finalStatus": "PRIMARY_ZONE",
        "riskLevel": "Low",
        "beneficiaryHouseholds": 140
      }
    }
  ]
}
```

---

## 3. REST API Contracts

All endpoints communicate over JSON with standard HTTP status codes (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Error`).

### 3.1 `GET /api/springs`
* **Description**: Returns all 100 pre-processed springs with hydrogeological attributes.
* **Response**:
```json
{
  "success": true,
  "count": 100,
  "data": [
    {
      "id": "spring-1",
      "code": "SP-001",
      "name": "Devithan",
      "latitude": 26.969786,
      "longitude": 88.366003,
      "elevationMeters": 1130.68,
      "historicalDischarge": 1.2,
      "suitabilityScore": 58.8,
      "priorityScore": 74.1,
      "status": "Primary Zone",
      "minBudgetRequired": 280000,
      "interventions": [
        { "name": "Contour Trenches", "type": "Contour Trench", "cost": 180000, "minBudget": 200000 },
        { "name": "Gully Check Dam", "type": "Check Dam", "cost": 100000, "minBudget": 280000 }
      ]
    }
  ]
}
```

### 3.2 `POST /api/optimizer`
* **Description**: Computes optimal allocation across 100 springs given a total rupee budget.
* **Request Body**:
```json
{
  "budget": 12000000
}
```
* **Response**:
```json
{
  "success": true,
  "data": {
    "budget": 12000000,
    "totalRechargeLiters": 6940000,
    "costPerThousandLiters": 1.73,
    "rechargeSurgePercent": 187,
    "revivedSpringsCount": 54,
    "totalSpringsCount": 100,
    "fundedInterventionsCount": 98,
    "structureBreakdown": {
      "checkDams": 34,
      "contourTrenchesKm": 54.5,
      "afforestationHectares": 66
    }
  }
}
```

### 3.3 `POST /api/field-validation`
* **Description**: Submits a ground truth survey from a citizen or field geologist.
* **Request Body**:
```json
{
  "springId": "spring-1",
  "springName": "Devithan",
  "measuredDischargeLpm": 0.95,
  "flowCondition": "Low",
  "ph": 7.1,
  "tds": 112,
  "latitude": 26.96981,
  "longitude": 88.36605,
  "observerName": "Sunil Gurung",
  "observerRole": "Gram Panchayat Water Secretary",
  "photoUrl": "data:image/jpeg;base64,...",
  "comments": "Seasonal decline observed early this year; trench clearing needed."
}
```

### 3.4 `POST /api/ai/predict`
* **Description**: Live XGBoost inference on custom terrain features with SHAP attributions.
* **Request Body**:
```json
{
  "slope": 22.5,
  "annualRainfall": 2600,
  "geology": "Daling Schist / Phyllite",
  "clayPercent": 25.0,
  "distanceToDrainage": 280,
  "flowAccumulation": 4500,
  "lulc": "Tree Cover"
}
```

---

## 4. Relational Database Schema (PostgreSQL + PostGIS DDL)

For enterprise scale-out to state water authorities:

```sql
-- Enable Spatial Extensions
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. Springs Master Table
CREATE TABLE springs (
    id SERIAL PRIMARY KEY,
    spring_code VARCHAR(32) UNIQUE NOT NULL,
    spring_name VARCHAR(128) NOT NULL,
    geom GEOMETRY(PointZ, 4326) NOT NULL,
    elevation_field NUMERIC(8, 2),
    elevation_dem NUMERIC(8, 2),
    slope_deg NUMERIC(5, 2) NOT NULL,
    aspect_deg NUMERIC(5, 2),
    annual_rainfall_mm NUMERIC(8, 2) DEFAULT 2500.0,
    geology_unit VARCHAR(64) NOT NULL,
    geology_code INT,
    clay_percent NUMERIC(5, 2),
    distance_drainage_m NUMERIC(8, 2),
    flow_accumulation NUMERIC(12, 2),
    lulc_class VARCHAR(64),
    baseline_discharge_lpm NUMERIC(8, 2),
    baseline_ph NUMERIC(4, 2),
    baseline_tds NUMERIC(8, 2),
    beneficiary_households INT DEFAULT 100,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Spatial Index on Spring Coordinates
CREATE INDEX idx_springs_geom ON springs USING GIST (geom);

-- 3. Springshed Catchment Zones
CREATE TABLE springshed_zones (
    id SERIAL PRIMARY KEY,
    spring_id INT REFERENCES springs(id) ON DELETE CASCADE,
    zone_geom GEOMETRY(Polygon, 4326) NOT NULL,
    area_km2 NUMERIC(8, 4),
    mean_suitability NUMERIC(5, 2),
    final_status VARCHAR(64) NOT NULL,
    risk_level VARCHAR(32) NOT NULL
);

-- 4. Field Validations & Community Reports
CREATE TABLE field_validations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    spring_id INT REFERENCES springs(id),
    observer_name VARCHAR(128) NOT NULL,
    observer_role VARCHAR(64),
    measured_discharge_lpm NUMERIC(8, 2) NOT NULL,
    measured_ph NUMERIC(4, 2),
    measured_tds NUMERIC(8, 2),
    photo_s3_uri TEXT,
    survey_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    verified BOOLEAN DEFAULT TRUE
);
```
