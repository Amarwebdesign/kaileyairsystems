export type ServicesType = {
  residential: string[];
  commercial: string[];
  emergency: string[];
};

export const SERVICES_MENU: ServicesType = {
  residential: [
    "Residential AC Repair",
    "Residential AC Installation",
    "Residential AC Maintenance",
    "Residential Heating Repair",
    "Residential Heating Installation",
    "Residential Heating Maintenance",
    "Furnace Repair",
    "Heat Pump Services",
    "Ductless Mini Split Systems",
    "Indoor Air Quality",
    "Thermostat Installation",
    "Ductwork Services",
  ],
  commercial: [
    "Commercial AC Repair",
    "Commercial AC Installation",
    "Commercial Heating Repair",
    "Rooftop Unit (RTU) Services",
    "Commercial HVAC Maintenance Plans",
    "HVAC System Replacement",
    "Preventive Maintenance Contracts",
    "Commercial Refrigeration",
  ],
  emergency: [
    "24/7 AC Repair", 
    "24/7 Heating Repair"
  ],
};

export const LOCATIONS_LIST: string[] = [
  "San Jose", "Santa Clara", "Sunnyvale", "Mountain View", "Los Gatos",
  "Campbell", "Cambridge", "San Martin", "Gilroy", "Morgan Hill", "Fremont"
];