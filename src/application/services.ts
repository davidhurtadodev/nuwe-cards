const services = [
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

export const starterServices = services.map((service) => {
  if (
    service.name === 'Cooking recipes' ||
    service.name === 'Guided meditations' ||
    service.name === 'Mindfulness exercises' ||
    service.name === 'Sleep podcasts and exercises'
  ) {
    return { name: service.name, included: !service.included };
  }
  return service;
});
export const proServices = services.map((service) => {
  if (
    service.name === 'Cooking recipes' ||
    service.name === 'Guided meditations'
  ) {
    return { name: service.name, included: !service.included };
  }
  return service;
});
export const teamServices = services.map((service) => {
  return service;
});
