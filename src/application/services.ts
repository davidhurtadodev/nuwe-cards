export const services = [
  {
    name: 'Full course library',
    included: true,
  },
  {
    name: 'A new daily meditation',
    included: true,
  },
  {
    name: 'Access to the meditation guru',
    included: true,
  },
  {
    name: 'Sleep podcasts and exercises',
    included: true,
  },
  {
    name: 'Mindfulness exercises',
    included: true,
  },
  {
    name: 'Guided meditations',
    included: true,
  },
  {
    name: 'Cooking recipes',
    included: true,
  },
];

export const starterServices = (
  services: [{ name: string; included: boolean }]
) => {
  const starterservices = services.map((service) => {
    if (
      service.name === 'Cooking recipes' ||
      service.name === 'Guided meditations' ||
      service.name === 'Mindfulness exercises' ||
      service.name === 'Sleep podcast and exercises'
    ) {
      return { name: service.name, included: !service.included };
    }
    return service;
  });
  return starterservices;
};

export const proServices = (
  services: [{ name: string; included: boolean }]
) => {
  const Proservices = services.map((service) => {
    if (
      service.name === 'Mindfulness exercises' ||
      service.name === 'Sleep podcast and exercises'
    ) {
      return { name: service.name, included: !service.included };
    }
    return service;
  });
  return Proservices;
};
export const teamServices = (
  services: [{ name: string; included: boolean }]
) => {
  const teamservices = services.map((service) => {
    return service;
  });
  return teamservices;
};
