export function getFeatureOrigin(feature: Feature, service?: Service, network?: Network): string;
export function setFeatureOrigin(origins: Partial<Record<Feature, Partial<Record<Service, Partial<Record<Network, URL["origin"]>>>>>>): Record<Feature, Record<Service, Record<Network, string>>>;
export function setServiceOrigin(origins: Partial<Record<Service, Partial<Record<Network, URL["origin"]>>>>): Record<Feature, Record<Service, Record<Network, string>>>;
